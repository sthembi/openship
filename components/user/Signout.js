import React from 'react';
import { Pane, Heading, Icon } from 'evergreen-ui';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () => (
  <Mutation
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {signout => (
      <Pane
        height={30}
        cursor="pointer"
        onClick={() => signout().then(() => (window.location.href = '/'))}
      >
        <Pane display="flex">
          <Pane
            marginRight="-8px"
            marginLeft="13px"
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <Icon
              size={15}
              icon="arrow-left"
              color="#EC4C47"
              marginRight={16}
            />
          </Pane>
          <Heading
            color="#fff"
            size={500}
            fontSize={15}
            overflow="visible"
            textTransform="capitalize"
          >
            Sign Out
          </Heading>
        </Pane>
      </Pane>
    )}
  </Mutation>
);
export default Signout;
