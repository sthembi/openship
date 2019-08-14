import React, { Component } from 'react';
import { Pane, Heading, Avatar, Select } from 'evergreen-ui';
import PropTypes from 'prop-types';
import AddProduct from '../../common/AddProduct';

export default class FindListItem extends Component {
  static propTypes = {
    addToCart: PropTypes.func,
    quantity: PropTypes.number,
    item: PropTypes.object,
    product: PropTypes.object,
    client: PropTypes.string,
  };

  state = {
    selected: 0,
    quantity: 0,
  };

  setQuantity = arg => {
    this.setState({ quantity: arg });
  };

  decrease = () => {
    const { addToCart, item, quantity } = this.props;

    this.setState(
      state => ({ quantity: state.quantity - 1 }),
      () => addToCart && addToCart(item, quantity)
    );
  };

  increase = () => {
    const { addToCart, item, quantity } = this.props;

    this.setState(
      state => ({ quantity: state.quantity + 1 }),
      () => addToCart && addToCart(item, quantity)
    );
  };

  render() {
    const { product, client } = this.props;
    const { selected } = this.state;
    return (
      // <ListItem
      //   item={item}
      //   quantity={quantity}
      //   increase={this.increase}
      //   decrease={this.decrease}
      //   addToCart={addToCart}
      // />
      <Pane
        display="flex"
        alignItems="center"
        padding={15}
        borderTop="0.1rem solid #dfe3e8"
      >
        <Pane>
          <Avatar
            src={product.images.edges[0].node.originalSrc}
            borderStyle="solid"
            borderWidth="1px"
            borderRadius={3}
            borderColor="#e8e9ea"
            size={70}
          />
        </Pane>
        <Pane marginLeft={15} display="block">
          <Heading size={500}>{product.title}</Heading>
          <Heading size={400} marginRight={10} color="green">
            ${product.priceRange.minVariantPrice.amount}
          </Heading>
          <Pane display="flex" marginTop={3}>
            {product.options.map(option => (
              <Pane marginRight={10}>
                <Heading size={100}>{option.name}</Heading>
                <Select
                  value={selected}
                  height={20}
                  onChange={event =>
                    this.setState({ selected: event.target.value, quantity: 0 })
                  }
                >
                  {option.values.map((value, index) => (
                    <option value={index}>{value}</option>
                  ))}
                </Select>
              </Pane>
            ))}
          </Pane>
        </Pane>
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="right"
          marginBottom="auto"
          flexWrap="wrap"
          marginLeft="auto"
        >
          <Heading
            marginLeft="auto"
            marginRight={5}
            size={100}
            lineHeight="24px"
            fontWeight={500}
          >
            {client}
          </Heading>
          <Pane marginLeft="auto" height={20}>
            <AddProduct product={product} />
          </Pane>
        </Pane>
      </Pane>
    );
  }
}
