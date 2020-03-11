import { useQuery } from '@apollo/react-hooks';
import Router from 'next/router';
import PropTypes from 'prop-types';
import CompletedOrderList from './completedOrderList/CompletedOrderList';
import { ALL_SHOPS_QUERY, shopsQueryVars } from '../shops/ShopList';

function Completed(props) {
  const {
    data: { shops },
    loading,
    error,
  } = useQuery(ALL_SHOPS_QUERY, {
    variables: shopsQueryVars,
  });

  function formatNote(noteObj) {
    return noteObj.split('||').map(a => {
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

  return <>{error || !shops ? null : <CompletedOrderList shops={shops} />}</>;
}

export default Completed;

Completed.propTypes = {
  name: PropTypes.string,
  lineItems: PropTypes.array,
  shippingAddress: PropTypes.string,
  fulfillments: PropTypes.string,
  note: PropTypes.string,
  client: PropTypes.string,
};
