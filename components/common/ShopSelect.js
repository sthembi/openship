import { Heading, Box } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const ShopSelect = ({ shops, client, updateClient }) => (
  <Box display="flex" flexWrap="wrap">
    {shops.map(shop => (
      <Box
        p={2}
        mr={2}
        mt={2}
        borderRadius={2}
        bg={client === shop.domain.split('.')[0] ? 'blue.50' : 'gray.50'}
        onClick={() => updateClient(shop.domain.split('.')[0])}
        cursor="pointer"
      >
        <Heading
          fontSize="xs"
          fontWeight={500}
          color={client === shop.domain.split('.')[0] ? 'blue.600' : 'gray.500'}
          letterSpacing="wide"
          textTransform="uppercase"
        >
          {shop.domain.split('.')[0]}
        </Heading>
      </Box>
    ))}
  </Box>
);
export default ShopSelect;

ShopSelect.propTypes = {
  shops: PropTypes.array,
  client: PropTypes.string,
  updateClient: PropTypes.func,
};
