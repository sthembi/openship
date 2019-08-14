import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { Pane, TextInput, Heading, Text, Spinner, Badge } from 'evergreen-ui';
import PropTypes from 'prop-types';
import Button from '../../common/Button';

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
      if (res.data.orders.edges.length) {
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
    <Pane elevation={1} borderRadius="5px" padding={15} background="#fff">
      <Heading size={400} marginBottom={10}>
        Fetch Tracking
      </Heading>
      <Pane display="flex" marginBottom={15}>
        <TextInput
          onChange={e => setInput(e.target.value)}
          value={input}
          height={24}
          className="clean-input"
          backgroundColor="#F5F6F7 !important"
          placeholder="e.g. order number, customer email, name, address, etc."
        />
        <Button
          intent="success"
          height={24}
          fontSize="13px"
          marginLeft={10}
          onClick={() => getTracking(url, input, setResult, setLoading)}
        >
          Get Tracking
        </Button>
      </Pane>
      {loading && <Spinner size={24} />}
      {result && (
        <Pane display="flex" alignItems="center">
          {result.company && (
            <Badge color="blue" marginRight={8}>
              {result.company}
            </Badge>
          )}
          <a href={result.url} target="_blank" rel="noopener noreferrer">
            <Text>{result.number}</Text>
          </a>
          {result.error && (
            <Badge color="red" marginRight={8}>
              {result.error}
            </Badge>
          )}
        </Pane>
      )}
    </Pane>
  );
};

export default Tracking;

Tracking.propTypes = {
  url: PropTypes.string.isRequired,
};
