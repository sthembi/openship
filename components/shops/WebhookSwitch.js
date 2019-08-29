import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Pane, TextInput, Heading, Text, Code, Switch } from 'evergreen-ui';
import PropTypes from 'prop-types';
import { resultKeyNameFromField } from 'apollo-utilities';
import Button from '../common/Button';
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
      <Pane
        paddingY={10}
        paddingX={15}
        background="#f5f5f5"
        display="flex"
        alignItems="center"
        width="100%"
      >
        <Pane paddingRight={15}>
          <Heading size={500} fontSize="15px" fontWeight={500}>
            Push orders to Openship
          </Heading>
          <Text size={300}>
            Orders will be pushed to the pending tab to be fulfilled
          </Text>
        </Pane>
        <Switch
          marginLeft="auto"
          checked={results.length > 0}
          onChange={e => handleSwitch(e)}
        />
      </Pane>
      {results.map(a => (
        <Pane paddingY={10} paddingX={15}>
          <Pane display="flex" alignItems="center" marginBottom={10}>
            <Text
              size={400}
              paddingRight={5}
              fontWeight={500}
              align="right"
              marginRight={5}
              flexBasis="100px"
            >
              Endpoint:
            </Text>
            <Code fontSize="12px" size={300} wordWrap="break-word">
              Openship
            </Code>
          </Pane>
          <Pane display="flex" alignItems="center">
            <Text
              size={400}
              paddingRight={5}
              fontWeight={500}
              align="right"
              marginRight={5}
              flexBasis="100px"
            >
              Topic:
            </Text>
            <Code fontSize="12px" size={300}>
              {a.node.topic}
            </Code>
          </Pane>
        </Pane>
      ))}
    </>
  );
};

export default WebhookSwitch;

WebhookSwitch.propTypes = {
  domain: PropTypes.string.isRequired,
};
