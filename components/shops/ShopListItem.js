import { Box, Heading, Text } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import DeleteShop from '../common/DeleteShop';
import { CardStyle } from '../common/DefaultStyles';
import WebhookSwitch from './WebhookSwitch';

const ShopListItem = ({ shop }) => (
  <Box {...CardStyle}>
    <Box padding={15}>
      <Box display="flex">
        <Box marginBottom={3}>
          <Text
            fontWeight={500}
            fontSize="lg"
            textTransform="capitalize"
            color="text"
          >
            {shop.name}
          </Text>
          <Heading
            fontSize="sm"
            textTransform="uppercase"
            color="gray.500"
            fontWeight={400}
          >
            Name
          </Heading>
        </Box>

        <DeleteShop id={shop.id} button="Delete" />
      </Box>
      <Box>
        <Text fontWeight={500} fontSize="md" color="text">
          {shop.domain}
        </Text>
        <Heading
          fontSize="xs"
          textTransform="uppercase"
          color="gray.500"
          fontWeight={400}
        >
          URL
        </Heading>
      </Box>
    </Box>

    <WebhookSwitch domain={shop.domain} accessToken={shop.accessToken} />
  </Box>
);

export default ShopListItem;

ShopListItem.propTypes = {
  shop: PropTypes.object.isRequired,
};
