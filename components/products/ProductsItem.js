import { Box, Heading, Text } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import AddProduct from '../common/AddProduct';

const ProductsItem = ({ product, client }) => (
  <Box display="flex" padding={15} borderTop="0.1rem solid #dfe3e8">
    <Box marginTop="auto">
      <Box
        background="white"
        border="1px solid #e8e9ea"
        borderRadius={3}
        height="70px"
        width="70px"
      >
        <Box as="img" src={product.images.edges[0].node.originalSrc} />
      </Box>
    </Box>
    <Box marginLeft={3} display="block">
      <Heading fontSize="md" color="text" fontWeight={500}>
        {product.title}
      </Heading>
      <Text fontSize="sm" marginRight={10} color="gray.600">
        {product.id.split('/').pop()}
      </Text>
      <Heading fontSize="sm" marginRight={10} color="green.600">
        ${product.priceRange.minVariantPrice.amount / 100}
      </Heading>
    </Box>
    <Box
      display="flex"
      marginLeft="auto"
      marginBottom="auto"
      alignItems="center"
    >
      <Heading
        fontSize="xs"
        fontWeight={500}
        letterSpacing="wide"
        textTransform="uppercase"
        color="gray.500"
        mx={2}
      >
        {client}
      </Heading>
      <AddProduct product={product} client={client} />
    </Box>
  </Box>
);

export default ProductsItem;

ProductsItem.propTypes = {
  product: PropTypes.object.isRequired,
  client: PropTypes.string,
};
