import React, { Component } from 'react';
import { Pane, Heading, Text, Avatar, Icon } from 'evergreen-ui';
import PropTypes from 'prop-types';
import VariantSelector from './VariantSelector';
import Button from '../../common/Button';

class Product extends Component {
  static propTypes = {
    product: PropTypes.object,
    addVariantToCart: PropTypes.func,
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
    const { product, addVariantToCart, atcDisabled } = this.props;
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
              {variantSelectors}
            </Pane>
            {!atcDisabled && (
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
          </Pane>
        </Pane>
      </>
    );
  }
}

export default Product;
