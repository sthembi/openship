import { Pane, Heading, Text, Avatar } from 'evergreen-ui';
import PropTypes from 'prop-types';

import AddProduct from '../common/AddProduct';

const ProductsItem = ({ product, client }) => (
  <Pane display="flex" padding={15} borderTop="0.1rem solid #dfe3e8">
    <Pane marginTop="auto">
      <Avatar
        src={product.images.edges[0].node.originalSrc}
        borderStyle="solid"
        borderWidth="1px"
        borderRadius={3}
        borderColor="#e8e9ea"
        size={50}
      />
    </Pane>
    <Pane marginLeft={10} display="block">
      <Heading size={500}>{product.title}</Heading>
      <Text size={400} marginRight={10}>
        {product.id.split('/').pop()}
      </Text>
      <Heading size={400} marginRight={10} color="green">
        ${product.priceRange.minVariantPrice.amount}
      </Heading>
    </Pane>
    <Pane
      display="flex"
      marginLeft="auto"
      marginBottom="auto"
      alignItems="center"
    >
      <Heading size={100} lineHeight="24px" fontWeight={500} marginRight={10}>
        {client}
      </Heading>
      <Pane height={20}>
        <AddProduct product={product} client={client} />
      </Pane>
    </Pane>
  </Pane>
);

export default ProductsItem;

ProductsItem.propTypes = {
  product: PropTypes.object.isRequired,
  client: PropTypes.string,
};
