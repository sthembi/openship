import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import Link from 'next/link';
import {
  Box,
  Heading,
  Spinner,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Button,
  DrawerBody,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  useDisclosure,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import ShopSelect from '../../common/ShopSelect';
import OrderListItem from '../../common/orderListItem/OrderListItem';
import Reshipment from '../../common/Reshipment';
import { OrderDetailsComp } from '../../common/OrderDetails';
import { CardStyle } from '../../common/DefaultStyles';

export const SHOP_ORDERS_QUERY = gql`
  query shopOrders(
    $domain: String!
    $first: Int
    $after: String
    $before: String
    $last: Int
    $query: String
  ) {
    shopOrders(
      domain: $domain
      first: $first
      after: $after
      before: $before
      last: $last
      query: $query
    ) {
      pageInfo
      edges
    }
  }
`;

export default function CompletedOrderList({ shops }) {
  const [client, setClient] = useState(
    shops.length && shops[0].domain.split('.')[0]
  );
  const [afterCursor, setAfterCursor] = useState(null);
  const [beforeCursor, setBeforeCursor] = useState(null);
  const [query, setQuery] = useState('');
  const [first, setFirst] = useState(10);
  const [last, setLast] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrder2, setSelectedOrder2] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: drawerIsOpen,
    onOpen: drawerOnOpen,
    onClose: drawerOnClose,
  } = useDisclosure();

  const { data, error, loading } = useQuery(SHOP_ORDERS_QUERY, {
    variables: {
      domain: `${client}.myshopify.com`,
      after: afterCursor,
      before: beforeCursor,
      first,
      last,
      query,
    },
  });

  function updateClient(arg) {
    setClient(arg);
    setAfterCursor(null);
    setBeforeCursor(null);
    setFirst(10);
    setLast(null);
  }

  function onPrevious(arg) {
    setAfterCursor(null);
    setBeforeCursor(arg);
    setFirst(null);
    setLast(10);
  }

  function onNext(arg) {
    setAfterCursor(arg);
    setBeforeCursor(null);
    setFirst(10);
    setLast(null);
  }

  function updateDialog(arg) {
    onOpen();
    setSelectedOrder(arg);
  }

  function updateDrawer(arg) {
    drawerOnOpen();
    setSelectedOrder2(arg);
  }
  return (
    <>
      <Box display="flex" py={4}>
        <Box flex={1} alignItems="center" display="flex">
          <Heading fontSize="2xl" color="text" fontWeight={500}>
            Completed Orders
          </Heading>
        </Box>
      </Box>
      {selectedOrder2 && (
        <Drawer
          size="md"
          isOpen={drawerIsOpen}
          placement="right"
          onClose={drawerOnClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            {/* <DrawerCloseButton /> */}
            <DrawerBody bg="#f9f9fb" p={0}>
              <Box>
                <OrderDetailsComp
                  {...data.shopOrders.edges.filter(
                    order => order.node.id.split('/').pop() === selectedOrder2
                  )[0].node}
                  store={client}
                  backgroundColor="white"
                  onOpen={() => updateDialog(selectedOrder2)}
                />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
      {client ? (
        <Box {...CardStyle}>
          <Box display="block" padding="1em">
            <Box display="flex">
              <InputGroup width="100%" borderColor="gray.300">
                <InputLeftElement
                  children={<Icon name="search" color="gray.300" />}
                />
                <Input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  type="phone"
                  placeholder="Search"
                />
              </InputGroup>
            </Box>
            <Box>
              <ShopSelect
                client={client}
                shops={shops}
                updateClient={updateClient}
              />
            </Box>
          </Box>

          {(() => {
            if (loading)
              return (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100vh"
                >
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </Box>
              );
            if (error || !data.shopOrders) return <div>{error}</div>;
            return (
              <>
                <Box width="100%">
                  {selectedOrder && (
                    <Reshipment
                      isOpen={isOpen}
                      onClose={onClose}
                      order={
                        data.shopOrders.edges.filter(
                          order =>
                            order.node.id.split('/').pop() === selectedOrder
                        )[0].node
                      }
                      shop={client}
                    />
                  )}
                  {data.shopOrders.edges.map((order, index) => (
                    <Box borderTop="0.1rem solid #dfe3e8">
                      <OrderListItem
                        key={index}
                        disabled
                        client={client}
                        orderName={order.node.name}
                        first_name={
                          order.node.shippingAddress.name.split(' ')[0]
                        }
                        last_name={order.node.shippingAddress.name
                          .split(' ')
                          .pop()}
                        streetAddress1={order.node.shippingAddress.address1}
                        streetAddress2={order.node.shippingAddress.address2}
                        city={order.node.shippingAddress.city}
                        state={order.node.shippingAddress.province}
                        zip={order.node.shippingAddress.zip}
                        shopName={client}
                        lineItems={order.node.lineItems.edges}
                        createAt={order.node.processedAt}
                        note={order.node.note && order.node.note}
                        // errorText={order.node.note && order.node.note}
                        // processText={order.node.note && order.node.note}
                        orderId={order.node.id.split('/').pop()}
                        buttons={
                          <>
                            <Button
                              background="#DDEBF7"
                              borderRadius={3}
                              marginRight={1}
                              px={2}
                              height={5}
                              onClick={() =>
                                updateDialog(order.node.id.split('/').pop())
                              }
                            >
                              <Heading
                                fontSize="xs"
                                fontWeight={700}
                                color="#1070CA"
                                marginRight={2}
                              >
                                RESHIP
                              </Heading>
                              <Icon size={3} color="#1070CA" name="repeat" />
                            </Button>
                            <Link
                              href={{
                                pathname: '/completed',
                                query: {
                                  order: order.node.name,
                                  email: order.node.email,
                                  name: order.node.name,
                                  processedAt: Intl.DateTimeFormat(
                                    'en-US'
                                  ).format(Date.parse(order.node.processedAt)),
                                  shippingAddress: JSON.stringify(
                                    order.node.shippingAddress
                                  ),
                                  totalRecievedSet: order.totalPrice,
                                  lineItems: JSON.stringify(
                                    order.node.lineItems
                                  ),
                                  client,
                                  note: order.node.note && order.node.note,
                                  fulfillments: JSON.stringify(
                                    order.node.fulfillments
                                  ),
                                },
                              }}
                              as={`/order?store=${client}&name=${
                                order.node.name
                              }`}
                            >
                              <Button
                                onClick={() =>
                                  updateDrawer(order.node.id.split('/').pop())
                                }
                                bg="transparent"
                                color="#66788a"
                                aria-label="show order"
                                height="1.3rem"
                                minWidth="1.3rem"
                                px={0}
                                ml={1}
                              >
                                <Icon name="arrow-forward" size="18px" />
                              </Button>
                            </Link>
                          </>
                        }
                      />
                    </Box>
                  ))}
                </Box>
              </>
            );
          })()}
        </Box>
      ) : (
        <Box
          background="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          borderRadius={3}
        >
          <Heading margin="1em" size={600}>
            Your orders will appear here after you add a shop.
          </Heading>
        </Box>
      )}
    </>
  );
}

CompletedOrderList.propTypes = {
  shops: PropTypes.string,
};
