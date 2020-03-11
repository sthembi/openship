import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import {
  Box,
  Heading,
  Spinner,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import ShopSelect from '../common/ShopSelect';
import { CardStyle } from '../common/DefaultStyles';
import ProductsItem from './ProductsItem';

const PRODUCTS_QUERY = gql`
  query shopProducts(
    $domain: String!
    $first: Int
    $after: String
    $before: String
    $last: Int
    $query: String
  ) {
    shopProducts(
      domain: $domain
      first: $first
      after: $after
      before: $before
      last: $last
      query: $query
    ) {
      pageInfo
      edges
    }
  }
`;

export default function Products({ shops }) {
  const [client, setClient] = useState(
    shops.length && shops[0].domain.split('.')[0]
  );
  const [afterCursor, setAfterCursor] = useState(null);
  const [beforeCursor, setBeforeCursor] = useState(null);
  const [query, setQuery] = useState('');
  const [first, setFirst] = useState(10);
  const [last, setLast] = useState(null);
  const [searchBar, setSearchBar] = useState('');

  const { data, loading, error } = useQuery(PRODUCTS_QUERY, {
    variables: {
      domain: `${client}.myshopify.com`,
      first,
      last,
      after: afterCursor,
      before: beforeCursor,
      query,
    },
  });

  function updateClient(arg) {
    setClient(arg);
    setAfterCursor(null);
    setBeforeCursor(null);
    setFirst(10);
    setLast(null);
  }

  function onPrevious(arg) {
    setAfterCursor(null);
    setBeforeCursor(arg);
    setFirst(null);
    setLast(10);
  }

  function onNext(arg) {
    setAfterCursor(arg);
    setBeforeCursor(null);
    setFirst(10);
    setLast(null);
  }

  return (
    <>
      <Box display="flex" py={4}>
        <Box flex={1} alignItems="center" display="flex">
          <Heading fontSize="2xl" color="text" fontWeight={500}>
            Products
          </Heading>
        </Box>
      </Box>

      {client ? (
        <Box {...CardStyle}>
          <Box display="flex" padding="1em">
            <Box flex={1}>
              <InputGroup width="100%" borderColor="gray.300">
                <InputLeftElement
                  children={<Icon name="search" color="gray.300" />}
                />
                <Input
                  value={searchBar}
                  onChange={e => {
                    setSearchBar(e.target.value);
                  }}
                  onKeyPress={e => {
                    if (e.key === 'Enter') {
                      setQuery(e.target.value);
                    }
                  }}
                  placeholder="Search"
                />
              </InputGroup>
              <ShopSelect
                client={client}
                shops={shops}
                updateClient={updateClient}
              />
            </Box>
          </Box>
          {(() => {
            if (loading)
              return (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100vh"
                >
                  <Spinner size={80} />
                </Box>
              );
            if (error || !data.shopProducts)
              return <h1>Error loading shops: {error}</h1>;
            return (
              <Box width="100%">
                {data.shopProducts.edges.map(product => (
                  <ProductsItem client={client} product={product.node} />
                ))}
              </Box>
            );
          })()}
        </Box>
      ) : (
        <Box
          backgroundColor="gray.100"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading margin="1em" fontSize="xl" fontWeight={600} color="text">
            Your products will appear here after you add a shop.
          </Heading>
        </Box>
      )}
    </>
  );
}

Products.propTypes = {
  shops: PropTypes.array.isRequired,
};
