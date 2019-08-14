import PropTypes from 'prop-types';
import Reset from '../components/user/Reset';

const ResetPage = ({ query }) => (
  <div>
    <Reset resetToken={query.resetToken} />
  </div>
);

export default ResetPage;

ResetPage.propTypes = {
  query: PropTypes.object.isRequired,
};
