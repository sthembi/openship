import React from 'react';
import { Box, Icon, Text } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const errorCard = {
  paddingX: 10,
  paddingY: 5,
  background: '#FAE2E2',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
};

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <Box key={i} {...errorCard}>
        <Icon name="warning-2" color="red.400" />
        <Text color="#EC4C47" fontWeight={500} fontSize="14px">
          {error.message.replace('GraphQL error: ', '')}
        </Text>
      </Box>
    ));
  }
  return (
    <Box {...errorCard}>
      <Icon icon="warning-sign" color="danger" marginRight={10} />
      <Text color="#EC4C47" fontWeight={500} fontSize="14px">
        {error.message.replace('GraphQL error: ', '')}
      </Text>
    </Box>
  );
};

DisplayError.defaultProps = {
  error: {},
};

DisplayError.propTypes = {
  error: PropTypes.object,
};

export default DisplayError;
