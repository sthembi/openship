import React, { Component } from 'react';
import { Box, Heading, Select } from '@chakra-ui/core';

class VariantSelector extends Component {
  render() {
    const {
      option: { name, values },
      handleOptionChange,
    } = this.props;

    return (
      <Box marginRight={10}>
        <Heading
          fontSize="sm"
          color="gray.500"
          letterSpacing="wide"
          fontWeight={600}
        >
          {name}
        </Heading>
        <Select
          mt={1}
          height={6}
          fontSize="12px"
          name={name}
          key={name}
          onChange={handleOptionChange}
          iconSize={4}
          borderRadius={3}
          background="#f7f7f7"
        >
          {values.map(value => (
            <option value={value} key={`${name}-${value}`}>{`${value}`}</option>
          ))}
        </Select>
      </Box>
    );
  }
}

export default VariantSelector;
