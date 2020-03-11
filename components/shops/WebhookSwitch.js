import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Box, Heading, Text, Code, Switch } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { front, prodFront, prodEndpoint } from '../../config';

function getWebhooks(domain, accessToken, setResults) {
  const url = `${
    process.env.NODE_ENV === 'development' ? front : prodFront
  }/${accessToken}/graphql`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
    {
      webhookSubscriptions(first :5
        callbackUrl: "${prodEndpoint}order?spdn=${domain}"
        ) {
          edges{
            node{
              id
              callbackUrl
              createdAt
              topic
              includeFields
            }
          }
        }
      }
    `,
    }),
  })
    .then(res => res.json())
    .then(res => {
      if (res.data) {
        const results = res.data.webhookSubscriptions.edges;
        setResults(results);
      }
    });
}

function createWebhook(domain, accessToken, setResults) {
  const url = `${
    process.env.NODE_ENV === 'development' ? front : prodFront
  }/${accessToken}/graphql`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation webhookSubscriptionCreate(
        $topic: WebhookSubscriptionTopic!
        $webhookSubscription: WebhookSubscriptionInput!
      ) {
        webhookSubscriptionCreate(
          topic: $topic
          webhookSubscription: $webhookSubscription
        ) {
          userErrors {
            field
            message
          }
          webhookSubscription {
            id
          }
        }
      }
    `,
      variables: {
        topic: 'ORDERS_CREATE',
        webhookSubscription: {
          callbackUrl: `${prodEndpoint}order?spdn=${domain}`,
          format: 'JSON',
        },
      },
    }),
  })
    .then(res => res.json())
    .then(res => {
      const webhook = res.data.webhookSubscriptionCreate;
      getWebhooks(domain, accessToken, setResults);
    });
}

function deleteWebhook(id, domain, accessToken, setResults) {
  const url = `${
    process.env.NODE_ENV === 'development' ? front : prodFront
  }/${accessToken}/graphql`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation   {
        webhookSubscriptionDelete(
          id: "${id}"
        ) {
          deletedWebhookSubscriptionId
        }
      }
    `,
    }),
  })
    .then(res => res.json())
    .then(res => {
      getWebhooks(domain, accessToken, setResults);
    });
}

const WebhookSwitch = ({ domain, accessToken }) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    getWebhooks(domain, accessToken, setResults);
  }, [domain, accessToken]);

  function handleSwitch(e) {
    if (e.target.checked) {
      createWebhook(domain, accessToken, setResults);
    } else {
      deleteWebhook(results[0].node.id, domain, accessToken, setResults);
    }
  }

  return (
    <>
      <Box
        paddingY={2}
        paddingX={4}
        background="#f5f5f5"
        display="flex"
        alignItems="center"
        width="100%"
      >
        <Box paddingRight={15}>
          <Heading fontSize="sm" fontWeight={500} mb={1} color="gray.800">
            Push orders to Openship
          </Heading>
          <Text fontSize="xs" color="gray.700">
            Orders will be pushed to the pending tab to be fulfilled
          </Text>
        </Box>
        <Switch
          marginLeft="auto"
          isChecked={results.length > 0}
          onChange={e => handleSwitch(e)}
        />
      </Box>
      {results.map(a => (
        <Box paddingY={2} paddingX={3}>
          <Box display="flex" alignItems="center" marginBottom={2}>
            <Text
              fontSize="sm"
              fontWeight={500}
              align="right"
              marginRight={2}
              flexBasis="100px"
              textAlign="right"
              color="text"
            >
              Endpoint:
            </Text>
            <Code variantColor="blue" fontSize="xs" wordWrap="break-word">
              Openship
            </Code>
          </Box>
          <Box display="flex" alignItems="center">
            <Text
              fontSize="sm"
              fontWeight={500}
              align="right"
              marginRight={2}
              flexBasis="100px"
              textAlign="right"
              color="text"
            >
              Topic:
            </Text>
            <Code variantColor="blue" fontSize="xs">
              {a.node.topic}
            </Code>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default WebhookSwitch;

WebhookSwitch.propTypes = {
  domain: PropTypes.string.isRequired,
};
