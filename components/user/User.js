import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      permissions
      url
      zincToken
      buyer {
        status
        questions
        account
      }
      seller {
        status
        questions
        account
      }
    }
  }
`;

export { CURRENT_USER_QUERY };
