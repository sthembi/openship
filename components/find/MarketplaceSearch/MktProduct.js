import React, { Component } from 'react';
import {
  Box,
  Button,
  Heading,
  Text,
  Icon,
  PseudoBox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';
import VariantSelector from './VariantSelector';

class MktProduct extends Component {
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
      selectedVariantQuantity: event,
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
        <Box
          display="flex"
          alignItems="center"
          borderTop="0.1rem solid #dfe3e8"
        >
          <Box padding={4}>
            {product.images.edges.length && (
              <Box
                background="white"
                border="1px solid #e8e9ea"
                borderRadius={3}
                height="90px"
                width="90px"
              >
                <Box
                  as="img"
                  src={variantImage}
                  alt={`${product.title} product shot`}
                />
              </Box>
            )}
          </Box>
          <Box padding={4} paddingLeft={0} marginTop={1} marginBottom="auto">
            <Heading fontSize="md" color="text" fontWeight={500}>
              {product.title}
            </Heading>
            <Heading size={400} marginRight={10} color="green.600">
              ${variant.price}
            </Heading>
            <Box display="flex" marginTop={1} marginBottom={7}>
              {variantSelectors}
            </Box>
            {!atcDisabled && (
              <Box display="flex">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  paddingRight={5}
                >
                  <PseudoBox>
                    <Text fontSize=".65rem" fontWeight="600" color="gray.500">
                      QUANTITY
                    </Text>
                    <NumberInput
                      size="sm"
                      value={selectedVariantQuantity}
                      onChange={this.handleQuantityChange}
                      min={1}
                      width="80px"
                    >
                      <NumberInputField
                        focusBorderColor="blue.500"
                        textAlign="center"
                        _hover={{ borderColor: 'blue.500' }}
                        height="25px"
                      />
                      <NumberInputStepper width="25px">
                        <NumberIncrementStepper
                          bg="#f6f7f9"
                          color="blue.500"
                          _active={{ bg: 'blue.500' }}
                          _hover={{ bg: 'blue.500', color: 'white' }}
                          children={<Icon name="add" color="currentColor" />}
                          marginTop="0px !important"
                          borderTopWidth="0px !important"
                        />
                      </NumberInputStepper>
                      <NumberInputStepper left="0" width="25px">
                        <NumberDecrementStepper
                          bg="#f6f7f9"
                          color="blue.500"
                          _active={{ bg: 'blue.500' }}
                          _hover={{ bg: 'blue.500', color: 'white' }}
                          children={<Icon name="minus" color="currentColor" />}
                          borderLeft="0px"
                          borderRight="1px solid #E2E8F0"
                          marginTop="0px !important"
                          borderTopWidth="0px !important"
                        />
                      </NumberInputStepper>
                    </NumberInput>
                  </PseudoBox>
                  <Button
                    background="#DDEBF7"
                    borderRadius={3}
                    marginRight={1}
                    px={2}
                    mx={3}
                    mt="auto"
                    height={6}
                    onClick={() =>
                      addVariantToCart(variant.id, selectedVariantQuantity)
                    }
                    disabled={atcDisabled}
                  >
                    <Heading
                      letterSpacing="wide"
                      fontSize="sm"
                      fontWeight={700}
                      color="#1070CA"
                    >
                      ADD TO CART
                    </Heading>
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </>
    );
  }
}

export default MktProduct;
