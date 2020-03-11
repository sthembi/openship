import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { useToast, Button } from '@chakra-ui/core';
import { CURRENT_USER_QUERY } from '../user/User';

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
  const {
    data: { me },
  } = useQuery(CURRENT_USER_QUERY);
  const [createProducts] = useMutation(CREATE_PRODUCTS_MUTATION);

  const toast = useToast();
  if (!me) return null;
  if (me.seller && me.seller.status) {
    return (
      <Button
        background="#DDEBF7"
        color="#1070CA"
        borderRadius={3}
        marginRight={1}
        px={2}
        height={5}
        textTransform="uppercase"
        letterSpacing="wide"
        fontSize="xs"
        fontWeight={700}
        onClick={async () => {
          await createProducts({
            variables: { ...product, client },
          });
          toast({
            position: 'top-right',
            title: 'Product has been added.',
            description: `${product.title}`,
            status: 'success',
            isClosable: true,
          });
        }}
      >
        Sync
      </Button>
    );
  }
  return null;
};

export default AddProduct;

AddProduct.propTypes = {
  product: PropTypes.object,
  client: PropTypes.string,
};
