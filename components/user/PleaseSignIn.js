import { useQuery } from '@apollo/react-hooks';
import { Box, Spinner, Text } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';

const PleaseSignIn = ({ children }) => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);

  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    );
  }
  if (!data) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Box
          background="rgb(250, 226, 226)"
          borderRadius={2}
          padding={3}
          marginX={4}
        >
          <Text
            {...{
              display: 'inline-block',
              boxSizing: 'border-box',
              marginX: 4,
              marginY: 2,
              borderRadius: 2,
              textAlign: 'center',
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: 'rgb(191, 14, 8)',
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            URL not Whitelisted. Please check URL under settings.
          </Text>
        </Box>
      </Box>
    );
  }
  if (!data.me) {
    return <Signin />;
  }
  return children;
};

export default PleaseSignIn;

PleaseSignIn.propTypes = {
  children: PropTypes.element.isRequired,
};
