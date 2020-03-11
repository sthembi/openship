import { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import {
  Text,
  Box,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast,
  Button,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';
import ReshipmentLineItem from './ReshipmentLineItem';
import { ORDER_QUERY, PAGINATION_QUERY } from '../pending/Pending';

const Layout = {
  flex: '1 1 10rem',
  marginLeft: '2rem',
  marginTop: '2rem',
};

const wideText = {
  fontSize: 'xs',
  fontWeight: 500,
  color: 'gray.500',
  letterSpacing: 'wide',
  textTransform: 'uppercase',
};

const CREATE_ORDER = gql`
  mutation createOrder(
    $shopName: String!
    $orderId: Float!
    $orderName: String!
    $email: String
    $first_name: String
    $last_name: String
    $streetAddress1: String!
    $streetAddress2: String
    $city: String!
    $state: String!
    $zip: String!
    $lineItems: Json!
    $currency: String!
    $totalPrice: String!
    $subTotalPrice: String!
    $totalDiscount: String!
    $totalTax: String!
    $mpCart: String!
    $zincCart: String!
    $processed: Processed
    $createAt: String!
  ) {
    createOrder(
      shopName: $shopName
      orderId: $orderId
      orderName: $orderName
      email: $email
      first_name: $first_name
      last_name: $last_name
      streetAddress1: $streetAddress1
      streetAddress2: $streetAddress2
      city: $city
      state: $state
      zip: $zip
      lineItems: $lineItems
      currency: $currency
      totalPrice: $totalPrice
      totalDiscount: $totalDiscount
      subTotalPrice: $subTotalPrice
      totalTax: $totalTax
      mpCart: $mpCart
      zincCart: $zincCart
      processed: $processed
      createAt: $createAt
    ) {
      id
      email
    }
  }
`;

function readFormField(data, field, onInput) {
  return (
    <Box marginBottom={2}>
      <Text
        contentEditable="true"
        onInput={onInput}
        fontWeight={500}
        fontSize="md"
        color="text"
      >
        {data}
      </Text>
      <Heading {...wideText}>{field}</Heading>
    </Box>
  );
}

const Reshipment = ({ order, shop, isOpen, onClose }) => {
  const [first, setFirst] = useState(null);
  const [last, setLast] = useState(null);
  const [address, setAddress] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zip, setZip] = useState(null);
  const [lineItems, setLineItems] = useState(null);
  const initialItems = [];

  const toast = useToast();

  const [createOrder, { loading }] = useMutation(CREATE_ORDER, {
    refetchQueries: [
      {
        query: ORDER_QUERY,
        variables: {
          skip: 0,
          first: 100,
          orderBy: 'createdAt_ASC',
          processed: 'FALSE',
        },
      },
      {
        query: PAGINATION_QUERY,
      },
    ],
  });

  useEffect(() => {
    if (order) {
      setFirst(order.shippingAddress.name.split(' ')[0]);
      setLast(order.shippingAddress.name.split(' ').pop());
      setAddress(order.shippingAddress.address1);
      setAddress2(order.shippingAddress.address2);
      setCity(order.shippingAddress.city);
      setState(order.shippingAddress.province);
      setZip(order.shippingAddress.zip);
      setLineItems(order.lineItems.edges);
    }
  }, [order]);

  const handleLine = (ID, quantity, initialQty) => {
    const temp = lineItems;

    temp.map(item => {
      if (item.node.id === ID) {
        item.node.quantity = quantity;
        const itemObj = {};
        itemObj.id = ID;
        itemObj.quantity = initialQty;
        initialItems.push(itemObj);
      }
      return null;
    });
    setLineItems(temp);
  };

  const resetLineItems = () => {
    const temp = lineItems;
    initialItems.reverse();
    temp.map(item => {
      initialItems.forEach(function(initialItem) {
        if (item.node.id === initialItem.id) {
          item.node.quantity = initialItem.quantity;
        }
      });
      return null;
    });
    setLineItems(temp);
  };

  return order ? (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Request Reshipment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            display="flex"
            flexWrap="wrap"
            marginLeft="-2rem"
            marginTop="-2rem"
          >
            <Box {...Layout}>
              <Box marginBottom={4}>
                <Text fontWeight={600} fontSize="md" color="text">
                  {order.name}
                </Text>
                <Heading {...wideText}>Order Number</Heading>
              </Box>
              {readFormField(
                order.shippingAddress.name.split(' ')[0],
                'First Name',
                e => setFirst(e.target.textContent)
              )}
              {readFormField(
                order.shippingAddress.name.split(' ').pop(),
                'Last Name',
                e => setLast(e.target.textContent)
              )}
              {readFormField(
                order.shippingAddress.address1,
                'Street Address',
                e => setAddress(e.target.textContent)
              )}
              {order.shippingAddress.address2 &&
                readFormField(
                  order.shippingAddress.address2,
                  'Apt, Suite, etc.',
                  e => setAddress2(e.target.textContent)
                )}
              {readFormField(order.shippingAddress.city, 'City', e =>
                setCity(e.target.textContent)
              )}
              {readFormField(order.shippingAddress.province, 'State', e =>
                setState(e.target.textContent)
              )}
              {readFormField(order.shippingAddress.zip, 'Zip Code', e =>
                setZip(e.target.textContent)
              )}
            </Box>
            <Box {...Layout}>
              {order.lineItems.edges.map(a => (
                <ReshipmentLineItem arg={a.node} handleLine={handleLine} />
              ))}
            </Box>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="ghost"
            variantColor="blue"
            bg="blue.50"
            _hover={{ bg: 'blue.100' }}
            isLoading={loading}
            onClick={async () => {
              const res = await createOrder({
                variables: {
                  shopName: `${shop}.myshopify.com`,
                  orderId: order.id.split('/').pop(),
                  orderName: order.name,
                  email: order.email || 'noemail@noemail.com',
                  first_name: first,
                  last_name: last,
                  streetAddress1: address,
                  streetAddress2: address2,
                  city,
                  state,
                  zip,
                  phone: order.shippingAddress.phone,
                  lineItems: lineItems
                    .filter(a => a.node.quantity > 0)
                    .map(b => {
                      b.node.id = parseFloat(b.node.id.split('/').pop());
                      return b.node;
                    }),
                  currency: 'USD',
                  totalPrice: order.totalReceivedSet.shopMoney.amount,
                  subTotalPrice: 0,
                  totalDiscount: 0,
                  totalTax: 0,
                  createAt: order.processedAt,
                  mpCart: '{}',
                  zincCart: '{}',
                  processed: 'FALSE',
                },
              });
              onClose();
              toast({
                position: 'top-right',
                title: `${order.name} has been requested for reshipment.`,
                status: 'success',
                duration: 2000,
                isClosable: true,
              });
            }}
          >
            Confirm Reshipment
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ) : (
    <></>
  );
};

export default Reshipment;

Reshipment.propTypes = {
  order: PropTypes.object,
  isShown: PropTypes.bool,
  onCloseComplete: PropTypes.func,
  shop: PropTypes.string,
};
