import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Userform from './Userform';

const REUQEST_RESET_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

function RequestReset({ formChange }) {
  const [email, setEmail] = useState('');

  const [reset, { error, loading, called }] = useMutation(
    REUQEST_RESET_MUTATION,
    {
      variables: { email },
    }
  );

  return (
    <Userform
      title="Please enter your email and we'll send a link to reset your password"
      handleToggleClick={() => formChange()}
      buttonTitle="Send Reset Link"
      buttonColor="#14B5D0"
      error={error}
      loading={loading}
      buttonDisabled={!email}
      fields={[
        {
          label: 'Email',
          value: email,
          onChange: setEmail,
          icon: 'envelope',
        },
      ]}
      bottomLinkText="Back to sign in"
      onSubmit={async e => {
        e.preventDefault();
        await reset();
        setEmail('');
      }}
      success={called}
    />
  );
}

export default RequestReset;

RequestReset.propTypes = {
  formChange: PropTypes.func.isRequired,
};
