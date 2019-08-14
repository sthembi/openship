import { Pane } from 'evergreen-ui';
import PropTypes from 'prop-types';
import Shop from '../components/shop/Shop';

const shopPage = ({ query }) => (
  <Pane marginX="-2em" height="100%">
    <Shop shop={query.shop} />
  </Pane>
);

export default shopPage;

shopPage.propTypes = {
  query: PropTypes.object.isRequired,
};
