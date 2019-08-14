import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Pane, Heading } from 'evergreen-ui';
import PropTypes from 'prop-types';
import { front, prodFront } from '../../config';
import Playground from './playground';
import Tracking from './apps/tracking';

export const shopQuery = gql`
  query($domain: String!) {
    shop(domain: $domain) {
      name
      accessToken
      settings
      user {
        id
      }
    }
  }
`;

export const shopQueryVars = {
  skip: 0,
  first: 10,
};

// function postRequest(url, data) {
//   return fetch(url, {
//     credentials: 'same-origin', // 'include', default: 'omit'
//     method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
//     body: JSON.stringify(data), // Use correct payload (matching 'Content-Type')
//     headers: { 'Content-Type': 'application/json' },
//   })
//     .then(response => response.json())
//     .catch(error => console.error(error));
// }

export default function Shop({ shop }) {
  return (
    <Query query={shopQuery} variables={{ domain: shop }}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (!data) return <h1>This shop is not added to your account.</h1>;

        if (error || !data.shop) return <h1>Error loading shops: {error}</h1>;

        const {
          shop: { name, accessToken },
        } = data; /* eslint-disable*/
        // postRequest(
        //   `${
        //     process.env.NODE_ENV === 'development' ? front : prodFront
        //   }/_shopify`,
        //   { shop }
        // );

        return (
          <Pane width="100%" marginBottom="-2em" borderWidth="0">
            <Pane paddingY={16} paddingX="2rem">
              <Pane alignItems="center" display="flex" marginBottom={15}>
                <Heading size={700}>{name}</Heading>
              </Pane>
              <Heading size={500} marginBottom={15}>
                Apps
              </Heading>
              <Pane display="flex">
                <Tracking
                  url={`${
                    process.env.NODE_ENV === "development" ? front : prodFront
                  }/${accessToken}/graphql`}
                />
              </Pane>
              <Heading size={500} marginTop={25}>
                Playground
              </Heading>
            </Pane>

            <Playground
              accessToken={accessToken}
              shop={shop}
              url={`${
                process.env.NODE_ENV === "development" ? front : prodFront
              }/${accessToken}/graphql`}
            />
          </Pane>
        );
      }}
    </Query>
  );
}

Shop.propTypes = {
  shop: PropTypes.string.isRequired
};
