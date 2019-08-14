import PropTypes from 'prop-types';
import Order from '../components/order/Order';

const OrderPage = ({ query }) => <Order {...query} />;

export default OrderPage;

OrderPage.propTypes = {
  query: PropTypes.object.isRequired,
};
