import React, { Component } from 'react';
import { Pane, Heading, Text, Avatar, Icon } from 'evergreen-ui';
import PropTypes from 'prop-types';
import VariantSelector from './VariantSelector';
import Button from '../../common/Button';

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
    const { product, addZincItem, atcDisabled } = this.props;
    const {
      selectedVariantImage,
      selectedVariantQuantity,
      selectedVariant,
    } = this.state;

    return (
      <>
        <Pane
          display="flex"
          alignItems="center"
          borderTop="0.1rem solid #dfe3e8"
        >
          <Pane padding={15}>
            {product.image && (
              <Avatar
                src={product.image}
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
            <Heading size={500}>{`${product.title.slice(0, 70)}...`}</Heading>
            <Pane color="#F7D154" display="flex" alignItems="center">
              <Icon icon="star" size={15} paddingRight={3} />
              <Text paddingRight={12} lineHeight="unset">
                {product.stars}
              </Text>
              <Text size={300} color="muted" lineHeight="unset">
                ({product.num_reviews})
              </Text>
            </Pane>
            <a
              href={`https://amazon.com/gp/product/${product.product_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text size={300} lineHeight="12px">
                {product.product_id}
              </Text>
            </a>
            <Heading size={400} marginRight={10} color="green">
              ${product.price / 100}
            </Heading>
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
                      disabled={atcDisabled}
                      onClick={() =>
                        addZincItem(
                          product.product_id,
                          selectedVariantQuantity,
                          `${product.title.slice(0, 70)}...`,
                          product.image,
                          product.price / 100
                        )
                      }
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

export default AmzProduct;
