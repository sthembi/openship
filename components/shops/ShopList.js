import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Pane, Heading, Popover, TextInputField } from 'evergreen-ui';
import ShopListItem from './ShopListItem';
import { CardStyle } from '../common/DefaultStyles';
import Button from '../common/Button';

export const shopsQuery = gql`
  query($first: Int!, $skip: Int!) {
    shops(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      domain
      accessToken
      createdAt
      name
      settings
    }
  }
`;

export const shopsQueryVars = {
  skip: 0,
  first: 10,
};

export default function ShopList() {
  return (
    <>
      <Pane display="flex" paddingTop={16} paddingBottom={16}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={700}>Shops</Heading>
        </Pane>
        <Pane>
          <Popover
            content={
              <Pane
                width={300}
                display="flex"
                alignItems="left"
                justifyContent="center"
                flexDirection="column"
                padding={15}
              >
                <form
                  method="GET"
                  action="/shopify/auth"
                  style={{ width: '100%' }}
                >
                  <TextInputField label="Shop Name" marginBottom="10px" />
                  <TextInputField
                    label="Shop URL"
                    marginBottom="10px"
                    hint="Must end in .myshopify.com"
                    id="shop"
                    name="shop"
                  />

                  <Button
                    width="100%"
                    justifyContent="center"
                    appearance="primary"
                    intent="success"
                    fontSize="12px"
                    paddingY={3}
                  >
                    Go to Shopify
                  </Button>
                </form>
              </Pane>
            }
          >
            <Pane>
              <Button intent="primary">Add Shop</Button>
            </Pane>
          </Popover>
        </Pane>
      </Pane>
      <Query query={shopsQuery} variables={shopsQueryVars}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error || !data.shops)
            return <h1>Error loading shops: {error}</h1>;
          return (
            <Pane
              display="flex"
              width="calc(100% + 20px)"
              flexWrap="wrap"
              marginX="-10px"
            >
              {data.shops.map(shop => (
                <Pane flex={1} padding={10} key={shop.id}>
                  <ShopListItem shop={shop} />
                </Pane>
              ))}
            </Pane>
          );
        }}
      </Query>
    </>
  );
}
