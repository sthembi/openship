import React from 'react';
import {
  Box,
  Heading,
  Text,
  Icon,
  Badge,
  Button,
  useDisclosure,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';
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

const OrderDetailsComp = ({
  backgroundColor,
  name,
  store,
  processedAt,
  fulfillments,
  lineItems,
  shippingAddress,
  onOpen,
}) => (
  <>
    <Box
      display="flex"
      paddingY={4}
      backgroundColor={backgroundColor}
      boxShadow={backgroundColor && '0 0 1px rgba(67, 90, 111, 0.3)'}
      paddingX={backgroundColor && 4}
    >
      <Box flex={1} alignItems="center" display="flex">
        <Box>
          <Heading size="lg" fontWeight={600} color="text">
            {name}
          </Heading>
          <Heading
            fontSize="xs"
            fontWeight={600}
            color="gray.500"
            letterSpacing="wide"
            textTransform="uppercase"
            display="flex"
            alignItems="center"
          >
            {store} ·
            <Text ml={1} color="#234361" fontSize="xs" fontWeight={400}>
              {processedAt &&
                Intl.DateTimeFormat('en-US').format(Date.parse(processedAt))}
            </Text>
          </Heading>
          <Badge
            marginTop={2}
            variantColor={fulfillments.length > 0 ? 'green' : 'red'}
            variant="solid"
          >
            {fulfillments.length > 0 ? 'Processed' : 'Not Processed'}
          </Badge>
        </Box>
      </Box>
      {/* <Button
          background="#DDEBF7"
          borderRadius={3}
          marginRight={5}
          onClick={onOpen}
        >
          <Box padding={3} display="flex" alignItems="center">
            <Heading
              size={100}
              fontSize={13}
              fontWeight={700}
              color="#1070CA"
              marginRight={2}
            >
              RESHIP
            </Heading>
            <Icon size={4} color="#1070CA" name="repeat" />
          </Box>
        </Button> */}
      <Button
        background="#DDEBF7"
        borderRadius={3}
        marginRight={1}
        px={3}
        height={8}
        onClick={onOpen}
      >
        <Heading fontSize="sm" fontWeight={700} color="#1070CA" marginRight={2}>
          RESHIP
        </Heading>
        <Icon size={4} color="#1070CA" name="repeat" />
      </Button>
    </Box>
    <Box
      display="flex"
      flexWrap="wrap"
      marginLeft="-1.5rem"
      marginTop="-.3rem"
      padding={backgroundColor && 4}
    >
      <Box {...Layout}>
        {lineItems.edges.map(a => {
          const ID = a.node.id
            .toString()
            .split('/')
            .pop();
          return (
            <Box
              boxShadow="sm"
              background="white"
              padding={2}
              marginBottom={15}
              key={ID}
            >
              <Box display="flex" alignItems="center">
                <Box>
                  <Box
                    as="img"
                    src={a.node.image && a.node.image.originalSrc}
                    borderStyle="solid"
                    borderWidth="1px"
                    borderRadius={3}
                    borderColor="#e8e9ea"
                    width="130px"
                  />
                </Box>
                <Box marginLeft={4}>
                  <Heading size="sm" fontWeight={600} color="text">
                    {a.node.name}
                  </Heading>
                  <Box display="flex" alignItems="center">
                    <Text color="#66788a" fontSize={14} mr={1}>
                      {ID}
                    </Text>
                    -
                    <Text color="#234361" fontSize="sm" ml={1}>
                      QUANTITY: {a.node.quantity}
                    </Text>
                  </Box>
                </Box>
              </Box>
              {/* {props.note && mOrderLineItem(props.note, Number(ID))} */}
            </Box>
          );
        })}
      </Box>
      <Box {...secondaryLayout}>
        <Box boxShadow="sm" background="white" padding={3} marginBottom={15}>
          <Heading
            fontSize="xs"
            fontWeight={500}
            color="gray.500"
            letterSpacing="wide"
            textTransform="uppercase"
            mb={2}
          >
            Customer
          </Heading>
          <Box display="block">
            <Box fontSize="sm" color="#425A70" fontWeight={500}>
              <Box>
                {shippingAddress.name.split(' ')[0]}{' '}
                {shippingAddress.name.split(' ').pop()}
              </Box>
              {shippingAddress.address1} {shippingAddress.address2}
              <br />
              {shippingAddress.city}
              {', '}
              {shippingAddress.province} {shippingAddress.zip}
            </Box>
          </Box>
        </Box>
        {fulfillments.length > 0 && (
          <Box elevation={1} background="white" padding={18} marginBottom={15}>
            <Heading size={100} marginBottom={6}>
              Shipments
            </Heading>
            <Box display="block">
              {fulfillments.map(a =>
                a.trackingInfo.map((b, index) => (
                  <Box key={index} display="flex" alignItems="center">
                    <Icon icon="box" color="#47B881" marginRight={10} />
                    <a href={b.url} target="_blank" rel="noopener noreferrer">
                      <Text size={500}>{b.number}</Text>
                    </a>
                  </Box>
                ))
              )}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  </>
);

const OrderDetails = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Reshipment
        isOpen={isOpen}
        onClose={onClose}
        order={props}
        shop={props.store}
      />
      <OrderDetailsComp {...props} onOpen={onOpen} />
    </>
  );
};

export default OrderDetails;

export { OrderDetailsComp };

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
