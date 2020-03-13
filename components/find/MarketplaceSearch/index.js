import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { Box, Spinner, Heading, Button } from '@chakra-ui/core';
import { gql } from 'apollo-boost';
import MktProduct from './MktProduct';
import { CURRENT_USER_QUERY } from '../../user/User';

const getItemsQuery = gql`
  query getItems(
    $search: String
    $limit: Int
    $sort: String
    $pageNum: Int
    $exclude: Json
    $include: Json
    $priceCurrency: String
    $price: String
    $itemLocationCountry: String
  ) {
    getItems(
      search: $search
      limit: $limit
      sort: $sort
      pageNum: $pageNum
      exclude: $exclude
      include: $include
      priceCurrency: $priceCurrency
      price: $price
      itemLocationCountry: $itemLocationCountry
    ) {
      item
    }
  }
`;

function MarketplaceSearch({
  search,
  limit,
  sort,
  pageNum,
  exclude,
  include,
  priceCurrency,
  price,
  itemLocationCountry,
  atcDisabled,
  addMPItem,
}) {
  const {
    data: { me },
  } = useQuery(CURRENT_USER_QUERY);

  const allItems = useQuery(getItemsQuery, {
    variables: {
      search,
      limit,
      sort: sort.value,
      pageNum,
      exclude,
      include,
      priceCurrency,
      price,
      itemLocationCountry,
    },
  });

  const { data, error, loading } = allItems;

  if (me && (!me.buyer || !me.buyer.status)) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="200px"
      >
        <Link href="/settings">
          <a>
            <Button background="#DDEBF7" borderRadius={3}>
              <Heading fontSize="lg" fontWeight={700} color="#1070CA">
                GET MARKETPLACE BETA ACCESS
              </Heading>
            </Button>
          </a>
        </Link>
      </Box>
    );
  }

  if (loading)
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    );
  if (error || !data.getItems.item || data.getItems.item.length < 1)
    return (
      <Box paddingX="1em" paddingY="1em">
        <Box
          background="tint2"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          borderRadius={3}
        >
          <Heading margin="1em" size={600}>
            No items found.
          </Heading>
        </Box>
      </Box>
    );
  return (
    <>
      {data.getItems.item.data.products.edges.map(product => (
        <MktProduct
          addVariantToCart={(a, b) => addMPItem(a, b)}
          checkout={() => toaster.success(`checkout`)}
          key={product.node.id.toString()}
          product={product.node}
          client="Marketplace"
          atcDisabled={atcDisabled}
        />
      ))}
    </>
  );
}

export default MarketplaceSearch;
