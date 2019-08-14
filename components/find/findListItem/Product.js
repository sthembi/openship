import React, { Component } from 'react';
import { Pane, Heading, Text, Avatar, Icon } from 'evergreen-ui';
import PropTypes from 'prop-types';
import VariantSelector from './VariantSelector';
import Button from '../../common/Button';

class Product extends Component {
  static propTypes = {
    product: PropTypes.object,
    addVariantToCart: PropTypes.func,
    addWidget: PropTypes.func,
    atcDisabled: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: {},
      selectedVariantQuantity: 1,
    };
  }

  componentWillMount() {
    const { product } = this.props;
    product.options.forEach(selector => {
      this.setState(prevState => ({
        selectedOptions: {
          ...prevState.selectedOptions,
          [selector.name]: selector.values[0],
        },
      }));
    });
  }

  handleOptionChange = event => {
    const { product } = this.props;
    const { target } = event;
    const { selectedOptions } = this.state;
    selectedOptions[target.name] = target.value;

    const selectedVariant = product.variants.edges.find(variant =>
      variant.node.selectedOptions.every(
        selectedOption =>
          selectedOptions[selectedOption.name] === selectedOption.value
      )
    ).node;

    this.setState({
      selectedVariant,
      selectedVariantImage: selectedVariant.image.src,
    });
  };

  handleQuantityChange = event => {
    this.setState({
      selectedVariantQuantity: event.target.value,
    });
  };

  handleQuantityDown = () => {
    this.setState(prevState => ({
      selectedVariantQuantity: prevState.selectedVariantQuantity - 1 || 1,
    }));
  };

  handleQuantityUp = () => {
    this.setState(prevState => ({
      selectedVariantQuantity: prevState.selectedVariantQuantity + 1,
    }));
  };

  findImage = (images, variantId) => {
    const primary = images[0];

    const image = images.filter(function(a) {
      return a.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  };

  render() {
    const { product, addVariantToCart, atcDisabled, addWidget } = this.props;
    const {
      selectedVariantImage,
      selectedVariantQuantity,
      selectedVariant,
    } = this.state;
    const variantImage =
      selectedVariantImage || product.images.edges[0].node.src;
    const variant = selectedVariant || product.variants.edges[0].node;
    const variantQuantity = selectedVariantQuantity || 1;
    const variantSelectors = product.options.map(option => (
      <VariantSelector
        handleOptionChange={this.handleOptionChange}
        key={option.id.toString()}
        option={option}
      />
    ));
    return (
      <>
        <Pane
          display="flex"
          alignItems="center"
          borderTop="0.1rem solid #dfe3e8"
        >
          <Pane padding={15}>
            {product.images.edges.length && (
              <Avatar
                src={variantImage}
                alt={`${product.title} product shot`}
                borderStyle="solid"
                borderWidth="1px"
                borderRadius={3}
                borderColor="#e8e9ea"
                size={90}
              />
            )}
          </Pane>
          <Pane padding={15} paddingLeft={0} marginTop={3} marginBottom="auto">
            <Heading size={500}>{product.title}</Heading>
            <Heading size={400} marginRight={10} color="green">
              ${variant.price}
            </Heading>
            <Pane display="flex" marginTop={3} marginBottom={7}>
              {/* {product.options.map(option => (
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
                ))} */}
              {variantSelectors}

              {/* <button
              className="Product__buy button"
              onClick={() =>
                this.props.addVariantToCart(
                  variant.id,
                  this.state.selectedVariantQuantity
                )
              }
            >
              Add to Cart
            </button> */}
            </Pane>
            {addWidget && (
              <Pane display="flex">
                <Pane
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  paddingRight={5}
                >
                  <Pane display="flex" paddingRight={5} height={20}>
                    <Pane
                      display="flex"
                      alignItems="center"
                      background="#f4f4f4"
                      paddingX={5}
                      borderRadius={2}
                      boxShadow="0 0 2px rgba(67, 90, 111, 0.3)"
                    >
                      <Icon
                        color="#425A70"
                        icon="minus"
                        appearance="minimal"
                        size={12}
                        cursor="pointer"
                        onClick={this.handleQuantityDown}
                      />

                      <Text size={300} marginX={9}>
                        {selectedVariantQuantity}
                      </Text>

                      <Icon
                        color="#425A70"
                        icon="plus"
                        appearance="minimal"
                        size={12}
                        cursor="pointer"
                        onClick={this.handleQuantityUp}
                      />
                    </Pane>
                  </Pane>
                  <Pane height={20}>
                    <Button
                      boxShadow="0 0 2px rgba(67, 90, 111, 0.3)"
                      intent="primary"
                      height={20}
                      onClick={() =>
                        addVariantToCart(variant.id, selectedVariantQuantity)
                      }
                      disabled={atcDisabled}
                    >
                      Add to Cart
                    </Button>
                  </Pane>
                </Pane>
              </Pane>
            )}
            {/* <Pane
            display="flex"
            alignItems="center"
            background="tint2"
            marginTop={5}
            padding={5}
          >
            <Pane marginLeft={5} display="flex">
              <Text size={500} fontSize="12px">
                Quantity:
              </Text>
              <Pane
                display="flex"
                alignItems="center"
                background="#fff"
                marginX={6}
                paddingX={5}
                borderRadius={2}
                boxShadow="0 0 2px rgba(67, 90, 111, 0.3)"
              >
                <Icon
                  color="#425A70"
                  icon="minus"
                  appearance="minimal"
                  size={12}
                  onClick={this.handleQuantityDown}
                />
                <Text size={300} marginX={9}>
                  {this.state.selectedVariantQuantity}
                </Text>
                <Icon
                  color="#425A70"
                  icon="plus"
                  appearance="minimal"
                  size={12}
                  onClick={this.handleQuantityUp}
                />
              </Pane>
            </Pane>
            <Pane height={20}>
              <Button
                intent="primary"
                height={20}
                onClick={() =>
                  this.props.addVariantToCart(
                    variant.id,
                    this.state.selectedVariantQuantity
                  )
                }
                disabled={!this.props.checkoutID}
              >
                Add to Cart
              </Button>
            </Pane>
          </Pane> */}
          </Pane>
          {/* <Pane
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
            {this.props.client}
          </Heading>
          <Pane marginLeft="auto" height={20}>
            <AddProduct product={this.props.product} />
          </Pane>
          {this.props.buttons}
        </Pane> */}
          {/* {this.props.addWidget && (
            <Pane
              marginLeft="auto"
              boxShadow="0px 0px 4px 0px rgba(67, 90, 111, 0.3)"
              display="flex"
              alignItems="stretch"
            >
              <Pane
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                background="#F7F9FD"
                padding={5}
              >
                <Pane marginBottom={5} display="flex" flexDirection="column">
                  <Text size={500} fontSize="12px" marginBottom={4}>
                    QTY
                  </Text>
                  <Pane
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    background="#fff"
                    paddingY={5}
                    borderRadius={2}
                    boxShadow="0 0 2px rgba(67, 90, 111, 0.3)"
                  >
                    <Icon
                      color="#425A70"
                      icon="plus"
                      appearance="minimal"
                      size={12}
                      onClick={this.handleQuantityUp}
                    />

                    <Text size={300} marginY={9}>
                      {this.state.selectedVariantQuantity}
                    </Text>
                    <Icon
                      color="#425A70"
                      icon="minus"
                      appearance="minimal"
                      size={12}
                      onClick={this.handleQuantityDown}
                    />
                  </Pane>
                </Pane>
                <Pane height={20}>
                  <Button
                    intent="success"
                    height={20}
                    paddingX={1}
                    onClick={() =>
                      this.props.addVariantToCart(
                        variant.id,
                        this.state.selectedVariantQuantity
                      )
                    }
                    disabled={!this.props.checkoutID}
                  >
                    <Icon icon="plus" />
                  </Button>
                </Pane>
              </Pane>
            </Pane>
          )} */}
        </Pane>
        {/* <Pane paddingTop={0}>
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="tint2"
            marginTop={5}
            padding={5}
          >
            <Pane marginLeft={5} display="flex">
              <Text size={500} fontSize="12px">
                Quantity:
              </Text>
              <Pane
                display="flex"
                alignItems="center"
                background="#fff"
                marginX={6}
                paddingX={5}
                borderRadius={2}
                boxShadow="0 0 2px rgba(67, 90, 111, 0.3)"
              >
                <Icon
                  color="#425A70"
                  icon="minus"
                  appearance="minimal"
                  size={12}
                  onClick={this.handleQuantityDown}
                />
                <Text size={300} marginX={9}>
                  {this.state.selectedVariantQuantity}
                </Text>
                <Icon
                  color="#425A70"
                  icon="plus"
                  appearance="minimal"
                  size={12}
                  onClick={this.handleQuantityUp}
                />
              </Pane>
            </Pane>
            <Pane height={20}>
              <Button
                intent="primary"
                height={20}
                onClick={() =>
                  this.props.addVariantToCart(
                    variant.id,
                    this.state.selectedVariantQuantity
                  )
                }
                disabled={!this.props.checkoutID}
              >
                Add to Cart
              </Button>
            </Pane>
          </Pane>
        </Pane> */}
      </>
    );
  }
}

export default Product;
