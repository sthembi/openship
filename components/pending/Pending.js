import React, { useState } from "react";
import { gql } from "apollo-boost";
import { Query, Mutation } from "react-apollo";
import { Adopt } from "react-adopt";
import {
  Pane,
  Heading,
  Alert,
  Switch,
  Spinner,
  Text,
  IconButton,
  Icon,
  toaster
} from "evergreen-ui";
import OrderListItem from "../common/orderListItem/OrderListItem";
import Find from "../find/Find";
import User from "../user/User";
import OrderLine from "../common/orderListItem/OrderLine";
import Button from "../common/Button";
import { CardStyle } from "../common/DefaultStyles";
import MPCart from "./Cart/MPCart";
import ZincCart from "./Cart/ZincCart";
import { front, prodFront } from "../../config";

async function placeZincOrder(data, token, updateOrderFunc) {
  try {
    const response = await fetch(
      `${
        process.env.NODE_ENV === "development" ? front : prodFront
      }/api/zinc/purchase?token=${token}`,
      {
        credentials: "same-origin",
        mode: "cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "X-Requested-With": "Fetch"
        },
        body: JSON.stringify({
          data
        })
      }
    );
    const res = await response.json();
    const update = await updateOrderFunc({
      variables: {
        id: data.client_notes.os_order_id,
        zincCheckout: res,
        processed: "TRUE"
      }
    });
    console.log("first2", res);
  } catch (e) {
    console.log("error", e);
  }
}

export const ORDER_QUERY = gql`
  query OrdersQuery(
    $skip: Int
    $first: Int
    $orderBy: OrderOrderByInput
    $processed: Processed
  ) {
    orders(
      first: $first
      skip: $skip
      orderBy: $orderBy
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

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    ordersConnection(where: { processed: FALSE }) {
      aggregate {
        count
      }
    }
  }
`;

const UPDATE_ORDER_MUTATION = gql`
  mutation updateOrder(
    $id: ID!
    $mpCart: String
    $zincCart: String
    $zincCheckout: Json
    $first_name: String
    $last_name: String
    $streetAddress1: String
    $streetAddress2: String
    $city: String
    $state: String
    $zip: String
    $processed: Processed
  ) {
    updateOrder(
      id: $id
      mpCart: $mpCart
      zincCart: $zincCart
      zincCheckout: $zincCheckout
      first_name: $first_name
      last_name: $last_name
      streetAddress1: $streetAddress1
      streetAddress2: $streetAddress2
      city: $city
      state: $state
      zip: $zip
      processed: $processed
    ) {
      id
      email
    }
  }
`;

const UPSERT_MUTATION = gql`
  mutation upsertMatch($id: ID!) {
    upsertMatch(id: $id) {
      item
    }
  }
`;

const PURCHASE_ORDER_MUTATION = gql`
  mutation purchaseItems($ids: Json!) {
    purchaseItems(ids: $ids) {
      checkout
      cart
    }
  }
`;

const CREATE_CHECKOUT_MUTATION = gql`
  mutation createCheckout($input: Json!) {
    createCheckout(input: $input) {
      checkout
    }
  }
`;

const CHECKOUT_ADD_MUTATION = gql`
  mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: Json!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout
    }
  }
`;

const CHECKOUT_REMOVE_MUTATION = gql`
  mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: Json!) {
    checkoutLineItemsRemove(
      checkoutId: $checkoutId
      lineItemIds: $lineItemIds
    ) {
      checkout
    }
  }
`;

const CHECKOUT_UPDATE_MUTATION = gql`
  mutation checkoutLineItemsUpdate($checkoutId: ID!, $lineItems: Json!) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout
    }
  }
`;

const DELETE_ORDER = gql`
  mutation deleteOrder($id: ID!) {
    deleteOrder(id: $id) {
      id
    }
  }
`;

const Layout = {
  flex: "1 1 10rem",
  marginLeft: "2rem",
  marginTop: "2rem"
};

function PendingOrders() {
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);
  // const [selectedLineIndex, setSelectedLineIndex] = useState([]);
  const [skip, setSkip] = useState(0);
  const [orderBy, setOrderBy] = useState("createdAt_ASC");
  const [firstQ, setFirstQ] = useState(100);
  // const [check, setCheck] = useState(true);
  const [open, setOpen] = useState(false);
  // const [checkout, setCheckout] = useState({});
  const [cartLoading, setCartLoading] = useState(false);
  const [processingOrder, setProcessingOrder] = useState(null);

  async function _currentOrder(arg) {
    setSelectedOrderIndex(arg);
  }

  async function overwrite(id, upsertMatchMutation) {
    setCartLoading(true);

    const upsertMatchRes = await upsertMatchMutation({
      variables: {
        id
      }
    });
    toaster.notify("Line items have been matched to cart items");
    // setSelectedOrderIndex(null);
    setCartLoading(false);
  }

  async function doPurchase(ids, purchaseOrderMutation) {
    const res = await purchaseOrderMutation({
      variables: {
        ids
      }
    });
  }

  async function createCheck(
    input,
    orderID,
    createCheckoutFunc,
    updateOrderFunc
  ) {
    const varCheck = await createCheckoutFunc({
      variables: {
        input
      }
    });

    const newCheck = varCheck.data.createCheckout.checkout;

    const res = await updateOrderFunc({
      variables: {
        id: orderID,
        mpCart: JSON.stringify(newCheck)
      }
    });
  }

  async function addVariant(
    id,
    quantity,
    checkoutID,
    checkoutLineItemsAddFunc,
    updateOrderFunc
  ) {
    toaster.success("checkout does exist");

    const varCheck = await checkoutLineItemsAddFunc({
      variables: {
        checkoutId: checkoutID,
        lineItems: [
          {
            variantId: id,
            quantity
          }
        ]
      }
    });

    const newCheck = varCheck.data.checkoutLineItemsAdd.checkout;

    const res = await updateOrderFunc({
      variables: {
        id: selectedOrderIndex,
        mpCart: JSON.stringify(newCheck)
      }
    });
  }

  async function addZincItem(
    id,
    quantity,
    title,
    src,
    price,
    cart,
    updateOrderFunc
  ) {
    // if (cart && cart.products && cart.products.length) {
    // const find = cart.products.find(obj => {
    //   return obj.product_id === id;
    // });
    // }

    const find =
      cart &&
      cart.products &&
      cart.products.length &&
      cart.products.find(obj => obj.product_id === id);

    if (cart && cart.products && cart.products.length && find !== undefined) {
      console.log(true);
      console.log(find);
      const newQ = find.quantity + quantity;
      find.quantity = newQ;
      console.log(find);
      const res = await updateOrderFunc({
        variables: {
          id: selectedOrderIndex,
          zincCart: JSON.stringify({
            products: [find, ...cart.products.filter(a => a.product_id !== id)]
          })
        }
      });
    } else {
      console.log(false);

      const res = await updateOrderFunc({
        variables: {
          id: selectedOrderIndex,
          zincCart: JSON.stringify({
            products: [
              {
                product_id: id,
                quantity,
                title,
                price,
                src
              },
              ...(cart && cart.products && cart.products.length
                ? cart.products
                : [])
            ]
          })
        }
      });
    }
  }

  async function removeMPItem(
    lineItemIds,
    checkoutID,
    checkoutLineItemsRemoveFunc,
    updateOrderFunc
  ) {
    const varCheck = await checkoutLineItemsRemoveFunc.mutation({
      variables: {
        checkoutId: checkoutID,
        lineItemIds
      }
    });

    const res = await updateOrderFunc({
      variables: {
        id: selectedOrderIndex,
        mpCart: JSON.stringify(varCheck.data.checkoutLineItemsRemove.checkout)
      }
    });
  }

  async function updateMPItem(
    lineItems,
    checkoutID,
    checkoutLineItemsUpdateFunc,
    updateOrderFunc
  ) {
    const varCheck = await checkoutLineItemsUpdateFunc.mutation({
      variables: {
        checkoutId: checkoutID,
        lineItems
      }
    });

    const res = await updateOrderFunc({
      variables: {
        id: selectedOrderIndex,
        mpCart: JSON.stringify(varCheck.data.checkoutLineItemsUpdate.checkout)
      }
    });
  }

  function play() {
    if (firstQ === 1) {
      setFirstQ(100);
      setOpen(false);
      setSkip(0);
    } else {
      setFirstQ(1);
      setOpen(true);
    }
    // setSkip(0);
  }

  /* eslint-disable */
  const orderListMutations = {
    purchaseOrder: ({ render }) => (
      <Mutation
        mutation={PURCHASE_ORDER_MUTATION}
        refetchQueries={() => [
          {
            query: ORDER_QUERY,
            variables: { skip, first: firstQ, orderBy, processed: "FALSE" }
          },
          {
            query: PAGINATION_QUERY
          }
        ]}
      >
        {/* this is an arbitrary render where you will pass your two arguments into a single one */}
        {(mutation, result) => render({ mutation, result })}
      </Mutation>
    ),
    deleteOrder: ({ render }) => (
      <Mutation
        mutation={DELETE_ORDER}
        refetchQueries={() => [
          {
            query: ORDER_QUERY,
            variables: { skip, first: firstQ, orderBy, processed: "FALSE" }
          },
          {
            query: PAGINATION_QUERY
          }
        ]}
      >
        {/* this is an arbitrary render where you will pass your two arguments into a single one */}
        {(mutation, result) => render({ mutation, result })}
      </Mutation>
    ),
    updateOrder: ({ render }) => (
      <Mutation
        mutation={UPDATE_ORDER_MUTATION}
        refetchQueries={() => [
          {
            query: ORDER_QUERY,
            variables: { skip, first: firstQ, orderBy, processed: "FALSE" }
          },
          {
            query: PAGINATION_QUERY
          }
        ]}
      >
        {/* this is an arbitrary render where you will pass your two arguments into a single one */}
        {(mutation, result) => render({ mutation, result })}
      </Mutation>
    ),
    upsertMatch: ({ render }) => (
      <Mutation mutation={UPSERT_MUTATION}>
        {/* this is an arbitrary render where you will pass your two arguments into a single one */}
        {(mutation, result) => render({ mutation, result })}
      </Mutation>
    ),
    createCheckout: ({ render }) => (
      <Mutation
        mutation={CREATE_CHECKOUT_MUTATION}
        refetchQueries={() => [
          {
            query: ORDER_QUERY,
            variables: { skip: 0, processed: "FALSE" }
          }
        ]}
      >
        {/* this is an arbitrary render where you will pass your two arguments into a single one */}
        {(mutation, result) => render({ mutation, result })}
      </Mutation>
    ),
    checkoutLineItemsRemove: ({ render }) => (
      <Mutation
        mutation={CHECKOUT_REMOVE_MUTATION}
        refetchQueries={() => [
          {
            query: ORDER_QUERY,
            variables: { skip: 0 }
          }
        ]}
      >
        {/* this is an arbitrary render where you will pass your two arguments into a single one */}
        {(mutation, result) => render({ mutation, result })}
      </Mutation>
    ),
    checkoutLineItemsUpdate: ({ render }) => (
      <Mutation
        mutation={CHECKOUT_UPDATE_MUTATION}
        refetchQueries={() => [
          {
            query: ORDER_QUERY,
            variables: { skip: 0 }
          }
        ]}
      >
        {/* this is an arbitrary render where you will pass your two arguments into a single one */}
        {(mutation, result) => render({ mutation, result })}
      </Mutation>
    )
  };
  /* eslint-disable */

  return (
    <>
      <Pane display="flex" paddingTop={16} paddingBottom={16}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={700}>Pending Orders</Heading>
        </Pane>
      </Pane>
      <Pane display="flex" flexWrap="wrap" marginLeft="-2rem" marginTop="-2rem">
        <Adopt mapper={orderListMutations}>
          {({
            purchaseOrder,
            deleteOrder,
            updateOrder,
            upsertMatch,
            createCheckout,
            checkoutLineItemsRemove,
            checkoutLineItemsUpdate
          }) => (
            <Query
              query={ORDER_QUERY}
              variables={{
                skip,
                first: firstQ,
                orderBy,
                processed: "FALSE"
              }}
            >
              {({ loading, error, data }) => {
                if (loading)
                  return (
                    <>
                      <Pane {...Layout}>
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
                      <Pane {...Layout}>
                        <Pane {...CardStyle} padding={10}>
                          <Alert
                            intent="warning"
                            title="Please choose an order or a line item."
                          />
                        </Pane>
                      </Pane>
                    </>
                  );
                if (error) return `Error! ${error.message}`;

                const { orders } = data;
                const theOrder = orders.filter(
                  order => order.id === selectedOrderIndex
                )[0];

                return (
                  <>
                    <Pane {...Layout}>
                      <Pane {...CardStyle}>
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
                                  {firstQ === 1 ? (
                                    <Heading size={100}>
                                      Order {skip + 1} of {count}
                                    </Heading>
                                  ) : (
                                    <Heading size={100}>{count} Orders</Heading>
                                  )}
                                  <Pane marginLeft="auto" display="flex">
                                    <Button
                                      intent="none"
                                      height={20}
                                      marginRight={5}
                                      onClick={() =>
                                        setOrderBy(
                                          orderBy === "createdAt_DESC"
                                            ? "createdAt_ASC"
                                            : "createdAt_DESC"
                                        )
                                      }
                                    >
                                      {orderBy.split("_")[1]}
                                    </Button>

                                    <Button
                                      intent="success"
                                      height={20}
                                      marginRight={5}
                                      onClick={() => play()}
                                    >
                                      {firstQ !== 1 ? "Play" : "Show All"}
                                      {firstQ !== 1 && (
                                        <Icon
                                          size={13}
                                          icon="play"
                                          marginRight={-4}
                                          marginLeft={3}
                                        />
                                      )}
                                    </Button>
                                    {firstQ === 1 ? (
                                      <Button
                                        intent="warning"
                                        height={20}
                                        onClick={() => setSkip(skip + 1)}
                                        disabled={
                                          firstQ !== 1 || skip + 1 === count
                                        }
                                      >
                                        Skip
                                        <Icon
                                          size={13}
                                          icon="double-chevron-right"
                                          marginRight={-4}
                                          marginLeft={3}
                                        />
                                      </Button>
                                    ) : (
                                      <Mutation
                                        mutation={PURCHASE_ORDER_MUTATION}
                                        refetchQueries={() => [
                                          {
                                            query: ORDER_QUERY,
                                            variables: {
                                              skip,
                                              first: firstQ,
                                              orderBy
                                            }
                                          },
                                          {
                                            query: PAGINATION_QUERY
                                          }
                                        ]}
                                      >
                                        {(
                                          purchaseOrder,
                                          { error, loading }
                                        ) => (
                                          <Button
                                            intent="warning"
                                            height={20}
                                            disabled={
                                              firstQ !== 1 || skip + 1 === count
                                            }
                                            isLoading={loading}
                                            // onClick={() => {
                                            //   doPurchase(
                                            //     orders
                                            //       .filter(
                                            //         order =>
                                            //           order.mpCart &&
                                            //           JSON.parse(order.mpCart)
                                            //             .length > 0 &&
                                            //           JSON.parse(
                                            //             order.mpCart
                                            //           )[0].status === "matched"
                                            //       )
                                            //       .map(a => a.id),
                                            //     purchaseOrder
                                            //   );
                                            //   setSkip(skip + 1);
                                            // }}
                                          >
                                            Multi |{" "}
                                            {/* {orders &&
                                              order.mpCart &&
                                              orders.filter(
                                                order =>
                                                  JSON.parse(order.mpCart)
                                                    .length > 0 &&
                                                  JSON.parse(order.mpCart)[0]
                                                    .status === "matched"
                                              ).length} */}
                                          </Button>
                                        )}
                                      </Mutation>
                                    )}
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
                                opacity={processingOrder === order.id && "0.2"}
                                width="100%"
                                height="100%"
                                position="relative"
                              >
                                {processingOrder === order.id && (
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
                                  <Pane
                                    borderLeft={`3px solid ${
                                      selectedOrderIndex === order.id
                                        ? "#007489"
                                        : "transparent"
                                    }`}
                                  >
                                    <OrderListItem
                                      {...order}
                                      updateIndex={arg => _currentOrder(arg)}
                                      open={open}
                                      // updateLine={arg => _currentLineItem(arg)}
                                      // createCheckout={createCheckout.mutation}
                                      createCheckout={a =>
                                        createCheck(
                                          a,
                                          order.id,
                                          createCheckout.mutation,
                                          updateOrder.mutation
                                        )
                                      }
                                      key={order.id}
                                      index={order.id}
                                      // selectedLineIndex={selectedLineIndex}
                                      selectedOrderIndex={selectedOrderIndex}
                                      // disabled={selectedOrderIndex || loading}
                                      disabled={
                                        !(
                                          !selectedOrderIndex ||
                                          selectedOrderIndex === order.id
                                        )
                                      }
                                      buttons={
                                        <>
                                          <IconButton
                                            height={20}
                                            appearance="minimal"
                                            inent="danger"
                                            icon="cross"
                                            iconSize={15}
                                            marginLeft={6}
                                            pointerEvents="visible"
                                            onClick={async e => {
                                              e.stopPropagation();
                                              setProcessingOrder(order.id);
                                              const res = await deleteOrder.mutation(
                                                {
                                                  variables: {
                                                    id: order.id
                                                  }
                                                }
                                              );
                                              setProcessingOrder(null);
                                            }}
                                          />
                                          <User>
                                            {({ data: { me } }) => {
                                              return (
                                                <IconButton
                                                  height={20}
                                                  appearance="minimal"
                                                  icon="tick"
                                                  iconSize={15}
                                                  marginLeft={6}
                                                  pointerEvents={
                                                    loading ? "none" : "visible"
                                                  }
                                                  onClick={async e => {
                                                    e.stopPropagation();
                                                    setProcessingOrder(
                                                      order.id
                                                    );
                                                    setSelectedOrderIndex(null);
                                                    if (
                                                      JSON.parse(order.mpCart)
                                                        .lineItems.edges
                                                        .length > 0
                                                    ) {
                                                      await doPurchase(
                                                        [order.id],
                                                        purchaseOrder.mutation
                                                      );
                                                    } else if (
                                                      JSON.parse(order.zincCart)
                                                        .products.length > 0
                                                    ) {
                                                      toaster.success(
                                                        "zinc called"
                                                      );
                                                      // const update = await updateOrder.mutation({
                                                      //   variables: {
                                                      //     id: 'cjvhp95z5000n0772cx2kqwnv',
                                                      //     processed: true,
                                                      //   },
                                                      // });
                                                      await placeZincOrder(
                                                        {
                                                          retailer: "amazon",
                                                          products: JSON.parse(
                                                            order.zincCart
                                                          ).products,
                                                          shipping_address: {
                                                            first_name:
                                                              order.first_name,
                                                            last_name:
                                                              order.last_name,
                                                            address_line1:
                                                              order.streetAddress1,
                                                            address_line2:
                                                              order.streetAddress2,
                                                            zip_code: order.zip,
                                                            city: order.city,
                                                            state: order.state,
                                                            country: "US",
                                                            phone_number:
                                                              "281-337-9862"
                                                          },
                                                          addax: true,
                                                          is_gift: true,
                                                          gift_message: `Here is your package, ${order.first_name}! Enjoy!`,
                                                          shipping: {
                                                            order_by: "price",
                                                            max_days: 5,
                                                            max_price: 1000
                                                          },
                                                          webhooks: {
                                                            request_succeeded:
                                                              "https://webhook.site/3d977945-5b89-4734-8a64-146d321a100c",
                                                            request_failed:
                                                              "https://webhook.site/3d977945-5b89-4734-8a64-146d321a100c",
                                                            tracking_obtained:
                                                              "https://webhook.site/3d977945-5b89-4734-8a64-146d321a100c"
                                                          },
                                                          client_notes: {
                                                            shopify_order_id:
                                                              order.orderId,
                                                            os_order_id:
                                                              order.id
                                                          }
                                                        },
                                                        me.zincToken,
                                                        updateOrder.mutation
                                                      );
                                                    } else {
                                                      toaster.success(
                                                        "not called"
                                                      );
                                                    }
                                                    setProcessingOrder(null);
                                                  }}
                                                />
                                              );
                                            }}
                                          </User>
                                        </>
                                      }
                                    />
                                  </Pane>
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
                              Your pending orders will appear here.
                            </Heading>
                          </Pane>
                        )}
                      </Pane>
                    </Pane>

                    <Pane {...Layout}>
                      {selectedOrderIndex ? (
                        <Pane>
                          <Pane
                            {...CardStyle}
                            padding={15}
                            opacity={cartLoading && "0.2"}
                            width="100%"
                            height="100%"
                          >
                            {cartLoading && (
                              <Pane
                                display="flex"
                                justifyContent="center"
                                margin="auto"
                              >
                                <Pane position="fixed">
                                  <Spinner size={80} />
                                </Pane>
                              </Pane>
                            )}

                            <Pane
                              display="flex"
                              justifyContent="space-between"
                              fontWeight={600}
                              background="white"
                            >
                              <>
                                <Heading size={400}>
                                  {theOrder.orderName}
                                </Heading>

                                <Pane
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="center"
                                  marginLeft={4}
                                >
                                  <Text
                                    size={300}
                                    fontWeight={500}
                                    marginX={10}
                                    color="#7B8B9A"
                                    className="hover"
                                    cursor="pointer"
                                    onClick={() => {
                                      // setSelectedLineIndex([]);
                                      setSelectedOrderIndex(null);
                                    }}
                                  >
                                    Empty
                                  </Text>
                                  <Button
                                    intent="primary"
                                    height={20}
                                    onClick={() =>
                                      overwrite(
                                        theOrder.id,
                                        upsertMatch.mutation
                                      )
                                    }
                                    disabled={
                                      (theOrder.mpCart &&
                                        theOrder.mpCart.lineItems &&
                                        theOrder.mpCart.lineItems.edges
                                          .length === 0) ||
                                      !theOrder.mpCart
                                    }
                                  >
                                    Match
                                  </Button>
                                </Pane>
                              </>
                            </Pane>
                            <Pane>
                              <Pane display="flex">
                                <Text
                                  contenteditable="true"
                                  size={300}
                                  marginRight={4}
                                >
                                  {theOrder.first_name}
                                </Text>
                                <Text contenteditable="true" size={300}>
                                  {theOrder.last_name}
                                </Text>
                              </Pane>
                              <Text contenteditable="true" size={300}>
                                {theOrder.streetAddress1}
                              </Text>
                              {theOrder.streetAddress2 && (
                                <Text contenteditable="true" size={300}>
                                  {theOrder.streetAddress2}
                                </Text>
                              )}
                              <Pane display="flex">
                                <Text
                                  contenteditable="true"
                                  size={300}
                                  marginRight={4}
                                >
                                  {theOrder.city}
                                </Text>
                                <Text
                                  contenteditable="true"
                                  size={300}
                                  marginRight={4}
                                >
                                  {theOrder.state}
                                </Text>
                                <Text contenteditable="true" size={300}>
                                  {theOrder.zip}
                                </Text>
                              </Pane>
                            </Pane>
                            <Pane paddingTop={10}>
                              <Pane
                                marginLeft="-3px"
                                background="#F7F9FD"
                                border="muted"
                                paddingY=".7em"
                                paddingX="1em"
                              >
                                <Pane marginBottom={10}>
                                  <Text
                                    size={400}
                                    fontWeight={500}
                                    color="#084B8A"
                                  >
                                    Line Items
                                  </Text>
                                </Pane>
                                {theOrder.lineItems.map(a => (
                                  <OrderLine
                                    key={a.id}
                                    item={a.node ? a.node : a}
                                  />
                                ))}
                              </Pane>
                            </Pane>
                            <MPCart
                              cartName="Marketplace"
                              cart={JSON.parse(theOrder.mpCart)}
                              removeItem={a =>
                                removeMPItem(
                                  a,
                                  JSON.parse(theOrder.mpCart).id,
                                  checkoutLineItemsRemove,
                                  updateOrder.mutation
                                )
                              }
                              checkoutLineItemsUpdate={a =>
                                updateMPItem(
                                  a,
                                  JSON.parse(theOrder.mpCart).id,
                                  checkoutLineItemsUpdate,
                                  updateOrder.mutation
                                )
                              }
                              loading={updateOrder.result.loading}
                            />
                            <ZincCart
                              cart={JSON.parse(theOrder.zincCart)}
                              removeItem={async productID => {
                                const res = await updateOrder.mutation({
                                  variables: {
                                    id: selectedOrderIndex,
                                    zincCart: JSON.stringify({
                                      products: JSON.parse(
                                        theOrder.zincCart
                                      ).products.filter(
                                        a => a.product_id !== productID
                                      )
                                    })
                                  }
                                });
                              }}
                              checkoutLineItemsUpdate={async (
                                productID,
                                quantity
                              ) => {
                                if (quantity === 0) {
                                  const res = await updateOrder.mutation({
                                    variables: {
                                      id: selectedOrderIndex,
                                      zincCart: JSON.stringify({
                                        products: JSON.parse(
                                          theOrder.zincCart
                                        ).products.filter(
                                          a => a.product_id !== productID
                                        )
                                      })
                                    }
                                  });
                                } else {
                                  const find = JSON.parse(
                                    theOrder.zincCart
                                  ).products.find(obj => {
                                    return obj.product_id === productID;
                                  });
                                  const newQ = quantity;
                                  find.quantity = newQ;
                                  const res = await updateOrder.mutation({
                                    variables: {
                                      id: selectedOrderIndex,
                                      zincCart: JSON.stringify({
                                        products: [
                                          find,
                                          ...JSON.parse(
                                            theOrder.zincCart
                                          ).products.filter(
                                            a => a.product_id !== productID
                                          )
                                        ]
                                      })
                                    }
                                  });
                                }
                              }}
                              loading={updateOrder.result.loading}
                            />
                          </Pane>
                        </Pane>
                      ) : (
                        <Pane {...CardStyle} padding={10}>
                          <Alert
                            intent="warning"
                            title="Please choose an order or a line item."
                          />
                        </Pane>
                      )}
                      <Mutation mutation={CHECKOUT_ADD_MUTATION}>
                        {(checkoutLineItemsAdd, { error, loading }) => (
                          <Find
                            headerSize={600}
                            atcDisabled={!theOrder}
                            addMPItem={(a, b) => {
                              if (
                                theOrder.mpCart &&
                                JSON.parse(theOrder.mpCart).id
                              ) {
                                addVariant(
                                  a,
                                  b,
                                  JSON.parse(theOrder.mpCart).id,
                                  checkoutLineItemsAdd,
                                  updateOrder.mutation
                                );
                              } else {
                                toaster.success("checkout does not exist");
                                createCheck(
                                  {
                                    shippingAddress: {
                                      address1: theOrder.streetAddress1,
                                      address2:
                                        theOrder.streetAddress2 &&
                                        theOrder.streetAddress2,
                                      city: theOrder.city,
                                      province: theOrder.state,
                                      country: "US",
                                      zip: theOrder.zip,
                                      firstName: theOrder.first_name,
                                      lastName: theOrder.last_name
                                    },
                                    lineItems: [
                                      {
                                        variantId: a,
                                        quantity: b
                                      }
                                    ]
                                  },
                                  theOrder.id,
                                  createCheckout.mutation,
                                  updateOrder.mutation
                                );
                              }
                            }}
                            addZincItem={(a, b, c, d, e) =>
                              addZincItem(
                                a,
                                b,
                                c,
                                d,
                                e,
                                JSON.parse(theOrder.zincCart),
                                updateOrder.mutation
                              )
                            }
                          />
                        )}
                      </Mutation>
                    </Pane>
                  </>
                );
              }}
            </Query>
          )}
        </Adopt>
      </Pane>
    </>
  );
}

export default PendingOrders;
