import { Query } from 'react-apollo';
import { SideSheet, Pane } from 'evergreen-ui';
import Router from 'next/router';
import PropTypes from 'prop-types';
import OrderDetails from '../common/OrderDetails';
import CompletedOrderList from './completedOrderList/CompletedOrderList';
import { shopsQuery, shopsQueryVars } from '../shops/ShopList';

function Completed(props) {
  function onClose() {
    Router.push('/completed');
  }

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

  // function formatProps(arg) {
  //   arg.lineItems = JSON.parse(arg.lineItems);
  //   arg.fulfillments = JSON.parse(arg.fulfillments);
  //   return arg;
  // }

  return (
    <>
      {props.name && (
        <Pane background="tint1">
          <SideSheet
            isShown
            onCloseComplete={onClose}
            containerProps={{
              display: 'flex',
              flex: '1',
              flexDirection: 'column',
              maxWidth: '100vw',
            }}
          >
            <Pane flex="1" overflowY="scroll" background="tint1">
              <OrderDetails
                {...props}
                lineItems={JSON.parse(props.lineItems)}
                shippingAddress={JSON.parse(props.shippingAddress)}
                fulfillments={JSON.parse(props.fulfillments)}
                // note={note && formatNote(note)}
                store={props.client}
                backgroundColor="white"
              />
            </Pane>
          </SideSheet>
        </Pane>
      )}
      <Query query={shopsQuery} variables={shopsQueryVars}>
        {({ data, error, loading }) => {
          if (error || !data.shops) return null;
          const { shops } = data;
          return <CompletedOrderList shops={shops} />;
        }}
      </Query>
    </>
  );
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
