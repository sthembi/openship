import { Query } from 'react-apollo';
import { Pane, Spinner } from 'evergreen-ui';
import PropTypes from 'prop-types';
import OrderDetails from '../common/OrderDetails';
import { shopOrders } from '../completed/completedOrderList/CompletedOrderList';

function Order({ store, name }) {
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

  return (
    <>
      <Query
        query={shopOrders}
        variables={{
          domain: `${store}.myshopify.com`,
          query: name,
          first: 10,
        }}
      >
        {({ data, error, loading }) => {
          if (loading)
            return (
              <Pane
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100vh"
              >
                <Spinner size={80} />
              </Pane>
            );
          if (error || !data.shopOrders) return <div>{error}</div>;
          const { note } = data.shopOrders.edges[0].node;

          return (
            <Pane maxWidth="45em">
              <OrderDetails
                {...data.shopOrders.edges[0].node}
                // note={note && formatNote(note)}
                store={store}
              />
            </Pane>
          );
        }}
      </Query>
    </>
  );
}

export default Order;

Order.propTypes = {
  store: PropTypes.string,
  name: PropTypes.string,
};
