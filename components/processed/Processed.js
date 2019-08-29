import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Pane, Heading, Spinner, Icon } from 'evergreen-ui';
import OrderListItem from '../common/orderListItem/OrderListItem';
import Button from '../common/Button';

import { CardStyle } from '../common/DefaultStyles';

export const OrdersQuery = gql`
  query OrdersQuery($skip: Int, $first: Int) {
    orders(
      first: $first
      skip: $skip
      orderBy: createdAt_DESC
      where: { mpCart: null }
    ) {
      id
      orderId
      orderName
      email
      first_name
      last_name
      streetAddress1
      streetAddress2
      city
      state
      zip
      phone
      lineItems
      currency
      totalPrice
      subTotalPrice
      totalDiscount
      totalTax
      createAt
      mpCart
      mpCheckout
      zincCart
      zincCheckout
      shopName
    }
  }
`;

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    ordersConnection(where: { mpCart: null }) {
      aggregate {
        count
      }
    }
  }
`;

function PendingOrders() {
  const [skip, setSkip] = useState(0);
  const [firstQ, setFirstQ] = useState(100);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pane display="flex" paddingTop={16} paddingBottom={16}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={700}>Processed Orders</Heading>
        </Pane>
      </Pane>
      <Pane display="flex" flexWrap="wrap">
        <Query
          query={OrdersQuery}
          variables={{
            skip,
            first: firstQ,
          }}
        >
          {({ loading, error, data }) => {
            if (loading)
              return (
                <>
                  <Pane>
                    <Pane {...CardStyle}>
                      <Pane
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        height="50vh"
                      >
                        <Spinner size={80} />
                      </Pane>
                    </Pane>
                  </Pane>
                </>
              );
            if (error) return `Error! ${error.message}`;
            const { orders } = data;

            return (
              <>
                <Pane width="100%" {...CardStyle}>
                  <Pane
                    display="flex"
                    paddingX="1em"
                    paddingY=".8em"
                    alignItems="center"
                  >
                    <Query query={PAGINATION_QUERY}>
                      {({ data, loading, error }) => {
                        const count = data.ordersConnection
                          ? data.ordersConnection.aggregate.count
                          : 0;

                        return (
                          <>
                            <Heading size={100}>{count} Orders</Heading>
                            <Pane marginLeft="auto">
                              <Button
                                background={open ? '#D4EEE2' : '#F7F7F7'}
                                borderRadius={3}
                                onClick={() => setOpen(!open)}
                              >
                                <Heading
                                  size={100}
                                  fontWeight={700}
                                  color="#00783E"
                                >
                                  Expand All
                                </Heading>
                                <Icon
                                  color="#00783E"
                                  size={13}
                                  icon="chevron-down"
                                  marginRight={-4}
                                  marginLeft={3}
                                />
                              </Button>
                            </Pane>
                          </>
                        );
                      }}
                    </Query>
                  </Pane>
                  {orders.length ? (
                    orders.map(order => (
                      <Pane key={order.id}>
                        <Pane
                          opacity={loading && '0.2'}
                          width="100%"
                          height="100%"
                          position="relative"
                        >
                          {loading && (
                            <Pane
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              position="absolute"
                              width="100%"
                              height="100%"
                            >
                              <Spinner size={80} />
                            </Pane>
                          )}
                          <Pane borderTop="0.1rem solid #dfe3e8">
                            <OrderListItem
                              {...order}
                              key={order.id}
                              index={order.id}
                              disabled
                              open={open}
                            />
                          </Pane>
                        </Pane>
                      </Pane>
                    ))
                  ) : (
                    <Pane
                      background="tint2"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                      borderRadius={3}
                    >
                      <Heading margin="1em" size={600}>
                        Your processed orders will appear here.
                      </Heading>
                    </Pane>
                  )}
                </Pane>
              </>
            );
          }}
        </Query>
      </Pane>
    </>
  );
}

export default PendingOrders;
