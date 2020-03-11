import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import Userform from './Userform';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

function Signup({ formChange }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [signup, { error, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: { name, password, email },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <Userform
      title="Create an account"
      handleToggleClick={() => formChange()}
      buttonTitle="Sign Up"
      error={error}
      loading={loading}
      buttonDisabled={!email || !password || !name}
      fields={[
        { label: 'Name', value: name, onChange: setName, icon: 'user' },
        {
          label: 'Email',
          value: email,
          onChange: setEmail,
          icon: 'envelope',
        },

        {
          label: 'Password',
          value: password,
          onChange: setPassword,
          icon: 'lock',
        },
      ]}
      bottomText="Already have an account?"
      bottomLinkText="Sign In"
      onSubmit={async e => {
        e.preventDefault();
        await signup();
        setName('');
        setEmail('');
        setPassword('');
      }}
    />
  );
}

export default Signup;

Signup.propTypes = {
  formChange: PropTypes.func,
};
