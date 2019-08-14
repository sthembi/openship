import React, { useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Pane, Spinner } from 'evergreen-ui';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './User';
import Userform from './Userform';
import Logo from '../Logo/Logo';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      name
    }
  }
`;

function Reset({ resetToken }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (!resetToken) {
      Router.push('/');
    }
  });

  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      background="tint1"
    >
      {resetToken ? (
        <Pane margin={16}>
          <Pane width={180} marginX="15px" marginBottom="15px">
            <Logo color="#162b4c" />
          </Pane>
          <Mutation
            mutation={RESET_MUTATION}
            variables={{
              resetToken,
              password,
              confirmPassword,
            }}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            onCompleted={() => {
              Router.push('/');
            }}
          >
            {(reset, { error, loading, called }) => (
              <Userform
                title="Please enter a new password"
                handleToggleClick={() => {
                  Router.push('/');
                }}
                buttonTitle="Confirm"
                buttonColor="#47B881"
                error={error}
                loading={loading}
                buttonDisabled={!password || !confirmPassword}
                fields={[
                  {
                    label: 'Password',
                    value: password,
                    onChange: setPassword,
                    icon: 'lock',
                  },
                  {
                    label: 'Confirm Password',
                    value: confirmPassword,
                    onChange: setConfirmPassword,
                    icon: 'lock',
                    type: 'password',
                  },
                ]}
                // bottomText="Already have an account?"
                bottomLinkText="Back to Sign In"
                onSubmit={async e => {
                  e.preventDefault();
                  await reset();
                  setPassword('');
                  setConfirmPassword('');
                }}
              />
            )}
          </Mutation>
        </Pane>
      ) : (
        <Spinner />
      )}
      ;
    </Pane>
  );
}

export default Reset;

Reset.propTypes = {
  resetToken: PropTypes.string,
};
