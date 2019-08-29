import { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import { Text, Pane, Dialog, Heading, toaster } from 'evergreen-ui';
import PropTypes from 'prop-types';
import ReshipmentLineItem from './ReshipmentLineItem';

const Layout = {
  flex: '1 1 10rem',
  marginLeft: '2rem',
  marginTop: '2rem',
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
      createAt: $createAt
    ) {
      id
      email
    }
  }
`;

function readFormField(data, field, onInput) {
  return (
    <Pane marginBottom={6}>
      <Text
        contenteditable="true"
        fontWeight={500}
        size={400}
        onInput={onInput}
      >
        {data}
      </Text>
      <Heading lineHeight="10px" fontSize="10px" size={100}>
        {field}
      </Heading>
    </Pane>
  );
}

const Reshipment = ({ order, isShown, onCloseComplete, shop }) => {
  const [first, setFirst] = useState(null);
  const [last, setLast] = useState(null);
  const [address, setAddress] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zip, setZip] = useState(null);
  const [lineItems, setLineItems] = useState(null);
  const initialItems = [];

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
    <Mutation mutation={CREATE_ORDER}>
      {(createOrder, { error, loading }) => (
        <Dialog
          isShown={isShown}
          title="Confirm Reshipment"
          onCloseComplete={onCloseComplete}
          onCancel={close => {
            resetLineItems();
            close();
          }}
          isConfirmLoading={loading}
          isConfirmDisabled={loading}
          hasHeader={false}
          confirmLabel="Confirm Reshipment"
          onConfirm={async () => {
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
              },
            });
            onCloseComplete();
            toaster.success(`${order.name} has been requested for reshipment.`);
          }}
        >
          <Pane
            display="flex"
            flexWrap="wrap"
            marginLeft="-2rem"
            marginTop="-2rem"
          >
            <Pane {...Layout}>
              <Pane marginBottom={10}>
                <Text fontWeight={500} size={500}>
                  {order.name}
                </Text>
                <Heading size={100}>Order Number</Heading>
              </Pane>
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
            </Pane>
            <Pane {...Layout}>
              {order.lineItems.edges.map(a => (
                <ReshipmentLineItem arg={a.node} handleLine={handleLine} />
              ))}
            </Pane>
          </Pane>
        </Dialog>
      )}
    </Mutation>
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
