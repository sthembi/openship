import React, { useState, useEffect } from 'react';
import MktProduct from '../MarketplaceSearch/MktProduct';

function ShopifySearch({
  addCustomItem,
  atcDisabled,
  searchEntry,
  token,
  apiKey,
  url,
}) {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function findItems() {
      const query = `
      query AllOrdersQuery($query: String)
      {
        products(query: $query first:5) 
        {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              title
              options {
                id
                name
                values
              }
              variants(first: 250) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    id
                    title
                    selectedOptions {
                      name
                      value
                    }
                    image {
                      src
                    }
                    price
                  }
                }
              }
              images(first: 250) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    src
                  }
                }
              }
            }
          }
          }
        }
      `;

      const variables = {
        query: searchEntry,
      };

      const items = await fetch(`https://${url}.myshopify.com/api/graphql`, {
        method: 'POST',
        body: JSON.stringify({ query, variables }),
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': apiKey,
        },
      })
        .then(res => res.json())
        .then(json => setResults(json.data.products.edges));
    }

    searchEntry && findItems();
  }, [apiKey, searchEntry, url]);

  return results.map(product => (
    <MktProduct
      addVariantToCart={(a, b) => addCustomItem(a, b)}
      checkout={() => toaster.success(`checkout`)}
      key={product.node.id.toString()}
      product={product.node}
      client="Marketplace"
      atcDisabled={atcDisabled}
    />
  ));
}

export default ShopifySearch;
