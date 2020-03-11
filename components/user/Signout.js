import React from 'react';
import { Box, Heading, Icon } from '@chakra-ui/core';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () => {
  const [signout, { error, loading }] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <Box
      height={30}
      cursor="pointer"
      onClick={() => signout().then(() => (window.location.href = '/'))}
    >
      <Box display="flex">
        <Box
          marginLeft="13px"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Icon size={5} name="arrow-forward" color="#EC4C47" />
        </Box>
        <Heading
          ml={2}
          color="#fff"
          fontSize={15}
          overflow="visible"
          textTransform="capitalize"
        >
          Sign Out
        </Heading>
      </Box>
    </Box>
  );
};
export default Signout;
