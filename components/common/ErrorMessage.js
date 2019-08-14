import React from 'react';
import { Pane, Icon, Text } from 'evergreen-ui';
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
      <Pane key={i} {...errorCard}>
        <Icon icon="warning-sign" color="danger" marginRight={10} />
        <Text size={500} color="#EC4C47" fontWeight={500} fontSize="14px">
          {error.message.replace('GraphQL error: ', '')}
        </Text>
      </Pane>
    ));
  }
  return (
    <Pane {...errorCard}>
      <Icon icon="warning-sign" color="danger" marginRight={10} />
      <Text size={500} color="#EC4C47" fontWeight={500} fontSize="14px">
        {error.message.replace('GraphQL error: ', '')}
      </Text>
    </Pane>
  );
};

DisplayError.defaultProps = {
  error: {},
};

DisplayError.propTypes = {
  error: PropTypes.object,
};

export default DisplayError;
