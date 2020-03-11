import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Box, Spinner } from '@chakra-ui/core';
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

  const [reset, { error, loading, called }] = useMutation(RESET_MUTATION, {
    variables: {
      resetToken,
      password,
      confirmPassword,
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    onCompleted: () => {
      Router.push('/');
    },
  });

  useEffect(() => {
    if (!resetToken) {
      Router.push('/');
    }
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="100vh"
      background="#F9F9FB"
    >
      {resetToken ? (
        <Box
          boxShadow="0 0 1px rgba(67,90,111,.47), 0 2px 4px -2px rgba(67,90,111,.3)"
          margin={2}
          background="white"
          p={4}
          borderRadius={3}
        >
          <Box width={180} marginBottom="15px">
            <Logo color="#162b4c" />
          </Box>

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
        </Box>
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </Box>
  );
}

export default Reset;

Reset.propTypes = {
  resetToken: PropTypes.string,
};
