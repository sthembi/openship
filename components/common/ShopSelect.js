import { Button, SelectMenu, Heading } from 'evergreen-ui';
import PropTypes from 'prop-types';

const ShopSelect = ({ shops, client, updateClient }) => (
  <SelectMenu
    title="Shops"
    options={shops.map(shop => ({
      label: (
        <Heading size={100} fontWeight={500}>
          {shop.domain.split('.')[0]}
        </Heading>
      ),
      value: shop.domain.split('.')[0],
    }))}
    selected={client}
    onSelect={item => updateClient(item.value)}
  >
    <Button marginTop={5} iconAfter="caret-down">
      <Heading size={100} fontWeight={500}>
        {client || 'Select a shop...'}
      </Heading>
    </Button>
  </SelectMenu>
);
export default ShopSelect;

ShopSelect.propTypes = {
  shops: PropTypes.array,
  client: PropTypes.string,
  updateClient: PropTypes.func,
};
