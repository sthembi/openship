import { Pane, TextInput, Heading, Text, Spinner, Switch } from 'evergreen-ui';
import PropTypes from 'prop-types';
import DeleteShop from '../common/DeleteShop';

import { CardStyle } from '../common/DefaultStyles';
import WebhookSwitch from './WebhookSwitch';

const ShopListItem = ({ shop }) => (
  <Pane {...CardStyle}>
    <Pane padding={15}>
      <Pane display="flex">
        <Pane marginBottom={6}>
          <Text fontWeight={500} size={500} textTransform="capitalize">
            {shop.name}
          </Text>
          <Heading lineHeight="10px" fontSize="12px" size={100}>
            Name
          </Heading>
        </Pane>

        <DeleteShop id={shop.id} button="Delete" />
      </Pane>
      <Pane>
        <Text fontWeight={500} size={400}>
          {shop.domain}
        </Text>
        <Heading lineHeight="10px" fontSize="10px" size={100}>
          URL
        </Heading>
      </Pane>
    </Pane>

    {/* <Switch marginLeft="auto" /> */}
    <WebhookSwitch domain={shop.domain} accessToken={shop.accessToken} />
  </Pane>
);

export default ShopListItem;

ShopListItem.propTypes = {
  shop: PropTypes.object.isRequired,
};
