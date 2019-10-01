import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pane, Text, Heading } from 'evergreen-ui';
import CartItem from './ZincCartItem';

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.object,
    removeItem: PropTypes.func,
    checkoutLineItemsUpdate: PropTypes.func,
  };

  render() {
    const { cart, removeItem, checkoutLineItemsUpdate, loading } = this.props;

    return (
      <Pane
        marginLeft="-3px"
        background="#EDF2F7"
        border="muted"
        paddingY=".7em"
        paddingX="1em"
      >
        <Pane marginBottom={10}>
          <Text size={400} fontWeight={500} color="#1A202C">
            Zinc Cart
          </Text>
        </Pane>
        {cart && cart.products && cart.products.length ? (
          cart.products.map(a => (
            <CartItem
              removeItem={removeItem ? a => removeItem(a) : undefined}
              checkoutLineItemsUpdate={
                checkoutLineItemsUpdate
                  ? (id, quantity) => checkoutLineItemsUpdate(id, quantity)
                  : undefined
              }
              key={a.product_id}
              lineItem={a}
              loading={loading}
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
        )}
      </Pane>
    );
  }
}

export default Cart;
