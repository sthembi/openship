import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/core';
import { ALL_SHOPS_QUERY, shopsQueryVars } from '../shops/ShopList';

const CREATE_SHOP_MUTATION = gql`
  mutation deleteShop($id: ID!) {
    deleteShop(id: $id) {
      id
    }
  }
`;

const DeleteShop = ({ id, button }) => {
  const [deleteShop] = useMutation(CREATE_SHOP_MUTATION, {
    refetchQueries: [{ query: ALL_SHOPS_QUERY, variables: shopsQueryVars }],
  });

  return (
    <Text
      fontSize="sm"
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
  );
};

export default DeleteShop;

DeleteShop.propTypes = {
  id: PropTypes.string,
  button: PropTypes.string,
};
