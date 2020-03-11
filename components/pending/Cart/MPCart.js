import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/core';
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
      cart,
      checkout,
      removeItem,
      checkoutLineItemsUpdate,
      loading,
      cartName,
      background,
      color,
    } = this.props;
    return (
      <Box
        marginLeft="-3px"
        background={background || '#F1FAF5'}
        paddingY=".7em"
        paddingX="1em"
        border="1px solid #edf0f2"
      >
        <Box marginBottom={2}>
          {cart ? (
            <a href={cart.webUrl} target="_blank" rel="noopener noreferrer">
              <Text fontSize="sm" fontWeight={500} color={color || '#00783E'}>
                {cartName} Cart
              </Text>
            </a>
          ) : (
            <Text size={400} fontWeight={500} color={color || '#00783E'}>
              {cartName} Cart
            </Text>
          )}
        </Box>
        {cart && cart.lineItems && cart.lineItems.edges.length ? (
          cart.lineItems.edges.map(a => (
            <CartItem
              removeItem={removeItem ? a => removeItem(a) : undefined}
              checkoutID={cart.id}
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
          <Box
            background="#fff"
            border="muted"
            padding={2}
            display="flex"
            justifyContent="center"
          >
            <Text fontSize="sm" color="text">
              Cart is empty
            </Text>
          </Box>
        )}
      </Box>
    );
  }
}

export default Cart;
