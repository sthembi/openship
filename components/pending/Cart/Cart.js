import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pane, Text, Heading } from 'evergreen-ui';
import CartItem from './CartItem';

class Cart extends Component {
  static propTypes = {
    checkout: PropTypes.object,
    createCheckout: PropTypes.func,
    setCheckout: PropTypes.func,
    checkoutLineItemsRemove: PropTypes.func,
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isCartOpen: false,
  //     isCustomerAuthOpen: false,
  //     isNewCustomer: false,
  //     products: [],
  //     checkout: {},
  //   };
  // }

  // openCheckout = () => {
  //   const { checkout } = this.props;
  //   window.open(checkout.webUrl);
  // };

  // create = async () => {
  //   const { createCheckout, setCheckout } = this.props;
  //   const checkout = await createCheckout({
  //     variables: {
  //       input: {
  //         lineItems: [
  //           {
  //             variantId:
  //               'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yODAxMjQ5NTAxMTkxOA==',
  //             quantity: 2,
  //           },
  //         ],
  //       },
  //     },
  //   });

  //   setCheckout(checkout.data.createCheckout.checkout);
  // };

  render() {
    const { checkout, removeItem, checkoutLineItemsUpdate } = this.props;

    return (
      <Pane
        marginLeft="-3px"
        background="#F1FAF5"
        border="muted"
        paddingY=".7em"
        paddingX="1em"
      >
        <Pane marginBottom={10}>
          <Text size={400} fontWeight={500} color="#00783E">
            Cart
          </Text>
        </Pane>
        {checkout &&
          checkout.lineItems &&
          (checkout.lineItems.edges.length ? (
            checkout.lineItems.edges.map(a => (
              <CartItem
                removeItem={removeItem ? a => removeItem(a) : undefined}
                checkoutID={checkout.id}
                checkoutLineItemsUpdate={
                  checkoutLineItemsUpdate
                    ? a => checkoutLineItemsUpdate(a)
                    : undefined
                }
                key={a.node.id.toString()}
                lineItem={a.node}
              />
            ))
          ) : (
            <Pane
              background="#fff"
              border="muted"
              padding={10}
              display="flex"
              justifyContent="center"
            >
              <Text size={400}>Cart is empty</Text>
            </Pane>
          ))}
      </Pane>
    );
  }
}

export default Cart;
