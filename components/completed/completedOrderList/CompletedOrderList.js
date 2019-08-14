import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import Link from 'next/link';
import {
  Pane,
  Heading,
  SearchInput,
  Spinner,
  IconButton,
  Icon,
} from 'evergreen-ui';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import ShopSelect from '../../common/ShopSelect';
import OrderListItem from '../../common/orderListItem/OrderListItem';
import Pagination from '../../common/Pagination';
import Button from '../../common/Button';
import Reshipment from '../../common/Reshipment';

import { CardStyle } from '../../common/DefaultStyles';

export const shopOrders = gql`
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
  const [isShown, setIsShown] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

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
    setIsShown(true);
    setSelectedOrder(arg);
  }

  return (
    <>
      <Pane display="flex" paddingTop={16} paddingBottom={16}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={700}>Completed Orders</Heading>
        </Pane>
      </Pane>
      {client ? (
        <Pane {...CardStyle}>
          <Pane display="block" padding="1em">
            <Pane display="flex">
              {/* <Pagination
      leftDisabled={!data.shopOrders.pageInfo.hasPreviousPage}
      rightDisabled={!data.shopOrders.pageInfo.hasNextPage}
      onLeft={() => onPrevious(data.shopOrders.edges[0].cursor)}
      onRight={() =>
        onNext(
          data.shopOrders.edges[data.shopOrders.edges.length - 1].cursor
        )
      }
    /> */}
              <SearchInput
                placeholder="Search"
                width="100%"
                height={36}
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </Pane>
            <Pane>
              <ShopSelect
                client={client}
                shops={shops}
                updateClient={updateClient}
              />
            </Pane>
          </Pane>
          <Query
            query={shopOrders}
            variables={{
              domain: `${client}.myshopify.com`,
              after: afterCursor,
              before: beforeCursor,
              first,
              last,
              query,
            }}
          >
            {({ data, error, loading }) => {
              if (loading)
                return (
                  <Pane
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100vh"
                  >
                    <Spinner size={80} />
                  </Pane>
                );
              if (error || !data.shopOrders) return <div>{error}</div>;
              return (
                <>
                  <Pane width="100%">
                    {selectedOrder && (
                      <Reshipment
                        isShown={isShown}
                        onCloseComplete={() => setIsShown(false)}
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
                      <Pane borderTop="0.1rem solid #dfe3e8">
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
                              <Pane height={20} marginLeft={6}>
                                {/* <Button
                      background="#FFF"
                      borderRadius={3}
                      onClick={() =>
                        updateDialog(order.node.id.split("/").pop())
                      }
                    >
                      <Heading
                        size={100}
                        fontWeight={700}
                        fontSize={12}
                        color="#084B8A"
                      >
                        RESHIP
                      </Heading>
                    </Button> */}
                                <Button
                                  background="#F9F9FB"
                                  borderRadius={3}
                                  marginRight={5}
                                  onClick={() =>
                                    updateDialog(order.node.id.split('/').pop())
                                  }
                                >
                                  <Heading
                                    size={100}
                                    fontWeight={700}
                                    color="#234361"
                                    marginRight={4}
                                  >
                                    RESHIP
                                  </Heading>
                                  <Icon
                                    color="#234361"
                                    icon="social-media"
                                    size={12}
                                  />
                                </Button>
                              </Pane>
                              <Link
                                href={{
                                  pathname: '/completed',
                                  query: {
                                    order: order.node.name,
                                    email: order.node.email,
                                    name: order.node.name,
                                    processedAt: Intl.DateTimeFormat(
                                      'en-US'
                                    ).format(
                                      Date.parse(order.node.processedAt)
                                    ),
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
                                <IconButton
                                  height={20}
                                  appearance="minimal"
                                  icon="arrow-right"
                                  iconSize={15}
                                  pointerEvents="visible"
                                  marginRight={2}
                                  onClick={e => e.stopPropagation()}
                                />
                              </Link>
                            </>
                          }
                        />
                      </Pane>
                    ))}
                  </Pane>
                </>
              );
            }}
          </Query>
        </Pane>
      ) : (
        <Pane
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
        </Pane>
      )}
    </>
  );
}

CompletedOrderList.propTypes = {
  shops: PropTypes.string,
};
