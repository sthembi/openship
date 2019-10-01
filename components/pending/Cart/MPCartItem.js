import React, { Component } from 'react';
import { Pane, Heading, Avatar, Text, IconButton, Icon } from 'evergreen-ui';
import PropTypes from 'prop-types';

class CartItem extends Component {
  static propTypes = {
    lineItem: PropTypes.object,
    updateLineItemInCart: PropTypes.func,
  };

  decrementQuantity = lineItemId => {
    const { checkoutLineItemsUpdate, lineItem, checkoutID } = this.props;
    checkoutLineItemsUpdate([
      { id: lineItemId, quantity: parseInt(lineItem.quantity - 1, 10) },
    ]);
  };

  incrementQuantity = lineItemId => {
    const { checkoutLineItemsUpdate, lineItem, checkoutID } = this.props;
    checkoutLineItemsUpdate([
      { id: lineItemId, quantity: parseInt(lineItem.quantity + 1, 10) },
    ]);
  };

  render() {
    const {
      lineItem,
      removeItem,
      checkoutLineItemsUpdate,
      checkoutID,
      loading,
    } = this.props;
    return (
      <Pane background="#fff" border="muted" marginBottom={5}>
        <Pane display="flex" alignItems="center">
          <Pane borderRight="muted" height="100%" background="white">
            {lineItem.variant.image && (
              <Avatar
                src={lineItem.variant.image.src}
                alt={`${lineItem.title} product shot`}
                backgroundColor="white"
                // borderStyle="solid"
                // borderWidth="1px"
                borderRadius={0}
                // borderColor="#e8e9ea"
                size={70}
              />
            )}
          </Pane>
          <Pane padding={5} paddingLeft={10}>
            <Heading size={300}>{lineItem.title}</Heading>
            <Pane display="flex" marginTop="2px">
              <Text size={300} lineHeight="12px">
                {lineItem.variant.title}
              </Text>
              <Pane marginX={5} lineHeight="12px">
                ·
              </Pane>
              <Heading
                size={300}
                marginRight={10}
                color="green"
                lineHeight="12px"
              >
                ${(lineItem.quantity * lineItem.variant.price).toFixed(2)}
              </Heading>
            </Pane>
            {lineItem.quantity > 1 && (
              <Text size={300} color="muted" lineHeight="12px">
                ${lineItem.variant.price} x {lineItem.quantity}
              </Text>
            )}
          </Pane>
          <Pane marginLeft="auto" display="flex" alignItems="center">
            {checkoutLineItemsUpdate && (
              <Pane display="flex" height={20}>
                <Pane
                  display="flex"
                  alignItems="center"
                  background="#F9F9FB"
                  border="muted"
                  paddingX={5}
                  borderRadius={2}
                >
                  {loading ? (
                    <Text size={300} marginX={19}>
                      <div className="dot-flashing" />
                    </Text>
                  ) : (
                    <>
                      <Icon
                        color="#425A70"
                        icon="minus"
                        appearance="minimal"
                        size={12}
                        cursor="pointer"
                        onClick={() => this.decrementQuantity(lineItem.id)}
                      />

                      <Text size={300} marginX={9}>
                        {lineItem.quantity}
                      </Text>

                      <Icon
                        color="#425A70"
                        icon="plus"
                        appearance="minimal"
                        size={12}
                        cursor="pointer"
                        onClick={() => this.incrementQuantity(lineItem.id)}
                      />
                    </>
                  )}
                </Pane>
              </Pane>
            )}
            {removeItem && (
              <IconButton
                height={20}
                appearance="minimal"
                inent="danger"
                icon="cross"
                iconSize={15}
                marginX={10}
                pointerEvents="visible"
                onClick={() => removeItem([lineItem.id])}
              />
            )}
          </Pane>
        </Pane>
      </Pane>
    );
  }
}

export default CartItem;
