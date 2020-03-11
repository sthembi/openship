import { Box } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import Shop from '../components/shop/Shop';

const shopPage = ({ query }) => <Shop shop={query.shop} />;

export default shopPage;

shopPage.propTypes = {
  query: PropTypes.object.isRequired,
};
