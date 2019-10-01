import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pane, Text, Heading } from 'evergreen-ui';
import CartItem from './MPCartItem';

class Cart extends Component {
  static propTypes = {
    checkout: PropTypes.object,
    createCheckout: PropTypes.func,
    setCheckout: PropTypes.func,
    checkoutLineItemsRemove: PropTypes.func,
  };

  render() {
    const {
      checkout,
      removeItem,
      checkoutLineItemsUpdate,
      loading,
    } = this.props;

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
            Marketplace Cart
          </Text>
        </Pane>
        {checkout && checkout.lineItems && checkout.lineItems.edges.length ? (
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
