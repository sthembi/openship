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
    // updateLineItemInCart.mutation({
    //   variables: {
    //     checkoutId: checkoutID,
    //     lineItems: [
    //       { id: lineItemId, quantity: parseInt(lineItem.quantity - 1, 10) },
    //     ],
    //   },
    // });
  };

  incrementQuantity = lineItemId => {
    const { checkoutLineItemsUpdate, lineItem, checkoutID } = this.props;
    checkoutLineItemsUpdate([
      { id: lineItemId, quantity: parseInt(lineItem.quantity + 1, 10) },
    ]);
    // updateLineItemInCart.mutation({
    //   variables: {
    //     checkoutId: checkoutID,
    //     lineItems: [
    //       { id: lineItemId, quantity: parseInt(lineItem.quantity + 1, 10) },
    //     ],
    //   },
    // });
  };

  render() {
    const {
      lineItem,
      removeItem,
      checkoutLineItemsUpdate,
      checkoutID,
    } = this.props;
    return (
      // <li className="Line-item">
      //   <div className="Line-item__img">
      //     {this.props.line_item.variant.image ? <img src={this.props.line_item.variant.image.src} alt={`${this.props.line_item.title} product shot`}/> : null}
      //   </div>
      //   <div className="Line-item__content">
      //     <div className="Line-item__content-row">
      //       <div className="Line-item__variant-title">
      //         {this.props.line_item.variant.title}
      //       </div>
      //       <span className="Line-item__title">
      //         {this.props.line_item.title}
      //       </span>
      //     </div>
      //     <div className="Line-item__content-row">
      // <div className="Line-item__quantity-container">
      //   <button className="Line-item__quantity-update" onClick={() => this.decrementQuantity(this.props.line_item.id)}>-</button>
      //   <span className="Line-item__quantity">{this.props.line_item.quantity}</span>
      //   <button className="Line-item__quantity-update" onClick={() => this.incrementQuantity(this.props.line_item.id)}>+</button>
      // </div>
      //       <span className="Line-item__price">
      //         $ { (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) }
      //       </span>
      //       <button className="Line-item__remove" onClick={()=> this.props.removeLineItemInCart(this.props.line_item.id)}>×</button>
      //     </div>
      //   </div>
      // </li>
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
            {/* <Pane display="flex" marginTop={3}>
            <Pane marginLeft={10}>
              <Heading size={300}>Quantity</Heading>
              <Pane display="flex" alignItems="center">
                <IconButton
                  icon="minus"
                  appearance="minimal"
                  height={15}
                  marginRight={5}
                  onClick={this.handleQuantityDown}
                />
                <Text size={300} marginRight={5}>
                  {this.state.selectedVariantQuantity}
                </Text>
                <IconButton
                  icon="plus"
                  appearance="minimal"
                  height={15}
                  onClick={this.handleQuantityUp}
                />
              </Pane>
            </Pane>
          </Pane> */}
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
                  // boxShadow="0 0 2px rgba(67, 90, 111, 0.3)"
                >
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
