import React, { useState } from 'react';
import {
  Heading,
  Pane,
  Avatar,
  Text,
  Icon,
  Paragraph,
  Badge,
} from 'evergreen-ui';
import PropTypes from 'prop-types';
import Button from './Button';
import mOrderLineItem from './mOrderLineItem';
import Reshipment from './Reshipment';

const secondaryLayout = {
  flex: '1 1 10rem',
  marginLeft: '1.5rem',
  marginTop: '.3rem',
};

const Layout = {
  flex: '2 2 20rem',
  marginLeft: '1.5rem',
  marginTop: '.3rem',
};

const OrderDetails = props => {
  console.log(props);
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <Reshipment
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        order={props}
        shop={props.store}
      />
      <Pane
        display="flex"
        paddingY={16}
        backgroundColor={props.backgroundColor}
        boxShadow={props.backgroundColor && '0 0 1px rgba(67, 90, 111, 0.3)'}
        paddingX={props.backgroundColor && 16}
      >
        <Pane flex={1} alignItems="center" display="flex">
          <Pane display="block">
            <Heading size={700}>{props.name}</Heading>
            <Heading size={100} lineHeight="20px" fontWeight={500}>
              {props.store} ·{' '}
              <Text color="#234361" size={300} lineHeight="20px">
                {props.processedAt &&
                  Intl.DateTimeFormat('en-US').format(
                    Date.parse(props.processedAt)
                  )}
              </Text>
            </Heading>
            <Badge
              marginTop={4}
              color={props.fulfillments.length > 0 ? 'green' : 'red'}
              isSolid
            >
              {props.fulfillments.length > 0 ? 'Processed' : 'Not Processed'}
            </Badge>
          </Pane>
        </Pane>
        <Pane height={28}>
          <Button
            background="#DDEBF7"
            borderRadius={3}
            marginRight={5}
            onClick={() => setIsShown(true)}
          >
            <Pane padding={3} display="flex" alignItems="center">
              <Heading
                size={100}
                fontSize={13}
                fontWeight={700}
                color="#1070CA"
                marginRight={4}
              >
                RESHIP
              </Heading>
              <Icon
                marginLeft={3}
                color="#1070CA"
                icon="social-media"
                size={13}
              />
            </Pane>
          </Button>
        </Pane>
      </Pane>
      <Pane
        display="flex"
        flexWrap="wrap"
        marginLeft="-1.5rem"
        marginTop="-.3rem"
        padding={props.backgroundColor && 16}
      >
        <Pane {...Layout}>
          {props.lineItems.edges.map(a => {
            const ID = a.node.id
              .toString()
              .split('/')
              .pop();
            return (
              <Pane
                elevation={1}
                background="white"
                padding={15}
                marginBottom={15}
                key={ID}
              >
                <Pane display="flex" alignItems="center">
                  <Pane>
                    <Avatar
                      src={a.node.image && a.node.image.originalSrc}
                      borderStyle="solid"
                      borderWidth="1px"
                      borderRadius={3}
                      borderColor="#e8e9ea"
                      size={75}
                    />
                  </Pane>
                  <Pane marginLeft={20} display="block">
                    <Heading size={500}>{a.node.name}</Heading>
                    <Text color="muted" fontSize={14}>
                      {ID}
                    </Text>{' '}
                    -{' '}
                    <Text color="#234361" size={300}>
                      QUANTITY: {a.node.quantity}
                    </Text>
                  </Pane>
                </Pane>
                {/* {props.note && mOrderLineItem(props.note, Number(ID))} */}
              </Pane>
            );
          })}
        </Pane>
        <Pane {...secondaryLayout}>
          <Pane elevation={1} background="white" padding={18} marginBottom={15}>
            <Heading size={100} marginBottom={6}>
              Customer
            </Heading>
            <Pane display="block">
              <Paragraph size={300} fontSize={13} color="#425A70">
                <Text>
                  {props.shippingAddress.name.split(' ')[0]}{' '}
                  {props.shippingAddress.name.split(' ').pop()}
                </Text>
                <br />
                {props.shippingAddress.address1}{' '}
                {props.shippingAddress.address2}
                <br />
                {props.shippingAddress.city}
                {', '}
                {props.shippingAddress.province} {props.shippingAddress.zip}
              </Paragraph>
            </Pane>
          </Pane>
          {props.fulfillments.length > 0 && (
            <Pane
              elevation={1}
              background="white"
              padding={18}
              marginBottom={15}
            >
              <Heading size={100} marginBottom={6}>
                Shipments
              </Heading>
              <Pane display="block">
                {props.fulfillments.map(a =>
                  a.trackingInfo.map((b, index) => (
                    <Pane key={index} display="flex" alignItems="center">
                      <Icon icon="box" color="#47B881" marginRight={10} />
                      <a href={b.url} target="_blank" rel="noopener noreferrer">
                        <Text size={500}>{b.number}</Text>
                      </a>
                    </Pane>
                  ))
                )}
              </Pane>
            </Pane>
          )}
        </Pane>
      </Pane>
    </>
  );
};

export default OrderDetails;

OrderDetails.propTypes = {
  store: PropTypes.string,
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
  processedAt: PropTypes.string,
  note: PropTypes.object,
  lineItems: PropTypes.array,
  shippingAddress: PropTypes.object,
  fulfillments: PropTypes.array,
};
