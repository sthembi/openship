import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { Pane, Heading, SearchInput, Spinner } from 'evergreen-ui';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import ShopSelect from '../common/ShopSelect';
import { CardStyle } from '../common/DefaultStyles';
import ProductsItem from './ProductsItem';

const shopProducts = gql`
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
      <Pane display="flex" paddingTop={16} paddingBottom={16}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={700}>Products</Heading>
        </Pane>
      </Pane>

      {client ? (
        <Pane {...CardStyle}>
          <Pane display="flex" padding="1em">
            {/* <Pane width="90px">
            <Pagination
              leftDisabled={!data.shopProducts.pageInfo.hasPreviousPage}
              rightDisabled={!data.shopProducts.pageInfo.hasNextPage}
              onLeft={() => {
                this.setState({
                  beforeCursor: data.shopProducts.edges[0].cursor,
                  afterCursor: null,
                  last: 10,
                  first: null
                });
              }}
              onRight={() => {
                this.setState({
                  afterCursor:
                    data.shopProducts.edges[data.shopProducts.edges.length - 1]
                      .cursor,
                  beforeCursor: null,
                  first: 10,
                  last: null
                });
              }}
            />

            <Heading size={200} marginTop="5px">
              Page {page} of {pages}
            </Heading>

            <Heading size={100}>{count} Orders</Heading>
          </Pane> */}
            <Pane flex={1}>
              <SearchInput
                placeholder="Search"
                width="100%"
                height={36}
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <ShopSelect
                client={client}
                shops={shops}
                updateClient={updateClient}
              />
            </Pane>
          </Pane>
          <Query
            query={shopProducts}
            variables={{
              domain: `${client}.myshopify.com`,
              first,
              last,
              after: afterCursor,
              before: beforeCursor,
              query,
            }}
          >
            {({ data, error, loading }) => {
              if (loading)
                return (
                  <Pane
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100vh"
                  >
                    <Spinner size={80} />
                  </Pane>
                );
              if (error || !data.shopProducts)
                return <h1>Error loading shops: {error}</h1>;
              return (
                <Pane width="100%">
                  {data.shopProducts.edges.map(product => (
                      <ProductsItem client={client} product={product.node} />
                    ))}
                </Pane>
              );
            }}
          </Query>
        </Pane>
      ) : (
        <Pane
          background="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          borderRadius={3}
        >
          <Heading margin="1em" size={600}>
            Your products will appear here after you add a shop.
          </Heading>
        </Pane>
      )}
    </>
  );
}

Products.propTypes = {
  shops: PropTypes.array.isRequired,
};
