import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  Box,
  Heading,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Text,
} from '@chakra-ui/core';
import ShopListItem from './ShopListItem';

export const ALL_SHOPS_QUERY = gql`
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
  const { data, loading, error } = useQuery(ALL_SHOPS_QUERY, {
    variables: shopsQueryVars,
  });

  return (
    <>
      <Box display="flex" py={4}>
        <Heading fontSize="2xl" color="text" fontWeight={500}>
          Shops
        </Heading>
        <Box ml="auto">
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Button
                background="#DDEBF7"
                color="#1070CA"
                borderRadius={3}
                marginRight={1}
                px={2}
                height={5}
                textTransform="uppercase"
                letterSpacing="wide"
                fontSize="xs"
                fontWeight={700}
              >
                Add Shop
              </Button>
            </PopoverTrigger>
            <PopoverContent zIndex={4}>
              <Box
                width="100%"
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
                  <Text fontSize="sm" color="gray.600" mb={1} fontWeight={500}>
                    Shop Name
                  </Text>
                  <Input label="Shop Name" mb={2} />

                  <Text fontSize="sm" color="gray.600" mb={1} fontWeight={500}>
                    Shop URL
                  </Text>
                  <Input label="Shop URL" mb={1} id="shop" name="shop" />
                  <Text fontSize="xs" color="gray.500" mb={1}>
                    Must end in .myshopify.com
                  </Text>

                  <Button
                    variantColor="green"
                    variant="ghost"
                    backgroundColor="green.50"
                    borderRadius={3}
                    marginRight={1}
                    px={3}
                    height={8}
                    width="100%"
                  >
                    <Heading
                      fontSize="sm"
                      fontWeight={700}
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      Add Shop
                    </Heading>
                  </Button>
                </form>
              </Box>
            </PopoverContent>
          </Popover>
        </Box>
      </Box>
      {(() => {
        if (loading) return <p>Loading...</p>;
        if (error || !data.shops) return <h1>Error loading shops: {error}</h1>;
        return (
          <Box
            display="flex"
            width="calc(100% + 20px)"
            flexWrap="wrap"
            marginX="-10px"
          >
            {data.shops.map(shop => (
              <Box flex={1} padding={3} key={shop.id}>
                <ShopListItem shop={shop} />
              </Box>
            ))}
          </Box>
        );
      })()}
    </>
  );
}
