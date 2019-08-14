import PropTypes from 'prop-types';
import Completed from '../../components/completed/Completed';

const CompletedPage = ({ query }) => (
  <div>
    <Completed {...query} />
  </div>
);

export default CompletedPage;

CompletedPage.propTypes = {
  query: PropTypes.object.isRequired,
};
