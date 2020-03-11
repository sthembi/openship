import { Box, Spinner } from '@chakra-ui/core';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import OrderDetails from '../common/OrderDetails';
import { SHOP_ORDERS_QUERY } from '../completed/completedOrderList/CompletedOrderList';

function Order({ store, name }) {
  const { data, error, loading } = useQuery(SHOP_ORDERS_QUERY, {
    variables: {
      domain: `${store}.myshopify.com`,
      query: name,
      first: 10,
    },
  });

  function formatNote(note) {
    if (!note.includes('Walmart')) {
      return note.split('||').map(a => {
        const obj = {};

        a.split(',').forEach(b => {
          obj[b.split(':')[0].trim()] = b.split(':')[1].trim();
        });

        obj.lineID = obj.lineID.split('|').map(c => parseFloat(c));
        obj.marketID = obj.marketID;
        obj.transID = parseFloat(obj.transID);

        return obj;
      });
    }
    return null;
  }

  if (loading)
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Spinner size={80} />
      </Box>
    );
  if (error || !data.shopOrders) return <div>{error}</div>;
  const { note } = data.shopOrders.edges[0].node;

  return (
    <Box maxWidth="45em">
      <OrderDetails
        {...data.shopOrders.edges[0].node}
        // note={note && formatNote(note)}
        store={store}
      />
    </Box>
  );
}

export default Order;

Order.propTypes = {
  store: PropTypes.string,
  name: PropTypes.string,
};
