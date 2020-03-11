import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Box, Heading } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { front, prodFront } from '../../config';
import Playground from './playground';
import Tracking from './apps/tracking';

export const SHOP_QUERY = gql`
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

export default function Shop({ shop }) {
  const { data, loading, error } = useQuery(SHOP_QUERY, {
    variables: { domain: shop },
  });

  if (loading) return <p>Loading...</p>;
  if (!data) return <h1>This shop is not added to your account.</h1>;

  if (error || !data.shop) return <h1>Error loading shops: {error}</h1>;

  const {
    shop: { name, accessToken },
  } = data;

  return (
    <Box width="100%" borderWidth="0">
      <Box paddingY={4}>
        {/* <Box alignItems="center" display="flex" marginBottom={2}>
          <Heading size={700}>{name}</Heading>
        </Box> */}
        <Heading fontSize="2xl" color="text" fontWeight={500}>
          {name}
        </Heading>
        <Heading fontSize="lg" my={4} fontWeight={500}>
          Apps
        </Heading>
        <Box display="flex">
          <Tracking
            url={`${
              process.env.NODE_ENV === 'development' ? front : prodFront
            }/${accessToken}/graphql`}
          />
        </Box>
        <Heading fontSize="lg" marginTop={25} fontWeight={500}>
          Playground
        </Heading>
      </Box>

      <Playground
        accessToken={accessToken}
        shop={shop}
        url={`${
          process.env.NODE_ENV === 'development' ? front : prodFront
        }/${accessToken}/graphql`}
      />
    </Box>
  );
}

Shop.propTypes = {
  shop: PropTypes.string.isRequired,
};
