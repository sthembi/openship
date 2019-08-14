import { useState } from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import { toaster } from 'evergreen-ui';
import Button from './Button';
import User from '../user/User';

const CREATE_PRODUCTS_MUTATION = gql`
  mutation createProducts(
    $title: String!
    $descriptionHtml: String
    $productType: String
    $vendor: String
    $images: Json
    $options: Json
    $variants: Json
    $client: String
  ) {
    createProducts(
      title: $title
      descriptionHtml: $descriptionHtml
      productType: $productType
      vendor: $vendor
      images: $images
      options: $options
      variants: $variants
      shop: $client
    ) {
      product
      shop
      userErrors
    }
  }
`;

const AddProduct = ({ product, client }) => {
  const [inventory, setInventory] = useState(0);

  return (
    <User>
      {({ data: { me } }) => {
        if (!me) return null;
        if (me.seller && me.seller.status) {
          return (
            <Mutation mutation={CREATE_PRODUCTS_MUTATION}>
              {(createProducts, { error, loading }) => (
                <Button
                  intent="primary"
                  height={20}
                  onClick={async () => {
                    await createProducts({
                      variables: { ...product, client },
                    });
                    toaster.success(
                      `${product.title} has been added to the marketplace`
                    );
                  }}
                  marginRight={5}
                >
                  Sync
                </Button>
              )}
            </Mutation>
          );
        }
        return null;
      }}
    </User>
  );
};

export default AddProduct;

AddProduct.propTypes = {
  product: PropTypes.object,
  client: PropTypes.string,
};
