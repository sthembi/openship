import { Box, IconButton } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const Pagination = ({ leftDisabled, onLeft, rightDisabled, onRight }) => (
  <Box display="flex" marginRight={3}>
    <Box
      display="flex"
      borderRadius={3}
      boxShadow="inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.06);"
    >
      <IconButton
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
        icon="arrow-back"
        color="#657889"
        height={10}
        disabled={leftDisabled}
        onClick={onLeft}
        backgroundImage="linear-gradient(rgb(255, 255, 255), rgb(244, 245, 247))"
        boxShadow="rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px -1px 1px 0px inset"
      />
      <IconButton
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
        icon="arrow-forward"
        color="#657889"
        height={10}
        onClick={onRight}
        disabled={rightDisabled}
        backgroundImage="linear-gradient(rgb(255, 255, 255), rgb(244, 245, 247))"
        boxShadow="rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px -1px 1px 0px inset"
      />
    </Box>
  </Box>
);

export default Pagination;

Pagination.propTypes = {
  leftDisabled: PropTypes.bool,
  rightDisabled: PropTypes.bool,
  onLeft: PropTypes.func,
  onRight: PropTypes.func,
};
