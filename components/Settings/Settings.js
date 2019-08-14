import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Pane,
  Heading,
  Text,
  Badge,
  Tablist,
  IconButton,
  Tab,
  TextInput,
  Icon,
  toaster,
} from 'evergreen-ui';
import sellerOnboarding from './sellerOnboarding';
import buyerOnboarding from './buyerOnboarding';
import AddCard from './AddCard';
import { CardStyle } from '../common/DefaultStyles';
import Button from '../common/Button';
import useMedia from '../common/useMedia';
import User, { CURRENT_USER_QUERY } from '../user/User';

export const shopQuery = gql`
  query($domain: String!) {
    shop(domain: $domain) {
      name
      settings
      user {
        id
      }
    }
  }
`;

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

export const shopQueryVars = {
  skip: 0,
  first: 10,
};

const Divider = (
  <Pane
    flexShrink={0}
    height={2}
    backgroundColor="#E4E7EB"
    borderRadius={1}
    marginBottom={12}
  />
);

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
  const [addCard, setAddCard] = useState(false);
  const [shopName, setShopName] = useState('');
  const [reviews, setReviews] = useState('');
  const [threshold, setThreshold] = useState('');
  const [URL, setURL] = useState('');

  const stacked = useMedia('(min-width: 1090px)');

  return (
    <User>
      {({ data: { me } }) => {
        if (!me) return null;
        return (
          <>
            <Pane display="flex" paddingTop={16} paddingBottom={16}>
              <Pane flex={1} alignItems="center" display="flex">
                <Heading size={700}>Settings</Heading>
              </Pane>
            </Pane>
            <Pane paddingBottom={12}>
              <Pane display="flex" alignItems="center">
                <Heading size={600}>Development</Heading>
              </Pane>
              <Text size={400} color="muted">
                Manage developmental options
              </Text>
            </Pane>
            {Divider}
            <Pane marginBottom={15} {...stacked && { display: 'flex' }}>
              <Tablist marginBottom={16} flexBasis={280} marginRight={24}>
                <Pane
                  {...stacked && {
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: 5,
                  }}
                >
                  {['URL'].map((tab, index) => (
                    <Tab
                      key={tab}
                      id={tab}
                      onSelect={() => setBillSetting(index)}
                      isSelected={index === billSetting}
                      aria-controls={`panel-${tab}`}
                      fontSize="17px"
                      {...{
                        borderRadius: '.25rem!important',
                        fontSize: '.925rem!important',
                      }}
                      paddingX={10}
                      paddingY={15}
                      marginBottom={5}
                      justifyContent="space-between"
                    >
                      {tab}
                    </Tab>
                  ))}
                </Pane>
              </Tablist>
              <Pane {...CardStyle} padding={25} background="tint1" flex="1">
                {['URL'].map((tab, index) => (
                  <Pane
                    key={tab}
                    id={`panel-${tab}`}
                    role="tabpanel"
                    aria-labelledby={tab}
                    aria-hidden={index !== billSetting}
                    display={index === billSetting ? 'block' : 'none'}
                  >
                    <Pane
                      display="flex"
                      position="relative"
                      height={32}
                      width="100%"
                      borderRadius={5}
                      // boxShadow="inset 0 0 0 1px rgb(54, 164, 110)"
                      // boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important"
                    >
                      <Pane
                        width={32}
                        height={32}
                        pointerEvents="none"
                        position="absolute"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Icon
                          icon="link"
                          color="#8b949c"
                          size={12}
                          zIndex={3}
                        />
                      </Pane>
                      <TextInput
                        // className="clean-input"
                        value={URL || me.url}
                        onChange={e => setURL(e.target.value)}
                        paddingLeft={32}
                        id="shop"
                        name="shop"
                        width="100%"
                        fontSize={15}
                        // borderTopRightRadius={0}
                        // borderBottomRightRadius={0}
                        marginBottom={15}
                        marginRight={10}
                        placeholder="https://www.yourcustomfrontend.com"
                      />
                      <Mutation
                        mutation={UPDATE_URL_MUTATION}
                        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                      >
                        {(updateURL, { error, loading }) => (
                          <Button
                            intent="success"
                            height={32}
                            fontSize="14px"
                            paddingX="14px"
                            onClick={async () => {
                              await updateURL({ variables: { url: URL } });
                              toaster.notify('URL has been saved');
                            }}
                            disabled={!URL || me.url === URL}
                            isLoading={loading}
                          >
                            Save
                          </Button>
                        )}
                      </Mutation>
                    </Pane>
                  </Pane>
                ))}
              </Pane>
            </Pane>
            <Pane paddingBottom={12}>
              <Pane display="flex" alignItems="center">
                <Heading size={600}>Marketplace</Heading>
                <Badge marginLeft={8} color="blue" isSolid textTransform="none">
                  βeta
                </Badge>
              </Pane>
              <Text size={400} color="muted">
                Manage marketplace buying and selling options
              </Text>
            </Pane>
            {Divider}
            <Pane>
              <Pane marginBottom={35} {...stacked && { display: 'flex' }}>
                <Tablist marginBottom={16} flexBasis={280} marginRight={24}>
                  <Pane
                    {...stacked && {
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {['Buyer', 'Seller'].map((tab, index) => (
                      <Tab
                        key={tab}
                        id={tab}
                        onSelect={() => setSelectedSetting(index)}
                        isSelected={index === selectedSetting}
                        aria-controls={`panel-${tab}`}
                        {...{
                          borderRadius: '.25rem!important',
                          fontSize: '.925rem!important',
                        }}
                        paddingX={10}
                        paddingY={15}
                        justifyContent="left"
                        marginBottom={5}
                      >
                        {tab}
                      </Tab>
                    ))}
                  </Pane>
                </Tablist>
                <Pane background="white" flex="1">
                  {['Buyer', 'Seller'].map((tab, index) => (
                    <Pane
                      key={tab}
                      id={`panel-${tab}`}
                      role="tabpanel"
                      aria-labelledby={tab}
                      aria-hidden={index !== selectedSetting}
                      display={index === selectedSetting ? 'block' : 'none'}
                    >
                      {index === 0 && (
                        <Mutation
                          mutation={CREATE_CUSTOMER_MUTATION}
                          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                        >
                          {(createCustomer, { error, loading }) =>
                            buyerOnboarding({
                              buyerStep: me.buyer ? stepCheck(me.buyer) : 0,
                              requested: me.buyer && me.buyer.questions,
                              shopName,
                              setShopName,
                              reviews,
                              setReviews,
                              threshold,
                              setThreshold,
                              error,
                              loading,
                              createCustomer,
                            })
                          }
                        </Mutation>
                      )}
                      {index === 1 && (
                        <Mutation
                          mutation={UPDATE_SELLER_MUTATION}
                          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                        >
                          {(updateSeller, { error, loading }) =>
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
                              error,
                              loading,
                              updateSeller,
                            })
                          }
                        </Mutation>
                      )}
                    </Pane>
                  ))}
                </Pane>
              </Pane>
              <Pane paddingBottom={12}>
                <Pane display="flex" alignItems="center">
                  <Heading size={600}>Billing</Heading>
                </Pane>
                <Text size={400} color="muted">
                  Manage plans and payment methods
                </Text>
              </Pane>
              {Divider}
              <Pane marginBottom={15} {...stacked && { display: 'flex' }}>
                <Tablist marginBottom={16} flexBasis={280} marginRight={24}>
                  <Pane
                    {...stacked && {
                      display: 'flex',
                      flexDirection: 'column',
                      marginBottom: 5,
                    }}
                  >
                    {['Payment Methods'].map((tab, index) => (
                      <Tab
                        key={tab}
                        id={tab}
                        onSelect={() => setBillSetting(index)}
                        isSelected={index === billSetting}
                        aria-controls={`panel-${tab}`}
                        {...{
                          borderRadius: '.25rem!important',
                          fontSize: '.925rem!important',
                        }}
                        paddingX={10}
                        paddingY={15}
                        marginBottom={5}
                        justifyContent="space-between"
                      >
                        {tab}
                        {index === 0 && (
                          <IconButton
                            height={16}
                            icon="plus"
                            marginLeft={8}
                            appearance="primary"
                            intent="default"
                            borderRadius={20}
                            outline="none"
                            onClick={() => setAddCard(!addCard)}
                          />
                        )}
                      </Tab>
                    ))}
                  </Pane>
                </Tablist>
                <Pane {...CardStyle} padding={25} background="tint1" flex="1">
                  {['Payment Methods'].map((tab, index) => (
                    <Pane
                      key={tab}
                      id={`panel-${tab}`}
                      role="tabpanel"
                      aria-labelledby={tab}
                      aria-hidden={index !== billSetting}
                      display={index === billSetting ? 'block' : 'none'}
                    >
                      {index === 0 && (
                        <>
                          {addCard && (
                            <Pane
                              backgroundColor="#f5f6f7"
                              marginBottom={15}
                              borderRadius={5}
                              elevation={1}
                              transition="opacity .15s linear"
                            >
                              <AddCard />
                            </Pane>
                          )}

                          {me.buyer &&
                          me.buyer.account &&
                          me.buyer.account.sources ? (
                            me.buyer.account.sources.data.map(card => (
                              <Pane
                                backgroundColor="#f5f6f7"
                                borderRadius={5}
                                padding={10}
                                display="flex"
                                alignItems="center"
                                elevation={1}
                              >
                                <Pane width={30} height={30} marginX={8}>
                                  <svg
                                    version="1.1"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 291.791 291.791"
                                    style={{
                                      enableBackground:
                                        'new 0 0 291.791 291.791',
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
                                </Pane>
                                <Text size={400}>ending in {card.last4}</Text>
                                <Text
                                  size={400}
                                  marginLeft="auto"
                                  marginRight={20}
                                  color="#66788A"
                                >
                                  {card.exp_month}/{card.exp_year}
                                </Text>
                                <Button intent="none">Update</Button>
                              </Pane>
                            ))
                          ) : (
                            <Pane
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              flexDirection="column"
                              borderRadius={3}
                            >
                              <Heading margin="1em" size={600}>
                                No Payment Methods Added.
                              </Heading>
                            </Pane>
                          )}
                        </>
                      )}
                    </Pane>
                  ))}
                </Pane>
              </Pane>
            </Pane>
          </>
        );
      }}
    </User>
  );
}
