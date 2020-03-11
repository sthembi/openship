import { useState, useEffect } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import {
  Box,
  PseudoBox,
  Heading,
  Icon,
  Input,
  Text,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useToast,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { CHANNELS_QUERY, channelsQueryVars } from './Page';
import Signout from '../user/Signout';
import { front, prodFront } from '../../config';

const CREATE_CHANNEL_MUTATION = gql`
  mutation CREATE_CHANNEL_MUTATION(
    $name: String!
    $type: ChannelType!
    $settings: Json!
  ) {
    createChannel(name: $name, type: $type, settings: $settings) {
      id
      type
      name
      createdAt
      settings
    }
  }
`;

const Divider = (
  <Box
    flexShrink={0}
    height="3px"
    backgroundColor="rgb(44, 71, 118)"
    borderRadius={1}
    marginY={1}
    marginX={3}
  />
);

const option = (name, options, update, selected) => (
  <Box marginBottom={2}>
    <Heading fontSize="sm" fontWeight={500} marginBottom={2} color="gray.600">
      {name}
    </Heading>
    <Box width="100%">
      {options.map((a, index) => (
        <Box
          display="flex"
          alignItems="center"
          p={2}
          mt={2}
          borderRadius={2}
          bg={a === selected ? 'blue.50' : 'gray.50'}
          onClick={() => update(a)}
          cursor="pointer"
        >
          <Icon
            name="check-circle"
            color={a === selected ? 'blue.200' : 'gray.400'}
            mr={3}
          />

          <Heading
            fontSize="xs"
            fontWeight={500}
            color={a === selected ? 'blue.600' : 'gray.500'}
            letterSpacing="wide"
            textTransform="uppercase"
          >
            {a}
          </Heading>
        </Box>
      ))}
    </Box>
  </Box>
);

export const NavGroupTitle = ({ title, icon, fd }) => (
  <Box display="flex" flexDirection={fd || 'row'} alignItems="center">
    <Heading
      my={2}
      ml={4}
      mr="auto"
      textTransform="uppercase"
      letterSpacing="wide"
      fontSize="sm"
      fontWeight={800}
      color="#d7dae0"
    >
      {title}
    </Heading>
    {icon}
  </Box>
);

function postRequest(url, data) {
  return fetch(url, {
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify({ shops: data }), // Use correct payload (matching 'Content-Type')
    headers: { 'Content-Type': 'application/json' },
  });
}

const Header = ({
  router,
  logo,
  onClick,
  channels,
  channelsError,
  shops,
  shopsError,
}) => {
  const [type, setType] = useState('zinc');
  const [shopURL, setShopURL] = useState('');
  const [name, setName] = useState('');
  const [key, setKey] = useState('');
  const [secret, setSecret] = useState('');
  const toast = useToast();

  const [createChannel] = useMutation(CREATE_CHANNEL_MUTATION, {
    refetchQueries: [
      {
        query: CHANNELS_QUERY,
        variables: channelsQueryVars,
      },
    ],
  });

  useEffect(() => {
    postRequest(
      `${process.env.NODE_ENV === 'development' ? front : prodFront}/_shopify`,
      shops
    );
  }, [shops]);

  const { asPath } = router;

  const NavItem = ({ icon, iconColor, title, href }) => (
    <Box
      borderLeft={`3px solid ${
        asPath && asPath.startsWith(href) ? 'rgb(66, 95, 146)' : 'transparent'
      }`}
      background={asPath && asPath.startsWith(href) ? 'rgb(35, 61, 106)' : null}
      onSelect={onClick}
    >
      <Link href={href}>
        <PseudoBox
          onSelect={onClick}
          cursor="pointer"
          width="100%"
          height="40px"
          display="flex"
          alignItems="center"
          _hover={asPath && !asPath.startsWith(href) && { bg: '#192c4e' }}
        >
          <Icon
            name={icon}
            color={iconColor || '#ffffff'}
            marginLeft="13px"
            // size={15}
          />
          <Heading
            color="#fff"
            ml={2}
            fontSize={15}
            overflow="visible"
            textTransform="capitalize"
          >
            {title}
          </Heading>
        </PseudoBox>
      </Link>
    </Box>
  );

  return (
    <Box
      background="rgb(23, 43, 77)"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Box>
        <Box width="100%">
          {logo}
          <Box py={2}>
            <NavGroupTitle title="Orders" />
            <NavItem icon="delta" title="Pending" href="/pending" />
            <NavItem icon="time" title="Processed" href="/processed" />
            <NavItem icon="check-circle" title="Completed" href="/completed" />
          </Box>
          {Divider}
          <Box py={2}>
            <NavGroupTitle title="Products" />
            <NavItem icon="database" title="All Products" href="/products" />
            <NavItem icon="globe" title="Marketplace" href="/find" />
          </Box>
          {Divider}
          <Box py={2}>
            <NavGroupTitle
              title={
                <Link href="/shops">
                  <Box color="#d7dae0" cursor="pointer">
                    Shops
                  </Box>
                </Link>
              }
              fd={shops && shops.length === 0 && 'column'}
              icon={
                <Popover>
                  {shops.length > 0 ? (
                    <PopoverTrigger>
                      <Button
                        variantColor="green"
                        backgroundImage="linear-gradient(to bottom, #23C277, #399D6C)"
                        borderRadius="50%"
                        height="20px"
                        minWidth="20px"
                        px={0}
                        mr={4}
                      >
                        <Icon size={5} name="small-add" />
                      </Button>
                    </PopoverTrigger>
                  ) : (
                    <PopoverTrigger>
                      <Box px={4} mt={2} width="100%">
                        <Button
                          variantColor="green"
                          variant="ghost"
                          bg="green.50"
                          width="100%"
                          borderRadius={3}
                          marginRight={1}
                          px={2}
                          textTransform="uppercase"
                          letterSpacing="wide"
                          fontSize="md"
                          fontWeight={700}
                          _hover={{ opacity: 0.8 }}
                        >
                          Add first shop
                        </Button>
                      </Box>
                    </PopoverTrigger>
                  )}
                  <PopoverContent zIndex={4}>
                    <Box
                      width="100%"
                      display="flex"
                      alignItems="left"
                      justifyContent="center"
                      flexDirection="column"
                      padding={15}
                    >
                      <form
                        method="GET"
                        action="/shopify/auth"
                        style={{ width: '100%' }}
                      >
                        <Text
                          fontSize="sm"
                          color="gray.600"
                          mb={1}
                          fontWeight={500}
                        >
                          Shop Name
                        </Text>
                        <Input label="Shop Name" mb={2} />

                        <Text
                          fontSize="sm"
                          color="gray.600"
                          mb={1}
                          fontWeight={500}
                        >
                          Shop URL
                        </Text>
                        <Input label="Shop URL" mb={1} id="shop" name="shop" />
                        <Text fontSize="xs" color="gray.500" mb={1}>
                          Must end in .myshopify.com
                        </Text>

                        <Button
                          variantColor="green"
                          variant="ghost"
                          backgroundColor="green.50"
                          borderRadius={3}
                          marginRight={1}
                          px={3}
                          height={8}
                          width="100%"
                          type="submit"
                        >
                          <Heading
                            fontSize="sm"
                            fontWeight={700}
                            textTransform="uppercase"
                            letterSpacing="wide"
                          >
                            Add Shop
                          </Heading>
                        </Button>
                      </form>
                    </Box>
                  </PopoverContent>
                </Popover>
              }
            />
            {(() => {
              if (shopsError || !shops) return null;
              return shops.map((shop, index) => (
                <Box key={index}>
                  <NavItem
                    icon="vinyl"
                    iconColor="green.500"
                    title={shop.name}
                    href={`/shop?shop=${shop.domain.split('.')[0]}`}
                  />
                </Box>
              ));
            })()}
          </Box>
          {Divider}
          <Box py={2}>
            <NavGroupTitle
              title={
                <Box color="#d7dae0" cursor="pointer">
                  Channels
                </Box>
              }
              fd={channels && channels.length === 0 && 'column'}
              icon={
                <Popover>
                  {channels && channels.length === 0 ? (
                    <PopoverTrigger>
                      <Box px={4} mt={2} width="100%">
                        <Button
                          variantColor="blue"
                          variant="ghost"
                          bg="blue.50"
                          width="100%"
                          borderRadius={3}
                          marginRight={1}
                          px={2}
                          textTransform="uppercase"
                          letterSpacing="wide"
                          fontSize="md"
                          fontWeight={700}
                          _hover={{ opacity: 0.8 }}
                        >
                          Add first channel
                        </Button>
                      </Box>
                    </PopoverTrigger>
                  ) : (
                    <PopoverTrigger>
                      <Button
                        variantColor="green"
                        backgroundImage="linear-gradient(to bottom, #23C277, #399D6C)"
                        borderRadius="50%"
                        height="20px"
                        minWidth="20px"
                        px={0}
                        mr={4}
                      >
                        <Icon size={5} name="small-add" />
                      </Button>
                    </PopoverTrigger>
                  )}
                  <PopoverContent zIndex={4}>
                    <Box
                      width="100%"
                      display="flex"
                      alignItems="left"
                      justifyContent="center"
                      flexDirection="column"
                      padding={15}
                    >
                      {option(
                        'Channel Type',
                        ['zinc', 'shopify'],
                        a => setType(a),
                        type
                      )}
                      <Text
                        fontSize="sm"
                        color="gray.600"
                        mb={1}
                        fontWeight={500}
                      >
                        Name
                      </Text>
                      <Input
                        label="Name"
                        mb={2}
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                      {type === 'zinc' && (
                        <>
                          <Text
                            fontSize="sm"
                            color="gray.600"
                            mb={1}
                            fontWeight={500}
                          >
                            API Key
                          </Text>
                          <Input
                            label="API Key"
                            mb={1}
                            value={key}
                            onChange={e => setKey(e.target.value)}
                          />
                          <Text fontSize="xs" color="gray.500" mb={2}>
                            You must get the key at Zinc.io
                          </Text>
                        </>
                      )}
                      {type === 'shopify' && (
                        <>
                          <Text
                            fontSize="sm"
                            color="gray.600"
                            mb={1}
                            fontWeight={500}
                          >
                            Shop URL
                          </Text>
                          <Input
                            label="Name"
                            mb={2}
                            value={shopURL}
                            onChange={e => setShopURL(e.target.value)}
                          />
                          <Text
                            fontSize="sm"
                            color="gray.600"
                            mb={1}
                            fontWeight={500}
                          >
                            API Key
                          </Text>
                          <Input
                            label="key"
                            mb={2}
                            value={key}
                            onChange={e => setKey(e.target.value)}
                          />
                          <Text
                            fontSize="sm"
                            color="gray.600"
                            mb={1}
                            fontWeight={500}
                          >
                            Secret
                          </Text>
                          <Input
                            label="Secret"
                            mb={2}
                            value={secret}
                            onChange={e => setSecret(e.target.value)}
                          />
                        </>
                      )}

                      <Button
                        variantColor="green"
                        variant="ghost"
                        backgroundColor="green.50"
                        borderRadius={3}
                        marginRight={1}
                        px={3}
                        height={8}
                        width="100%"
                        onClick={async () => {
                          await createChannel({
                            variables: {
                              type: type.toUpperCase(),
                              name,
                              settings: {
                                ...(key && { key }),
                                ...(secret && { secret }),
                                ...(shopURL && { shopURL }),
                              },
                            },
                          });
                          setName('');
                          setKey('');
                          setSecret('');
                          setShopURL('');
                          toast({
                            position: 'top-right',
                            title: 'Channel has been added.',
                            status: 'success',
                            duration: 2000,
                            isClosable: true,
                          });
                        }}
                      >
                        <Heading
                          fontSize="sm"
                          fontWeight={700}
                          textTransform="uppercase"
                          letterSpacing="wide"
                        >
                          Add Channel
                        </Heading>
                      </Button>
                    </Box>
                  </PopoverContent>
                </Popover>
              }
            />
            {(() => {
              if (channelsError || !channels) return null;
              return channels.map((channel, index) => (
                <Box key={index}>
                  <NavItem
                    icon="vinyl"
                    iconColor="green.500"
                    title={channel.name}
                    href={`/channel?channel=${channel.name}`}
                  />
                </Box>
              ));
            })()}
          </Box>
          {Divider}
          <Box>
            {/* <NavGroupTitle title="Settings" /> */}
            <NavItem icon="settings" title="Settings" href="/settings" />
          </Box>
        </Box>
      </Box>
      <Box marginTop="auto">
        <Signout />
      </Box>
    </Box>
  );
};

export default withRouter(Header);
