import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Box, Heading, Spinner, Icon, Button } from '@chakra-ui/core';
import OrderListItem from '../common/orderListItem/OrderListItem';
import { CardStyle } from '../common/DefaultStyles';

export const ORDER_QUERY = gql`
  query OrdersQuery($skip: Int, $first: Int, $processed: Processed) {
    orders(
      first: $first
      skip: $skip
      orderBy: createAt_DESC
      where: { processed: $processed }
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
      processed
      shopName
    }
  }
`;

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    ordersConnection(where: { processed: TRUE }) {
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

  const {
    data: ordersData,
    error: ordersError,
    loading: ordersLoading,
  } = useQuery(ORDER_QUERY, {
    variables: {
      skip,
      first: firstQ,
      processed: 'TRUE',
    },
  });

  const { data: pageData, error: pageError, loading: pageLoading } = useQuery(
    PAGINATION_QUERY
  );

  return (
    <>
      <Box display="flex" py={4}>
        <Box flex={1} alignItems="center" display="flex">
          <Heading fontSize="2xl" color="text" fontWeight={500}>
            Processed Orders
          </Heading>
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap">
        {(() => {
          if (ordersLoading)
            return (
              <>
                <Box width="100%">
                  <Box {...CardStyle}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      height="50vh"
                    >
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                      />
                    </Box>
                  </Box>
                </Box>
              </>
            );
          if (ordersError) return `Error! ${ordersError.message}`;
          const { orders } = ordersData;

          return (
            <>
              <Box width="100%" {...CardStyle}>
                <Box
                  display="flex"
                  paddingX="1em"
                  paddingY=".6em"
                  alignItems="center"
                >
                  {(() => {
                    const count = pageData.ordersConnection
                      ? pageData.ordersConnection.aggregate.count
                      : 0;
                    return (
                      <>
                        <Heading
                          fontSize="xs"
                          letterSpacing="wider"
                          textTransform="uppercase"
                          color="gray.500"
                          fontWeight={400}
                        >
                          {count} Orders
                        </Heading>
                        <Box marginLeft="auto">
                          <Button
                            background="#DDEBF7"
                            color="#1070CA"
                            borderRadius={3}
                            px={2}
                            height={6}
                            onClick={() => setOpen(!open)}
                          >
                            <Heading
                              fontSize="xs"
                              fontWeight={700}
                              letterSpacing="wide"
                              marginRight={1}
                              textTransform="uppercase"
                            >
                              {open ? 'Collapse' : 'Expand'} All
                            </Heading>
                            <Icon size={5} name="chevron-down" />
                          </Button>
                        </Box>
                      </>
                    );
                  })()}
                </Box>
                {orders.length ? (
                  orders.map(order => (
                    <Box key={order.id}>
                      <Box
                        opacity={ordersLoading && '0.2'}
                        width="100%"
                        height="100%"
                        position="relative"
                      >
                        {ordersLoading && (
                          <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            position="absolute"
                            width="100%"
                            height="100%"
                          >
                            <Spinner size={80} />
                          </Box>
                        )}
                        <Box borderTop="0.1rem solid #dfe3e8">
                          <OrderListItem
                            {...order}
                            key={order.id}
                            index={order.id}
                            disabled
                            open={open}
                          />
                        </Box>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Box
                    backgroundColor="gray.100"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Heading
                      margin="1em"
                      fontSize="xl"
                      fontWeight={600}
                      color="text"
                    >
                      Your processed orders will appear here.
                    </Heading>
                  </Box>
                )}
              </Box>
            </>
          );
        })()}
      </Box>
    </>
  );
}

export default PendingOrders;
