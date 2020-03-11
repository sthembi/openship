import React, { Component } from 'react';
import {
  Box,
  Button,
  Icon,
  Heading,
  Text,
  Spinner,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';

function CartItem({
  lineItem,
  removeItem,
  checkoutLineItemsUpdate,
  checkoutID,
  loading,
}) {
  function updateQuantity(lineItemId, quantity) {
    checkoutLineItemsUpdate([
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ]);
  }

  return (
    <Box background="#fff" border="muted" marginBottom={5}>
      <Box display="flex" alignItems="center">
        <Box height="100%" background="white">
          {lineItem.variant.image && (
            <Box
              background="white"
              borderRight="1px solid #e8e9ea"
              height="70px"
              width="70px"
            >
              <Box
                as="img"
                src={lineItem.variant.image.src}
                alt={`${lineItem.title} product shot`}
              />
            </Box>
          )}
        </Box>
        <Box paddingRight={2} paddingLeft={3}>
          <Heading fontSize="sm" color="text">
            {lineItem.title}
          </Heading>
          <Box display="flex" alignItems="center">
            <Text fontSize="xs" color="gray.600">
              {lineItem.variant.title}
            </Text>
            <Box marginX={2}>·</Box>
            <Heading fontSize="xs" marginRight={10} color="green.600">
              ${(lineItem.quantity * lineItem.variant.price).toFixed(2)}
            </Heading>
          </Box>
          {lineItem.quantity > 1 && (
            <Text fontSize="xs" color="gray.500">
              ${lineItem.variant.price} x {lineItem.quantity}
            </Text>
          )}
        </Box>
        <Box marginLeft="auto" display="flex" alignItems="center">
          {checkoutLineItemsUpdate && (
            <>
              {loading ? (
                <Spinner size="sm" color="blue.500" mx={3} />
              ) : (
                <>
                  <NumberInput
                    size="sm"
                    value={lineItem.quantity}
                    onChange={e => updateQuantity(lineItem.id, e)}
                    min={0}
                    width="80px"
                    mr={1}
                  >
                    <NumberInputField
                      focusBorderColor="blue.500"
                      textAlign="center"
                      _hover={{ borderColor: 'blue.500' }}
                      height="25px"
                    />
                    <NumberInputStepper width="25px">
                      <NumberIncrementStepper
                        bg="#f6f7f9"
                        color="blue.500"
                        _active={{ bg: 'blue.500' }}
                        _hover={{ bg: 'blue.500', color: 'white' }}
                        children={<Icon name="add" color="currentColor" />}
                        marginTop="0px !important"
                        borderTopWidth="0px !important"
                      />
                    </NumberInputStepper>
                    <NumberInputStepper left="0" width="25px">
                      <NumberDecrementStepper
                        bg="#f6f7f9"
                        color="blue.500"
                        _active={{ bg: 'blue.500' }}
                        _hover={{ bg: 'blue.500', color: 'white' }}
                        children={<Icon name="minus" color="currentColor" />}
                        borderLeft="0px"
                        borderRight="1px solid #E2E8F0"
                        marginTop="0px !important"
                        borderTopWidth="0px !important"
                      />
                    </NumberInputStepper>
                  </NumberInput>
                </>
              )}
            </>
          )}
          {removeItem && (
            <Button
              aria-label="show line-items"
              height="1.3rem"
              minWidth="1.3rem"
              bg="transparent"
              color="#66788a"
              px={0}
              mx={2}
              onClick={() => removeItem([lineItem.id])}
            >
              <Icon name="small-close" size={4} />
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default CartItem;
