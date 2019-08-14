import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
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

  return (
    <Mutation
      mutation={SIGNUP_MUTATION}
      variables={{ name, password, email }}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(signup, { error, loading }) => (
        <Userform
          title="Create an account"
          handleToggleClick={() => formChange()}
          buttonTitle="Sign Up"
          buttonColor="#47B881"
          error={error}
          loading={loading}
          buttonDisabled={!email || !password || !name}
          fields={[
            { label: 'Name', value: name, onChange: setName, icon: 'person' },
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
      )}
    </Mutation>
  );
}

export default Signup;

Signup.propTypes = {
  formChange: PropTypes.func,
};
