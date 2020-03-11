import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import {
  Box,
  Button,
  Badge,
  Spinner,
  Heading,
  Text,
  InputRightElement,
  InputGroup,
  Input,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';

function getTracking(url, input, setResult, setLoading) {
  setLoading(true);
  setResult('');
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
{
  orders(
    first: 1
    query: "${input}"
  ) {
    edges {
      node {
        fulfillments(first: 25) {
          trackingInfo {
            company
            number
            url
          }
        }
      }
    }
  }
}
    `,
    }),
  })
    .then(res => res.json())
    .then(res => {
      if (
        res.data.orders.edges.length &&
        res.data.orders.edges[0].node.fulfillments.length &&
        res.data.orders.edges[0].node.fulfillments[0].trackingInfo.length
      ) {
        setResult(
          res.data.orders.edges[0].node.fulfillments[0].trackingInfo[0]
        );
      } else {
        setResult({ error: `No orders found matching ${input}` });
      }
      setLoading(false);
    });
}

const Tracking = ({ url }) => {
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <Box
      minWidth="500px"
      boxShadow="sm"
      borderRadius="5px"
      padding={4}
      background="#fff"
    >
      <Heading fontSize="sm" color="text" marginBottom={3}>
        Fetch Tracking
      </Heading>
      <Box display="flex" marginBottom={4}>
        <InputGroup size="sm" width="100%">
          <Input
            variant="filled"
            onChange={e => setInput(e.target.value)}
            value={input}
            placeholder="e.g. order number, customer email, name, address, etc."
          />

          <InputRightElement width="3rem">
            <Button
              onClick={() => getTracking(url, input, setResult, setLoading)}
              h="1.35rem"
              size="xs"
              variantColor="green"
            >
              GO
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
      {loading && <Spinner color="blue.500" />}
      {result && (
        <Box display="flex" alignItems="center">
          {result.company && (
            <Badge variantColor="blue" marginRight={2}>
              {result.company}
            </Badge>
          )}
          <a href={result.url} target="_blank" rel="noopener noreferrer">
            <Text>{result.number}</Text>
          </a>
          {result.error && (
            <Badge variantColor="red" marginRight={8}>
              {result.error}
            </Badge>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Tracking;

Tracking.propTypes = {
  url: PropTypes.string.isRequired,
};
