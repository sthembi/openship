import { useState } from 'react';
import {
  Box,
  Text,
  Heading,
  PseudoBox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Icon,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';

function LineItem({ arg, handleLine }) {
  const initialQty = arg.quantity;
  const [quantity, setQuantity] = useState(arg.quantity);

  function onInputChange(e) {
    handleLine(arg.id, e, initialQty);
    setQuantity(e);
  }

  return (
    <Box display="flex" alignItems="center" marginBottom={15}>
      <Box display="block">
        <Box>
          <Box
            as="img"
            src={arg.img ? arg.img : arg.image && arg.image.originalSrc}
            borderStyle="solid"
            borderWidth="1px"
            borderRadius={3}
            borderColor="#e8e9ea"
            width="70px"
          />
        </Box>
      </Box>
      <Box flex={2} display="block" marginLeft={2}>
        <Heading fontSize="sm" color="text" mb={2} fontWeight={600}>
          {arg.name}
        </Heading>

        <PseudoBox>
          <Text fontSize=".65rem" fontWeight="600" color="gray.500">
            QUANTITY
          </Text>
          <NumberInput
            size="sm"
            value={quantity}
            onChange={onInputChange}
            min={0}
            width="80px"
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
        </PseudoBox>
      </Box>
    </Box>
  );
}

export default LineItem;

LineItem.propTypes = {
  arg: PropTypes.object,
  handleLine: PropTypes.func,
};
