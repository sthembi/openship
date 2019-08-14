import { Pane, IconButton } from 'evergreen-ui';
import PropTypes from 'prop-types';

const Pagination = ({ leftDisabled, onLeft, rightDisabled, onRight }) => (
  <Pane display="flex" marginRight={10}>
    <Pane
      display="flex"
      borderRadius={3}
      boxShadow="inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.06);"
    >
      <IconButton
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
        icon="arrow-left"
        height={36}
        disabled={leftDisabled}
        onClick={onLeft}
      />
      <IconButton
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
        icon="arrow-right"
        height={36}
        onClick={onRight}
        disabled={rightDisabled}
      />
    </Pane>
  </Pane>
);

export default Pagination;

Pagination.propTypes = {
  leftDisabled: PropTypes.bool,
  rightDisabled: PropTypes.bool,
  onLeft: PropTypes.func,
  onRight: PropTypes.func,
};
