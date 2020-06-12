import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  Box,
  Heading,
  Spinner,
  Text,
  Icon,
  Button,
  useToast,
} from '@chakra-ui/core';
import OrderListItem from '../common/orderListItem/OrderListItem';
import Find from '../find/Find';
import { CURRENT_USER_QUERY } from '../user/User';
import { CHANNELS_QUERY, channelsQueryVars } from '../layout/Page';
import OrderLine from '../common/orderListItem/OrderLine';
import { CardStyle } from '../common/DefaultStyles';
import MPCart from './Cart/MPCart';
import ZincCart from './Cart/ZincCart';
import { placeZincOrder } from './placeZincOrder';
import { placeCustomOrder } from './placeCustomOrder';

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
      customCheckout
      customCart
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
    $customCart: String
    $customCheckout: Json
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
      customCart: $customCart
      customCheckout: $customCheckout
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

const UPSERT_MATCH_MUTATION = gql`
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
  flex: '1 1 10rem',
  marginLeft: '2rem',
  marginTop: '2rem',
};

function PendingOrders() {
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(null);
  const [skip, setSkip] = useState(0);
  const [orderBy, setOrderBy] = useState('createAt_ASC');
  const [firstQ, setFirstQ] = useState(100);
  const [open, setOpen] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const [processingOrder, setProcessingOrder] = useState(null);

  const toast = useToast();

  const {
    data: { me },
  } = useQuery(CURRENT_USER_QUERY);

  const allOrders = useQuery(ORDER_QUERY, {
    variables: {
      skip,
      first: firstQ,
      orderBy,
      processed: 'FALSE',
    },
  });

  const allChannels = useQuery(CHANNELS_QUERY, {
    variables: channelsQueryVars,
  });

  const {
    data: channelsData,
    error: channelsError,
    loading: channelsLoading,
  } = allChannels;

  const pagination = useQuery(PAGINATION_QUERY);

  const [deleteOrder] = useMutation(DELETE_ORDER, {
    refetchQueries: [
      {
        query: ORDER_QUERY,
        variables: { skip, first: firstQ, orderBy, processed: 'FALSE' },
      },
      {
        query: PAGINATION_QUERY,
      },
    ],
  });

  const [
    purchaseOrder,
    { loading: purchaseOrderLoading, error: purchaseOrderError },
  ] = useMutation(PURCHASE_ORDER_MUTATION, {
    refetchQueries: [
      {
        query: ORDER_QUERY,
        variables: { skip, first: firstQ, orderBy, processed: 'FALSE' },
      },
      {
        query: PAGINATION_QUERY,
      },
    ],
  });
  const [updateOrder, { loading: updateOrderLoading }] = useMutation(
    UPDATE_ORDER_MUTATION,
    {
      refetchQueries: [
        {
          query: ORDER_QUERY,
          variables: { skip, first: firstQ, orderBy, processed: 'FALSE' },
        },
        {
          query: PAGINATION_QUERY,
        },
      ],
    }
  );

  const [createCheckout] = useMutation(CREATE_CHECKOUT_MUTATION, {
    refetchQueries: [
      {
        query: ORDER_QUERY,
        variables: { skip, first: firstQ, orderBy, processed: 'FALSE' },
      },
      {
        query: PAGINATION_QUERY,
      },
    ],
  });

  const [checkoutLineItemsRemove] = useMutation(CHECKOUT_REMOVE_MUTATION, {
    refetchQueries: [
      {
        query: ORDER_QUERY,
        variables: { skip, first: firstQ, orderBy, processed: 'FALSE' },
      },
      {
        query: PAGINATION_QUERY,
      },
    ],
  });

  const [checkoutLineItemsUpdate] = useMutation(CHECKOUT_UPDATE_MUTATION, {
    refetchQueries: [
      {
        query: ORDER_QUERY,
        variables: { skip, first: firstQ, orderBy, processed: 'FALSE' },
      },
      {
        query: PAGINATION_QUERY,
      },
    ],
  });

  const [checkoutLineItemsAdd] = useMutation(CHECKOUT_ADD_MUTATION, {
    refetchQueries: [
      {
        query: ORDER_QUERY,
        variables: { skip, first: firstQ, orderBy, processed: 'FALSE' },
      },
      {
        query: PAGINATION_QUERY,
      },
    ],
  });

  const [upsertMatch] = useMutation(UPSERT_MATCH_MUTATION);

  async function _currentOrder(arg) {
    setSelectedOrderIndex(arg);
  }

  async function overwrite(id) {
    setCartLoading(true);

    const upsertMatchRes = await upsertMatch({
      variables: {
        id,
      },
    });
    toast({
      position: 'top-right',
      title: 'Line items have been matched to cart items',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    // setSelectedOrderIndex(null);
    setCartLoading(false);
  }

  async function doPurchase(ids) {
    const res = await purchaseOrder({
      variables: {
        ids,
      },
    });
  }

  async function createCheck(input, orderID) {
    const varCheck = await createCheckout({
      variables: {
        input,
      },
    });

    const newCheck = varCheck.data.createCheckout.checkout;

    const res = await updateOrder({
      variables: {
        id: orderID,
        mpCart: JSON.stringify(newCheck),
      },
    });
  }

  async function createCustomCheck(
    input,
    orderID,
    createCheckoutFunc,
    updateOrderFunc,
    url,
    key
  ) {
    const query = `
    mutation checkoutCreate($input: CheckoutCreateInput!)
    {
      checkoutCreate(input: $input) {
        userErrors {
          message
          field
        }
        checkout {
          id
          email
          webUrl
          subtotalPrice
          totalTax
          totalPrice
          shippingAddress{
            firstName
            lastName
            address1
            address2
            city
            provinceCode
            zip
            country
          }
          lineItems (first:250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                variant {
                  id
                  title
                  image {
                    src
                  }
                  price
                }
                quantity
              }
            }
          }
        }
      }
      }
    `;

    const variables = {
      input,
    };

    const checkout = await fetch(`https://${url}.myshopify.com/api/graphql`, {
      method: 'POST',
      body: JSON.stringify({ query, variables }),
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
      },
    }).then(response => response.json());
    console.log(checkout);

    const newCheck = checkout.data.checkoutCreate.checkout;

    const res = await updateOrderFunc({
      variables: {
        id: selectedOrderIndex,
        customCart: JSON.stringify(newCheck),
      },
    });
  }

  async function addCustomVariant(
    id,
    quantity,
    checkoutID,
    checkoutLineItemsAddFunc,
    updateOrderFunc,
    url,
    key
  ) {
    toast({
      position: 'top-right',
      title: 'custom checkout does exist',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    const query = `
    mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
      checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
        userErrors {
          message
          field
        }
        checkout {
          id
          email
          webUrl
          subtotalPrice
          totalTax
          totalPrice
          shippingAddress {
            address1
            address2
            city
            countryCodeV2
            provinceCode
            zip
            firstName
            lastName
          }
          lineItems (first:250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                variant {
                  id
                  title
                  image {
                    src
                  }
                  price
                }
                quantity
              }
            }
          }
        }
      }
    }
    `;

    const variables = {
      checkoutId: checkoutID,
      lineItems: [
        {
          variantId: id,
          quantity,
        },
      ],
    };

    const checkout = await fetch(`https://${url}.myshopify.com/api/graphql`, {
      method: 'POST',
      body: JSON.stringify({ query, variables }),
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
      },
    }).then(res => res.json());
    console.log(checkout);
    const newCheck = checkout.data.checkoutLineItemsAdd.checkout;

    const res = await updateOrderFunc({
      variables: {
        id: selectedOrderIndex,
        customCart: JSON.stringify(newCheck),
      },
    });
  }

  async function addVariant(id, quantity, checkoutID) {
    toast({
      position: 'top-right',
      title: 'checkout does exist',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    const varCheck = await checkoutLineItemsAdd({
      variables: {
        checkoutId: checkoutID,
        lineItems: [
          {
            variantId: id,
            quantity,
          },
        ],
      },
    });

    const newCheck = varCheck.data.checkoutLineItemsAdd.checkout;

    const res = await updateOrder({
      variables: {
        id: selectedOrderIndex,
        mpCart: JSON.stringify(newCheck),
      },
    });
  }

  async function addZincItem(id, quantity, title, src, price, cart) {
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
      const res = await updateOrder({
        variables: {
          id: selectedOrderIndex,
          zincCart: JSON.stringify({
            products: [find, ...cart.products.filter(a => a.product_id !== id)],
          }),
        },
      });
    } else {
      console.log(false);

      const res = await updateOrder({
        variables: {
          id: selectedOrderIndex,
          zincCart: JSON.stringify({
            products: [
              {
                product_id: id,
                quantity,
                title,
                price,
                src,
              },
              ...(cart && cart.products && cart.products.length
                ? cart.products
                : []),
            ],
          }),
        },
      });
    }
  }

  async function removeMPItem(lineItemIds, checkoutID) {
    const varCheck = await checkoutLineItemsRemove({
      variables: {
        checkoutId: checkoutID,
        lineItemIds,
      },
    });

    const res = await updateOrder({
      variables: {
        id: selectedOrderIndex,
        mpCart: JSON.stringify(varCheck.data.checkoutLineItemsRemove.checkout),
      },
    });
  }

  async function removeCustomItem(lineItemIds, checkoutID, key, url) {
    const query = `
    mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
      checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
        userErrors {
          message
          field
        }
        checkout {
          id
          email
          webUrl
          subtotalPrice
          totalTax
          totalPrice
          shippingAddress {
            address1
            address2
            city
            countryCodeV2
            provinceCode
            zip
            firstName
            lastName
          }
          lineItems (first:250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                variant {
                  id
                  title
                  image {
                    src
                  }
                  price
                }
                quantity
              }
            }
          }
        }
      }
    }
    `;

    const variables = {
      checkoutId: checkoutID,
      lineItemIds,
    };

    const checkout = await fetch(`https://${url}.myshopify.com/api/graphql`, {
      method: 'POST',
      body: JSON.stringify({ query, variables }),
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
      },
    }).then(res => res.json());

    const res = await updateOrder({
      variables: {
        id: selectedOrderIndex,
        customCart: JSON.stringify(
          checkout.data.checkoutLineItemsRemove.checkout
        ),
      },
    });
  }

  async function updateMPItem(lineItems, checkoutID) {
    const varCheck = await checkoutLineItemsUpdate({
      variables: {
        checkoutId: checkoutID,
        lineItems,
      },
    });

    const res = await updateOrder({
      variables: {
        id: selectedOrderIndex,
        mpCart: JSON.stringify(varCheck.data.checkoutLineItemsUpdate.checkout),
      },
    });
  }

  async function updateCustomItem(lineItems, checkoutID, key, url) {
    const query = `
    mutation checkoutLineItemsUpdate ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
      checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
        userErrors {
          message
          field
        }
        checkout {
          id
          email
          webUrl
          subtotalPrice
          totalTax
          totalPrice
          shippingAddress {
            address1
            address2
            city
            countryCodeV2
            provinceCode
            zip
            firstName
            lastName
          }
          lineItems (first:250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                variant {
                  id
                  title
                  image {
                    src
                  }
                  price
                }
                quantity
              }
            }
          }
        }
      }
    }
    `;

    const variables = {
      checkoutId: checkoutID,
      lineItems,
    };

    const checkout = await fetch(`https://${url}.myshopify.com/api/graphql`, {
      method: 'POST',
      body: JSON.stringify({ query, variables }),
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
      },
    }).then(res => res.json());

    const res = await updateOrder({
      variables: {
        id: selectedOrderIndex,
        customCart: JSON.stringify(
          checkout.data.checkoutLineItemsUpdate.checkout
        ),
      },
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

  return (
    <>
      <Box display="flex" py={4}>
        <Box flex={1} alignItems="center" display="flex">
          <Heading fontSize="2xl" color="text" fontWeight={500}>
            Pending Orders
          </Heading>
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" marginLeft="-2rem" marginTop="-2rem">
        {(() => {
          if (allOrders.loading)
            return (
              <>
                <Box {...Layout}>
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
                <Box {...Layout}>
                  <Box {...CardStyle} padding={3}>
                    <Box
                      p={2}
                      display="flex"
                      borderLeft="3px solid #d9822b"
                      borderRight="1px solid #E2E8F0"
                      borderTop="1px solid #E2E8F0"
                      borderBottom="1px solid #E2E8F0"
                    >
                      <Icon name="warning-2" color="#d9812a" mr={2} />
                      <Heading fontSize="sm" color="text">
                        Please choose an order or a line item.
                      </Heading>
                    </Box>
                  </Box>
                </Box>
              </>
            );
          if (allOrders.error) return `Error! ${allOrders.error.message}`;

          const { orders } = allOrders.data;
          const theOrder = orders.filter(
            order => order.id === selectedOrderIndex
          )[0];

          return (
            <>
              <Box {...Layout}>
                <Box {...CardStyle}>
                  <Box
                    display="flex"
                    paddingX="1em"
                    paddingY=".8em"
                    alignItems="center"
                  >
                    {(() => {
                      const count =
                        pagination.data && pagination.data.ordersConnection
                          ? pagination.data.ordersConnection.aggregate.count
                          : 0;
                      return (
                        <>
                          {firstQ === 1 ? (
                            <Heading
                              fontSize="xs"
                              letterSpacing="wider"
                              textTransform="uppercase"
                              color="gray.500"
                              fontWeight={400}
                            >
                              Order {skip + 1} of {count}
                            </Heading>
                          ) : (
                            <Heading
                              fontSize="xs"
                              letterSpacing="wider"
                              textTransform="uppercase"
                              color="gray.500"
                              fontWeight={400}
                            >
                              {count} Order{count !== 1 && 's'}
                            </Heading>
                          )}
                          <Box marginLeft="auto" display="flex">
                            <Button
                              borderRadius={3}
                              marginX={1}
                              px={2}
                              height={5}
                              onClick={() =>
                                setOrderBy(
                                  orderBy === 'createAt_DESC'
                                    ? 'createAt_ASC'
                                    : 'createAt_DESC'
                                )
                              }
                            >
                              <Heading
                                fontSize="xs"
                                fontWeight={700}
                                textTransform="uppercase"
                              >
                                {orderBy.split('_')[1]}
                              </Heading>
                            </Button>

                            <Button
                              bg="#d4eee2"
                              color="#00783e"
                              _hover={{ bg: '#bfe3d2' }}
                              borderRadius={3}
                              marginX={1}
                              px={2}
                              height={5}
                              onClick={() => play()}
                            >
                              <Heading
                                fontSize="xs"
                                fontWeight={700}
                                textTransform="uppercase"
                              >
                                {firstQ !== 1 ? 'Play' : 'Show All'}
                              </Heading>
                              {/* {firstQ !== 1 && <Icon size={5} name="play" />} */}
                            </Button>
                            {firstQ === 1 ? (
                              <Button
                                background="#fbe6a2"
                                color="#7e6514"
                                _hover={{ bg: '#f0d98d' }}
                                borderRadius={3}
                                ml={1}
                                px={2}
                                height={5}
                                onClick={() => setSkip(skip + 1)}
                                // disabled={firstQ !== 1 || skip + 1 === count}
                              >
                                <Heading
                                  fontSize="xs"
                                  fontWeight={700}
                                  marginRight={2}
                                  textTransform="uppercase"
                                >
                                  Skip
                                </Heading>
                                <Icon size={2} name="arrow-right" />
                              </Button>
                            ) : (
                              <Button
                                borderRadius={3}
                                marginX={1}
                                px={2}
                                height={5}
                                bg="#ddebf7"
                                color="#1070ca"
                                _hover={{ bg: '#c0d8ed' }}
                                disabled={firstQ !== 1 || skip + 1 === count}
                                isLoading={purchaseOrderLoading}
                              >
                                <Heading
                                  fontSize="xs"
                                  fontWeight={700}
                                  textTransform="uppercase"
                                >
                                  Process
                                </Heading>
                              </Button>
                            )}
                          </Box>
                        </>
                      );
                    })()}
                  </Box>
                  {orders.length ? (
                    orders.map(order => (
                      <Box key={order.id}>
                        <Box
                          opacity={processingOrder === order.id && '0.2'}
                          width="100%"
                          height="100%"
                          position="relative"
                        >
                          {processingOrder === order.id && (
                            <Box
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              position="absolute"
                              width="100%"
                              height="100%"
                            >
                              <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="blue.500"
                                size="xl"
                              />
                            </Box>
                          )}
                          <Box borderTop="0.1rem solid #dfe3e8">
                            <Box
                              borderLeft={`3px solid ${
                                selectedOrderIndex === order.id
                                  ? '#007489'
                                  : 'transparent'
                              }`}
                            >
                              <OrderListItem
                                {...order}
                                updateIndex={arg => _currentOrder(arg)}
                                open={open}
                                createCheckout={a => createCheck(a, order.id)}
                                key={order.id}
                                index={order.id}
                                selectedOrderIndex={selectedOrderIndex}
                                disabled={
                                  !(
                                    !selectedOrderIndex ||
                                    selectedOrderIndex === order.id
                                  )
                                }
                                buttons={
                                  <>
                                    <Button
                                      aria-label="delete order"
                                      height="1.3rem"
                                      minWidth="1.3rem"
                                      bg="transparent"
                                      color="#66788a"
                                      px={0}
                                      mx={1}
                                      onClick={async e => {
                                        e.stopPropagation();
                                        setProcessingOrder(order.id);
                                        const res = await deleteOrder({
                                          variables: {
                                            id: order.id,
                                          },
                                        });
                                        setProcessingOrder(null);
                                      }}
                                    >
                                      <Icon name="small-close" size={4} />
                                    </Button>
                                    <Button
                                      aria-label="show line-items"
                                      height="1.3rem"
                                      minWidth="1.3rem"
                                      bg="transparent"
                                      color="#66788a"
                                      px={0}
                                      mx={1}
                                      onClick={async e => {
                                        e.stopPropagation();
                                        setProcessingOrder(order.id);
                                        setSelectedOrderIndex(null);
                                        if (
                                          JSON.parse(order.customCart).lineItems
                                            .edges.length > 0
                                        ) {
                                          toast({
                                            position: 'top-right',
                                            title: 'custom called',
                                            status: 'success',
                                            duration: 2000,
                                            isClosable: true,
                                          });
                                          await placeCustomOrder(
                                            order.customCart,
                                            order.id,
                                            updateOrder,
                                            channelsData
                                          );
                                        } else if (
                                          JSON.parse(order.mpCart).lineItems
                                            .edges.length > 0
                                        ) {
                                          await doPurchase([order.id]);
                                        } else if (
                                          JSON.parse(order.zincCart).products
                                            .length > 0
                                        ) {
                                          toast({
                                            position: 'top-right',
                                            title: 'zinc called',
                                            status: 'success',
                                            duration: 2000,
                                            isClosable: true,
                                          });
                                          await placeZincOrder(
                                            {
                                              retailer: 'amazon',
                                              products: JSON.parse(
                                                order.zincCart
                                              ).products,
                                              shipping_address: {
                                                first_name: order.first_name,
                                                last_name: order.last_name,
                                                address_line1:
                                                  order.streetAddress1,
                                                address_line2:
                                                  order.streetAddress2,
                                                zip_code: order.zip,
                                                city: order.city,
                                                state: order.state,
                                                country: 'US',
                                                phone_number: '281-337-9862',
                                              },
                                              addax: true,
                                              is_gift: true,
                                              gift_message: `Here is your package, ${
                                                order.first_name
                                              }! Enjoy!`,
                                              shipping: {
                                                order_by: 'price',
                                                max_days: 5,
                                                max_price: 1000,
                                              },
                                              webhooks: {
                                                request_succeeded:
                                                  'https://webhook.site/3d977945-5b89-4734-8a64-146d321a100c',
                                                request_failed:
                                                  'https://webhook.site/3d977945-5b89-4734-8a64-146d321a100c',
                                                tracking_obtained:
                                                  'https://webhook.site/3d977945-5b89-4734-8a64-146d321a100c',
                                              },
                                              client_notes: {
                                                shopify_order_id: order.orderId,
                                                os_order_id: order.id,
                                              },
                                            },
                                            me.zincToken,
                                            updateOrder
                                          );
                                        } else {
                                          toast({
                                            position: 'top-right',
                                            title: 'Not called',
                                            status: 'success',
                                            duration: 2000,
                                            isClosable: true,
                                          });
                                        }
                                        setProcessingOrder(null);
                                      }}
                                    >
                                      <Icon name="check" size={3} />
                                    </Button>
                                  </>
                                }
                              />
                            </Box>
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
                        Your pending orders will appear here.
                      </Heading>
                    </Box>
                  )}
                </Box>
              </Box>

              <Box {...Layout}>
                {selectedOrderIndex ? (
                  <Box>
                    <Box
                      {...CardStyle}
                      padding={15}
                      opacity={cartLoading && '0.2'}
                      width="100%"
                      height="100%"
                    >
                      {cartLoading && (
                        <Box
                          display="flex"
                          justifyContent="center"
                          margin="auto"
                        >
                          <Box position="fixed">
                            <Spinner
                              thickness="4px"
                              speed="0.65s"
                              emptyColor="gray.200"
                              color="blue.500"
                              size="xl"
                            />
                          </Box>
                        </Box>
                      )}

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        fontWeight={600}
                        background="white"
                      >
                        <>
                          <Heading fontSize="md" color="text" mb={1}>
                            {theOrder.orderName}
                          </Heading>

                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            marginLeft={4}
                          >
                            <Text
                              fontSize="sm"
                              fontWeight={500}
                              marginX={2}
                              color="#7B8B9A"
                              cursor="pointer"
                              onClick={() => {
                                // setSelectedLineIndex([]);
                                setSelectedOrderIndex(null);
                              }}
                            >
                              Empty
                            </Text>

                            <Button
                              borderRadius={3}
                              marginX={1}
                              px={2}
                              height={5}
                              bg="#ddebf7"
                              color="#1070ca"
                              _hover={{ bg: '#c0d8ed' }}
                              onClick={() => overwrite(theOrder.id)}
                              disabled={
                                (theOrder.mpCart &&
                                  theOrder.mpCart.lineItems &&
                                  theOrder.mpCart.lineItems.edges.length ===
                                    0) ||
                                !theOrder.mpCart
                              }
                            >
                              <Heading
                                fontSize="xs"
                                fontWeight={700}
                                textTransform="uppercase"
                              >
                                Match
                              </Heading>
                            </Button>
                          </Box>
                        </>
                      </Box>
                      <Box>
                        <Box display="flex">
                          <Text
                            contenteditable="true"
                            fontSize="sm"
                            marginRight={1}
                            lineHeight="short"
                          >
                            {theOrder.first_name}
                          </Text>
                          <Text
                            contenteditable="true"
                            fontSize="sm"
                            lineHeight="short"
                          >
                            {theOrder.last_name}
                          </Text>
                        </Box>
                        <Text
                          contenteditable="true"
                          fontSize="sm"
                          lineHeight="short"
                        >
                          {theOrder.streetAddress1}
                        </Text>
                        {theOrder.streetAddress2 && (
                          <Text
                            contenteditable="true"
                            fontSize="sm"
                            lineHeight="short"
                          >
                            {theOrder.streetAddress2}
                          </Text>
                        )}
                        <Box display="flex">
                          <Text
                            contenteditable="true"
                            fontSize="sm"
                            marginRight={1}
                            lineHeight="short"
                          >
                            {theOrder.city}
                          </Text>
                          <Text
                            contenteditable="true"
                            fontSize="sm"
                            marginRight={2}
                            lineHeight="short"
                          >
                            {theOrder.state}
                          </Text>
                          <Text
                            contenteditable="true"
                            fontSize="sm"
                            lineHeight="short"
                          >
                            {theOrder.zip}
                          </Text>
                        </Box>
                      </Box>
                      <Box paddingTop={2}>
                        <Box
                          marginLeft="-3px"
                          background="#F7F9FD"
                          paddingY=".7em"
                          paddingX="1em"
                          border="1px solid #edf0f2"
                        >
                          <Box marginBottom={2}>
                            <Text
                              fontSize="sm"
                              fontWeight={500}
                              color="#084B8A"
                            >
                              Line Items
                            </Text>
                          </Box>
                          {theOrder.lineItems.map(a => (
                            <OrderLine key={a.id} item={a.node ? a.node : a} />
                          ))}
                        </Box>
                      </Box>
                      {channelsData.channels.filter(
                        channel => channel.type === 'MARKETPLACE'
                      ).length > 0 && (
                        <MPCart
                          cartName="Marketplace"
                          cart={JSON.parse(theOrder.mpCart)}
                          removeItem={a =>
                            removeMPItem(a, JSON.parse(theOrder.mpCart).id)
                          }
                          checkoutLineItemsUpdate={a =>
                            updateMPItem(a, JSON.parse(theOrder.mpCart).id)
                          }
                          loading={updateOrderLoading}
                        />
                      )}

                      {channelsData.channels.filter(
                        channel => channel.type === 'SHOPIFY'
                      ).length > 0 && (
                        <MPCart
                          cartName="BN"
                          background="#F1FBFC"
                          color="#007489"
                          cart={JSON.parse(theOrder.customCart)}
                          removeItem={a =>
                            removeCustomItem(
                              a,
                              JSON.parse(theOrder.customCart).id,
                              channelsData.channels.filter(
                                channel => channel.type === 'SHOPIFY'
                              )[0].settings.key,
                              channelsData.channels.filter(
                                channel => channel.type === 'SHOPIFY'
                              )[0].settings.shopURL
                            )
                          }
                          checkoutLineItemsUpdate={a =>
                            updateCustomItem(
                              a,
                              JSON.parse(theOrder.customCart).id,
                              channelsData.channels.filter(
                                channel => channel.type === 'SHOPIFY'
                              )[0].settings.key,
                              channelsData.channels.filter(
                                channel => channel.type === 'SHOPIFY'
                              )[0].settings.shopURL
                            )
                          }
                          loading={updateOrderLoading}
                        />
                      )}

                      {channelsData.channels.filter(
                        channel => channel.type === 'ZINC'
                      ).length > 0 && (
                        <ZincCart
                          cart={JSON.parse(theOrder.zincCart)}
                          removeItem={async productID => {
                            const res = await updateOrder({
                              variables: {
                                id: selectedOrderIndex,
                                zincCart: JSON.stringify({
                                  products: JSON.parse(
                                    theOrder.zincCart
                                  ).products.filter(
                                    a => a.product_id !== productID
                                  ),
                                }),
                              },
                            });
                          }}
                          checkoutLineItemsUpdate={async (
                            productID,
                            quantity
                          ) => {
                            if (quantity === 0) {
                              const res = await updateOrder({
                                variables: {
                                  id: selectedOrderIndex,
                                  zincCart: JSON.stringify({
                                    products: JSON.parse(
                                      theOrder.zincCart
                                    ).products.filter(
                                      a => a.product_id !== productID
                                    ),
                                  }),
                                },
                              });
                            } else {
                              const find = JSON.parse(
                                theOrder.zincCart
                              ).products.find(
                                obj => obj.product_id === productID
                              );
                              const newQ = quantity;
                              find.quantity = newQ;
                              const res = await updateOrder({
                                variables: {
                                  id: selectedOrderIndex,
                                  zincCart: JSON.stringify({
                                    products: [
                                      find,
                                      ...JSON.parse(
                                        theOrder.zincCart
                                      ).products.filter(
                                        a => a.product_id !== productID
                                      ),
                                    ],
                                  }),
                                },
                              });
                            }
                          }}
                          loading={updateOrderLoading}
                        />
                      )}
                    </Box>
                  </Box>
                ) : (
                  <Box {...CardStyle} padding={3}>
                    <Box
                      p={2}
                      display="flex"
                      borderLeft="3px solid #d9822b"
                      borderRight="1px solid #E2E8F0"
                      borderTop="1px solid #E2E8F0"
                      borderBottom="1px solid #E2E8F0"
                    >
                      <Icon name="warning-2" color="#d9812a" mr={2} />
                      <Heading fontSize="sm" color="text">
                        Please choose an order or a line item.
                      </Heading>
                    </Box>
                  </Box>
                )}
                <Find
                  headerSize={600}
                  atcDisabled={!theOrder}
                  addMPItem={(a, b) => {
                    if (theOrder.mpCart && JSON.parse(theOrder.mpCart).id) {
                      addVariant(a, b, JSON.parse(theOrder.mpCart).id);
                    } else {
                      toast({
                        position: 'top-right',
                        title: 'checkout does not exist',
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                      });
                      createCheck(
                        {
                          shippingAddress: {
                            address1: theOrder.streetAddress1,
                            address2:
                              theOrder.streetAddress2 &&
                              theOrder.streetAddress2,
                            city: theOrder.city,
                            province: theOrder.state,
                            country: 'US',
                            zip: theOrder.zip,
                            firstName: theOrder.first_name,
                            lastName: theOrder.last_name,
                          },
                          lineItems: [
                            {
                              variantId: a,
                              quantity: b,
                            },
                          ],
                        },
                        theOrder.id
                      );
                    }
                  }}
                  addCustomItem={(a, b, url, key) => {
                    if (
                      theOrder.customCart &&
                      JSON.parse(theOrder.customCart).id
                    ) {
                      addCustomVariant(
                        a,
                        b,
                        JSON.parse(theOrder.customCart).id,
                        checkoutLineItemsAdd,
                        updateOrder,
                        url,
                        key
                      );
                    } else {
                      toast({
                        position: 'top-right',
                        title: 'checkout does not exist',
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                      });
                      createCustomCheck(
                        {
                          shippingAddress: {
                            address1: theOrder.streetAddress1,
                            address2:
                              theOrder.streetAddress2 &&
                              theOrder.streetAddress2,
                            city: theOrder.city,
                            province: theOrder.state,
                            country: 'US',
                            zip: theOrder.zip,
                            firstName: theOrder.first_name,
                            lastName: theOrder.last_name,
                          },
                          lineItems: [
                            {
                              variantId: a,
                              quantity: b,
                            },
                          ],
                          email: 'junaidkabani@windstream.net',
                        },
                        theOrder.id,
                        createCheckout,
                        updateOrder,
                        url,
                        key
                      );
                    }
                  }}
                  addZincItem={(a, b, c, d, e) =>
                    addZincItem(a, b, c, d, e, JSON.parse(theOrder.zincCart))
                  }
                />
              </Box>
            </>
          );
        })()}
      </Box>
    </>
  );
}

export default PendingOrders;
