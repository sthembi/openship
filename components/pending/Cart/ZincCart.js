import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Badge } from '@chakra-ui/core';
import CartItem from './ZincCartItem';

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.object,
    removeItem: PropTypes.func,
    checkoutLineItemsUpdate: PropTypes.func,
  };

  render() {
    const {
      cart,
      checkout,
      removeItem,
      checkoutLineItemsUpdate,
      loading,
    } = this.props;

    return (
      <Box
        marginLeft="-3px"
        background="#EDF2F7"
        paddingY=".7em"
        paddingX="1em"
        border="1px solid #edf0f2"
      >
        <Box marginBottom={2} display="flex" alignItems="center">
          <Text fontSize="sm" fontWeight={500} color="#1A202C">
            Zinc Cart
          </Text>
          {checkout && checkout._type === 'error' && (
            <Box marginLeft="auto">
              <a
                href={`https://dash.zinc.io/orders/${checkout.request_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge variantColor="red">Status: Error</Badge>
              </a>
            </Box>
          )}
          {checkout && checkout.tracking && (
            <Box marginLeft="auto">
              <a
                href={`https://dash.zinc.io/orders/${checkout.request_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge>
                  Status: {checkout.tracking.length > 0 ? 'Shipped' : 'Pending'}
                </Badge>
              </a>
            </Box>
          )}
        </Box>
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
          <Box
            background="#fff"
            border="muted"
            padding={2}
            display="flex"
            justifyContent="center"
          >
            <Text fontSize="sm">Cart is empty</Text>
          </Box>
        )}
      </Box>
    );
  }
}

export default Cart;
