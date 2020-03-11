import React, { Component } from 'react';
import {
  Box,
  Heading,
  Text,
  Icon,
  Button,
  PseudoBox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';

class AmzProduct extends Component {
  static propTypes = {
    product: PropTypes.object,
    addZincItem: PropTypes.func,
    atcDisabled: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: {},
      selectedVariantQuantity: 1,
    };
  }

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
    const { product, addZincItem, atcDisabled } = this.props;
    console.log(product);
    const {
      selectedVariantImage,
      selectedVariantQuantity,
      selectedVariant,
    } = this.state;

    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          borderTop="0.1rem solid #dfe3e8"
        >
          <Box flex={1} padding={15}>
            {product.image && (
              <Box
                background="white"
                border="1px solid #e8e9ea"
                borderRadius={3}
              >
                <Box
                  as="img"
                  src={product.image}
                  alt={`${product.title} product shot`}
                />
              </Box>
            )}
          </Box>
          <Box
            flex={6}
            padding={15}
            paddingLeft={0}
            marginTop={3}
            marginBottom="auto"
          >
            <Heading fontSize="md" color="text" fontWeight={500}>
              {`${product.title.slice(0, 70)}...`}
            </Heading>
            <Box display="flex" alignItems="center">
              <Icon name="star" color="yellow.400" mr={2} />
              <Text paddingRight={3} color="gray.600">
                {product.stars}
              </Text>
              <Text fontSize="sm" color="gray.400">
                ({product.num_reviews})
              </Text>
              <Text fontSize="sm" mx={2}>
                ·
              </Text>
              <a
                href={`https://amazon.com/gp/product/${product.product_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text fontSize="sm">{product.product_id}</Text>
              </a>
            </Box>

            <Heading fontSize="md" marginRight={10} color="green.600" mb={2}>
              ${product.price / 100}
            </Heading>
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
                      addZincItem(
                        product.product_id,
                        selectedVariantQuantity,
                        `${product.title.slice(0, 70)}...`,
                        product.image,
                        product.price / 100
                      )
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
              // <Box display="flex">
              //   <Box
              //     display="flex"
              //     alignItems="center"
              //     justifyContent="center"
              //     paddingRight={5}
              //   >
              //     <Box display="flex" paddingRight={5} height={20}>
              //       <Box
              //         display="flex"
              //         alignItems="center"
              //         background="#f4f4f4"
              //         paddingX={5}
              //         borderRadius={2}
              //         boxShadow="0 0 2px rgba(67, 90, 111, 0.3)"
              //       >
              //         <Icon
              //           color="#425A70"
              //           icon="minus"
              //           appearance="minimal"
              //           size={12}
              //           cursor="pointer"
              //           onClick={this.handleQuantityDown}
              //         />

              //         <Text size={300} marginX={9}>
              //           {selectedVariantQuantity}
              //         </Text>

              //         <Icon
              //           color="#425A70"
              //           icon="plus"
              //           appearance="minimal"
              //           size={12}
              //           cursor="pointer"
              //           onClick={this.handleQuantityUp}
              //         />
              //       </Box>
              //     </Box>
              //     <Box height={20}>
              //       <Button
              //         boxShadow="0 0 2px rgba(67, 90, 111, 0.3)"
              //         intent="primary"
              //         height={20}
              //         disabled={atcDisabled}
              //         onClick={() =>
              //           addZincItem(
              //             product.product_id,
              //             selectedVariantQuantity,
              //             `${product.title.slice(0, 70)}...`,
              //             product.image,
              //             product.price / 100
              //           )
              //         }
              //       >
              //         Add to Cart
              //       </Button>
              //     </Box>
              //   </Box>
              // </Box>
            )}
          </Box>
        </Box>
      </>
    );
  }
}

export default AmzProduct;
