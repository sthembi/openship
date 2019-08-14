import { useState } from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import { toaster, Pane, Text } from 'evergreen-ui';
import ShopList, { shopsQuery, shopsQueryVars } from '../shops/ShopList';
import Button from './Button';
import User from '../user/User';

const CREATE_SHOP_MUTATION = gql`
  mutation deleteShop($id: ID!) {
    deleteShop(id: $id) {
      id
    }
  }
`;

const DeleteShop = ({ id, button }) => (
  <Mutation
    mutation={CREATE_SHOP_MUTATION}
    refetchQueries={[{ query: shopsQuery, variables: shopsQueryVars }]}
  >
    {(deleteShop, { error, loading }) => (
      // <Button
      //   intent="primary"
      //   height={20}
      // onClick={async () => {
      //   await deleteShop({
      //     variables: { id },
      //   });
      // }}
      //   marginRight={5}
      // >
      //   Delete
      // </Button>

      <Text
        size={400}
        fontWeight={500}
        marginLeft="auto"
        color="#ea645f"
        className="hover"
        cursor="pointer"
        onClick={async () => {
          await deleteShop({
            variables: { id },
          });
        }}
      >
        {button}
      </Text>
    )}
  </Mutation>
);

export default DeleteShop;

DeleteShop.propTypes = {
  id: PropTypes.string,
  button: PropTypes.string,
};
