import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  Box,
  Heading,
  Text,
  Icon,
  Button,
  Badge,
  Divider,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  useToast,
} from '@chakra-ui/core';
import sellerOnboarding from './sellerOnboarding';
import buyerOnboarding from './buyerOnboarding';
import AddCard from './AddCard';
import { CardStyle } from '../common/DefaultStyles';
import useMedia from '../common/useMedia';
import { CURRENT_USER_QUERY } from '../user/User';

export const UPDATE_SELLER_MUTATION = gql`
  mutation updateSeller($userInput: Json!) {
    updateSeller(userInput: $userInput) {
      id
    }
  }
`;

const CREATE_CUSTOMER_MUTATION = gql`
  mutation createCustomer($userInput: Json!) {
    createCustomer(userInput: $userInput) {
      cardObj
    }
  }
`;

const UPDATE_URL_MUTATION = gql`
  mutation updateURL($url: String!) {
    updateURL(url: $url) {
      url
    }
  }
`;

const UPDATE_ZINC_MUTATION = gql`
  mutation updateZincToken($token: String!) {
    updateZincToken(token: $token) {
      zincToken
    }
  }
`;

function stepCheck(user) {
  if (!user.status) {
    return 0;
  }
  if (!user.account) {
    return 1;
  }
  return 2;
}

export default function Shop() {
  const [selectedSetting, setSelectedSetting] = useState(0);
  const [billSetting, setBillSetting] = useState(0);
  const [developSetting, setDevelopSetting] = useState(0);
  const [addCard, setAddCard] = useState(false);
  const [shopName, setShopName] = useState('');
  const [reviews, setReviews] = useState('');
  const [threshold, setThreshold] = useState('');
  const [URL, setURL] = useState('');
  const [ZincToken, setZincToken] = useState('');
  const stacked = useMedia('(min-width: 1090px)');

  const toast = useToast();

  const {
    data: { me },
  } = useQuery(CURRENT_USER_QUERY);

  const [
    createCustomer,
    { error: createCustomerError, loading: createCustomerLoading },
  ] = useMutation(CREATE_CUSTOMER_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const [
    updateSeller,
    { error: updateSellerError, loading: updateSellerLoading },
  ] = useMutation(UPDATE_SELLER_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const [
    updateURL,
    { error: updateURLError, loading: updateURLLoading },
  ] = useMutation(UPDATE_URL_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const [
    updateZincToken,
    { error: updateZincTokenError, loading: updateZincTokenLoading },
  ] = useMutation(UPDATE_ZINC_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  if (!me) return null;
  return (
    <>
      <Box display="flex" py={4}>
        <Box flex={1} alignItems="center" display="flex">
          <Heading fontSize="2xl" color="text" fontWeight={500}>
            Settings
          </Heading>
        </Box>
      </Box>
      <Box>
        <Box display="flex" alignItems="center">
          <Heading fontSize="xl" fontWeight={600} color="#435567">
            Development
          </Heading>
        </Box>
        <Text fontSize="md" color="gray.600">
          Manage developmental options
        </Text>
      </Box>
      <Divider borderColor="gray.400" my={4} />
      <Box
        marginBottom={15}
        {...stacked && { display: 'flex', alignItems: 'flex-start' }}
      >
        <Box marginBottom={4} flexBasis={280}>
          <Box
            display="flex"
            flexDirection={stacked ? 'column' : 'row'}
            mr={stacked && 2}
            mb={stacked && 5}
          >
            {['URL'].map((tab, index) => (
              <Box
                p={2}
                mr={2}
                mt={2}
                borderRadius={2}
                bg={index === developSetting && '#e1eaf4'}
                onClick={() => setDevelopSetting(index)}
                cursor="pointer"
                display="flex"
                alignItems="center"
              >
                <Heading
                  fontSize="md"
                  fontWeight={600}
                  color={index === developSetting ? '#1070ca' : 'gray.500'}
                >
                  {tab}
                </Heading>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          backgroundColor="gray.50"
          marginBottom={35}
          borderRadius={3}
          boxShadow="sm"
          padding={4}
          flex="1"
        >
          {['URL'].map((tab, index) => (
            <Box
              key={tab}
              id={`Boxl-${tab}`}
              role="tabBoxl"
              aria-labelledby={tab}
              aria-hidden={index !== developSetting}
              display={index === developSetting ? 'block' : 'none'}
            >
              {index === 0 && (
                <InputGroup size="md">
                  <Input
                    id="sshop"
                    name="sshop"
                    pr="4.5rem"
                    pl="2.4rem"
                    placeholder="https://www.yourcustomfrontend.com"
                    borderColor="gray.300"
                    value={URL || me.url}
                    onChange={e => setURL(e.target.value)}
                    color="gray.700"
                  />
                  <InputLeftElement
                    children={<Icon name="code" color="gray.400" />}
                  />

                  <InputRightElement width="4.5rem">
                    <Button
                      type="submit"
                      h="1.75rem"
                      size="sm"
                      variantColor="green"
                      onClick={async () => {
                        await updateURL({ variables: { url: URL } });
                        toast({
                          position: 'top-right',
                          title: 'URL has been saved',
                          status: 'success',
                          duration: 2000,
                          isClosable: true,
                        });
                      }}
                      disabled={!URL || me.url === URL}
                      isLoading={updateURLLoading}
                    >
                      SAVE
                    </Button>
                  </InputRightElement>
                </InputGroup>
              )}
              {/* {index === 1 && (
                <InputGroup>
                  <Input
                    id="api"
                    name="api"
                    pr="4.5rem"
                    pl="2.4rem"
                    placeholder="000000000000000000000000"
                    borderColor="gray.300"
                    value={ZincToken || me.zincToken}
                    onChange={e => setZincToken(e.target.value)}
                    color="gray.700"
                  />
                  <InputLeftElement
                    children={<Icon name="code" color="gray.400" />}
                  />

                  <InputRightElement width="4.5rem">
                    <Button
                      type="submit"
                      h="1.75rem"
                      size="sm"
                      variantColor="green"
                      onClick={async () => {
                        await updateZincToken({
                          variables: { token: ZincToken },
                        });
                        toast({
                          position: 'top-right',
                          title: 'Token has been saved',
                          status: 'success',
                          duration: 2000,
                          isClosable: true,
                        });
                      }}
                      disabled={!ZincToken || me.zincToken === ZincToken}
                      isLoading={updateZincTokenLoading}
                    >
                      SAVE
                    </Button>
                  </InputRightElement>
                </InputGroup>
              )} */}
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Box display="flex" alignItems="center">
          <Heading fontSize="xl" fontWeight={600} color="#435567">
            Marketplace
          </Heading>
          <Badge ml={3} variant="solid" variantColor="blue">
            βeta
          </Badge>
        </Box>
        <Text fontSize="md" color="gray.600">
          Manage marketplace buying and selling options
        </Text>
      </Box>
      <Divider borderColor="gray.400" my={4} />
      <Box>
        <Box marginBottom={35} {...stacked && { display: 'flex' }}>
          <Box marginBottom={4} flexBasis={280}>
            <Box
              display="flex"
              flexDirection={stacked ? 'column' : 'row'}
              mr={stacked && 2}
              mb={stacked && 5}
            >
              {['Buyer', 'Seller'].map((tab, index) => (
                <Box
                  p={2}
                  mr={2}
                  mt={2}
                  borderRadius={2}
                  bg={index === selectedSetting && '#e1eaf4'}
                  onClick={() => setSelectedSetting(index)}
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                >
                  <Heading
                    fontSize="md"
                    fontWeight={600}
                    color={index === selectedSetting ? '#1070ca' : 'gray.500'}
                  >
                    {tab}
                  </Heading>
                </Box>
              ))}
            </Box>
          </Box>

          <Box background="white" flex="1">
            {['Buyer', 'Seller'].map((tab, index) => (
              <Box
                key={tab}
                id={`Boxl-${tab}`}
                role="tabBoxl"
                aria-labelledby={tab}
                aria-hidden={index !== selectedSetting}
                display={index === selectedSetting ? 'block' : 'none'}
              >
                {index === 0 &&
                  buyerOnboarding({
                    buyerStep: me.buyer ? stepCheck(me.buyer) : 0,
                    requested: me.buyer && me.buyer.questions,
                    shopName,
                    setShopName,
                    reviews,
                    setReviews,
                    threshold,
                    setThreshold,
                    error: createCustomerError,
                    loading: createCustomerLoading,
                    createCustomer,
                    addCardComp: (
                      <AddCard createCustomer={() => createCustomer} />
                    ),
                  })}
                {index === 1 &&
                  sellerOnboarding({
                    sellerStep: me.seller ? stepCheck(me.seller) : 0,
                    requested: me.seller && me.seller.questions,
                    id: me.id,
                    shopName,
                    setShopName,
                    reviews,
                    setReviews,
                    threshold,
                    setThreshold,
                    error: updateSellerError,
                    loading: updateSellerLoading,
                    updateSeller,
                  })}
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          <Box display="flex" alignItems="center">
            <Heading fontSize="xl" fontWeight={600} color="#435567">
              Billing
            </Heading>
          </Box>
          <Text fontSize="md" color="gray.600">
            Manage plans and payment methods
          </Text>
        </Box>
        <Divider borderColor="gray.400" my={4} />
        <Box marginBottom={15} {...stacked && { display: 'flex' }}>
          <Box marginBottom={4} flexBasis={280}>
            <Box
              display="flex"
              flexDirection={stacked ? 'column' : 'row'}
              mr={stacked && 2}
              mb={stacked && 5}
            >
              {['Payment Methods'].map((tab, index) => (
                <Box
                  p={2}
                  mr={2}
                  mt={2}
                  borderRadius={2}
                  bg={index === billSetting && '#e1eaf4'}
                  onClick={() => setBillSetting(index)}
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                >
                  <Heading
                    fontSize="md"
                    fontWeight={600}
                    color={index === billSetting ? '#1070ca' : 'gray.500'}
                    mr={2}
                  >
                    {tab}
                  </Heading>
                  {index === 0 && (
                    <Button
                      variantColor="blue"
                      backgroundImage="linear-gradient(rgb(7, 136, 222), rgb(17, 106, 184));"
                      borderRadius="999px"
                      height="18px"
                      minWidth="18px"
                      px={0}
                      ml="auto"
                      onClick={() => setAddCard(!addCard)}
                    >
                      <Icon size="1.1rem" name="small-add" />
                    </Button>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
          <Box {...CardStyle} padding={25} background="tint1" flex="1">
            {['Payment Methods'].map((tab, index) => (
              <Box
                key={tab}
                id={`Boxl-${tab}`}
                aria-labelledby={tab}
                aria-hidden={index !== billSetting}
                display={index === billSetting ? 'block' : 'none'}
              >
                {index === 0 && (
                  <>
                    {addCard && (
                      <Box
                        backgroundColor="#f5f6f7"
                        marginBottom={15}
                        borderRadius={5}
                        elevation={1}
                        transition="opacity .15s linear"
                      >
                        <AddCard createCustomer={() => createCustomer} />
                      </Box>
                    )}

                    {me.buyer &&
                    me.buyer.account &&
                    me.buyer.account.sources ? (
                      me.buyer.account.sources.data.map(card => (
                        <Box
                          backgroundColor="#f5f6f7"
                          borderRadius={5}
                          padding={2}
                          display="flex"
                          alignItems="center"
                          boxShadow="sm"
                        >
                          <Box width={30} height={30} marginX={4}>
                            <svg
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 291.791 291.791"
                              style={{
                                enableBackground: 'new 0 0 291.791 291.791',
                              }}
                              xmlSpace="preserve"
                            >
                              <path
                                style={{ fill: '#E2574C' }}
                                d="M182.298 145.895c0 50.366-40.801 91.176-91.149 91.176S0 196.252 0 145.895s40.811-91.176 91.149-91.176 91.149 40.819 91.149 91.176z"
                              />
                              <path
                                style={{ fill: '#F4B459' }}
                                d="M200.616 54.719c-20.442 0-39.261 6.811-54.469 18.181l.073.009c2.991 2.89 6.291 4.924 8.835 8.251l-18.965.301c-2.972 3-5.68 6.264-8.233 9.656H161.3c2.544 3.054 4.896 5.708 7.03 9.081h-46.536c-1.705 2.936-3.282 5.954-4.659 9.09h56.493c1.477 3.127 2.799 5.489 3.921 8.799h-63.76a87.809 87.809 0 0 0-2.535 9.646h68.966c.675 3.155 1.194 6.072 1.55 9.045h-71.884c-.301 3-.456 6.045-.456 9.118h72.859c0 3.228-.228 6.218-.556 9.118h-71.847c.31 3.091.766 6.127 1.368 9.118h68.856a107.579 107.579 0 0 1-2.562 9.008h-63.969c.966 3.118 2.143 6.145 3.428 9.099h56.621c-1.568 3.319-3.346 5.972-5.306 9.081h-46.691a88.709 88.709 0 0 0 6.081 9.154l33.589.501c-2.863 3.437-6.537 5.507-9.884 8.516.182.146-5.352-.018-16.248-.191 16.576 17.105 39.744 27.772 65.446 27.772 50.357 0 91.176-40.82 91.176-91.176s-40.81-91.177-91.175-91.177z"
                              />
                            </svg>
                          </Box>
                          <Text fontSize="sm" color="gray.700">
                            ending in {card.last4}
                          </Text>
                          <Text
                            fontSize="sm"
                            marginLeft="auto"
                            marginRight={4}
                            color="#66788A"
                          >
                            {card.exp_month}/{card.exp_year}
                          </Text>
                          <Button
                            variantColor="blue"
                            variant="ghost"
                            letterSpacing="wider"
                            fontWeight={700}
                          >
                            UPDATE
                          </Button>
                        </Box>
                      ))
                    ) : (
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        borderRadius={3}
                        bg="gray.100"
                      >
                        <Heading
                          margin="1em"
                          fontSize="lg"
                          textTransform="uppercase"
                          color="text"
                          fontWeight={600}
                        >
                          No Payment Methods Added.
                        </Heading>
                      </Box>
                    )}
                  </>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
