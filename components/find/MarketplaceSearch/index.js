import React from "react";
import { Query } from "react-apollo";
import { Pane, Heading, Spinner } from "evergreen-ui";
import { gql } from "apollo-boost";
import MktProduct from "./MktProduct";

const getItems = gql`
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
  atcDisabled
}) {
  return (
    <Query
      query={getItems}
      variables={{
        search,
        limit,
        sort: sort.value,
        pageNum,
        exclude,
        include,
        priceCurrency,
        price,
        itemLocationCountry
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
        if (error || !data.getItems.item || data.getItems.item.length < 1)
          return (
            <Pane paddingX="1em" paddingY="1em">
              <Pane
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
              </Pane>
            </Pane>
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
      }}
    </Query>
  );
}

export default MarketplaceSearch;
