import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  Icon,
  Switch,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/core';

import ShopList, {
  ALL_SHOPS_QUERY,
  shopsQueryVars,
} from '../components/shops/ShopList';

const CREATE_SHOP_MUTATION = gql`
  mutation CREATE_SHOP_MUTATION(
    $domain: String!
    $accessToken: String!
    $name: String!
  ) {
    upsertShop(accessToken: $accessToken, domain: $domain, name: $name) {
      id
    }
  }
`;

const WEBHOOK_MUTATION = gql`
  mutation createWebhook($domain: String!, $accessToken: String!) {
    createWebhook(domain: $domain, accessToken: $accessToken) {
      userErrors
      webhookSubscription
    }
  }
`;

const Shops = ({ shop, accessToken }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);

  const [upsertShop] = useMutation(CREATE_SHOP_MUTATION, {
    variables: { domain: shop, accessToken, name },
    refetchQueries: [{ query: ALL_SHOPS_QUERY, variables: shopsQueryVars }],
  });

  const [createWebhook] = useMutation(WEBHOOK_MUTATION, {
    variables: { domain: shop, accessToken },
  });

  useEffect(() => {
    if (shop) {
      setOpen(true);
      setName(shop.split('.')[0]);
    }
  }, [shop]);

  const handleClick = async () => {
    const data1 = await upsertShop();
    if (checked) {
      const data2 = await createWebhook();
    }
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Shop to Openship</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <InputGroup>
                  <InputLeftElement
                    children={<Icon name="shop" color="gray.500" />}
                  />
                  <Input
                    color="gray.700"
                    variant="filled"
                    type="phone"
                    placeholder="Phone number"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </InputGroup>
                <Heading
                  lineHeight="10px"
                  fontSize="xs"
                  pr={3}
                  pt={2}
                  marginBottom={4}
                  textTransform="uppercase"
                  fontWeight={500}
                  color="gray.500"
                >
                  Shop Name
                </Heading>
                <Box display="flex" alignItems="center">
                  <Text pr={3} paddingTop={2} fontSize={15}>
                    {shop}
                  </Text>
                </Box>
                <Heading
                  lineHeight="10px"
                  fontSize="xs"
                  pr={3}
                  pt={2}
                  marginBottom={4}
                  textTransform="uppercase"
                  fontWeight={500}
                  color="gray.500"
                >
                  Shopify URL
                </Heading>
              </Box>
              <Box pt={4} display="flex" alignItems="center">
                <Box paddingRight={20}>
                  <Heading
                    fontSize="md"
                    fontWeight={500}
                    mb={1}
                    color="gray.800"
                  >
                    Push orders to Openship
                  </Heading>
                  <Text fontSize="sm" color="gray.700">
                    Orders will be pushed to the pending tab to be fulfilled
                  </Text>
                </Box>
                <Switch
                  marginLeft="auto"
                  checked={checked}
                  onChange={e => setChecked(e.target.checked)}
                />
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" color="gray.600" mr={3}>
                Cancel
              </Button>
              <Button
                variant="ghost"
                variantColor="green"
                bg="green.50"
                _hover={{ bg: 'green.100' }}
                onClick={() => handleClick()}
              >
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <ShopList />
    </>
  );
};

Shops.getInitialProps = ({ query: { shop, accessToken } }) => ({
  shop,
  accessToken,
});

Shops.propTypes = {
  shop: PropTypes.string,
  accessToken: PropTypes.string,
};

export default Shops;
