import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Box, Heading, Text, Button, Icon } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import MPCart from '../../pending/Cart/MPCart';
import ZincCart from '../../pending/Cart/ZincCart';
import OrderLine from './OrderLine';
import { CHANNELS_QUERY, channelsQueryVars } from '../../layout/Page';

const priceString = (price, quantity) => {
  const total = Math.round(price * quantity * 100).toString();
  return `${total.substring(0, total.length - 2)}.${total.substring(
    total.length - 2
  )}`;
};

export default function OrderListItem(props) {
  const [open, setOpen] = useState();

  const {
    data: { channels },
    error,
    loading,
  } = useQuery(CHANNELS_QUERY, {
    variables: channelsQueryVars,
  });

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  async function onCheckAllChange(e, updateIndexFunc) {
    updateIndexFunc(e ? props.index : null);
  }

  function handleToggleClick(e) {
    e.stopPropagation();
    setOpen(prevOpen => !prevOpen);
  }

  function parseMP(name, string, checkout) {
    const parse = JSON.parse(string);
    return (
      parse.lineItems && (
        <MPCart cart={parse} checkout={checkout} cartName={name} />
      )
    );
  }
  function parseZinc(string, checkout) {
    const parse = JSON.parse(string);
    return parse.products && <ZincCart cart={parse} checkout={checkout} />;
  }

  const {
    id,
    orderId,
    orderName,
    email,
    first_name,
    last_name,
    streetAddress1,
    streetAddress2,
    city,
    state,
    zip,
    shopName,
    phone,
    lineItems,
    currency,
    totalPrice,
    subTotalPrice,
    totalDiscount,
    totalTax,
    createAt,
    mpCheckout,
    mpCart,
    zincCheckout,
    zincCart,
    customCheckout,
    customCart,
    note,
    disabled,
    buttons,
    selectedOrderIndex,
    updateIndex,
    createCheckout,
  } = props;
  return (
    <Box>
      <Box
        display="flex"
        paddingX="1em"
        paddingY=".7em"
        onClick={
          !disabled
            ? () =>
                onCheckAllChange(
                  !selectedOrderIndex,
                  updateIndex,
                  // createCheckout,
                  mpCart
                )
            : undefined
        }
        pointerEvents={
          !selectedOrderIndex || selectedOrderIndex === id ? null : 'none'
        }
        className={
          !selectedOrderIndex || selectedOrderIndex === id ? 'hover' : null
        }
        cursor={
          !selectedOrderIndex || selectedOrderIndex === id ? 'pointer' : null
        }
      >
        <Box>
          <Box display="flex" flexWrap="wrap" alignItems="center" mb={1}>
            <Heading fontSize="sm" marginRight={3} color="text">
              <a
                href={`https://${
                  shopName.split('.')[0]
                }.myshopify.com/admin/orders/${orderId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {orderName}
              </a>
            </Heading>
            <Heading
              fontSize="xs"
              fontWeight={500}
              letterSpacing="wide"
              textTransform="uppercase"
              color="gray.500"
              mr={3}
            >
              {shopName.split('.')[0]}
            </Heading>

            <Heading fontSize="xs" color="gray.500">
              {Intl.DateTimeFormat('en-US').format(Date.parse(createAt))}
            </Heading>
          </Box>
          <Box as="p" fontSize="sm" color="#425A70" lineHeight="short">
            {first_name} {last_name}
            <br />
            {streetAddress1} {streetAddress2}
            <br />
            {city}
            {', '}
            {state} {zip}
          </Box>
        </Box>
        <Box
          display="flex"
          marginLeft="auto"
          justifyContent="center"
          // alignItems="center"
        >
          {buttons}

          <Button
            bg={open && '#EDF2F7'}
            onClick={handleToggleClick}
            color="#66788a"
            aria-label="show line-items"
            height="1.3rem"
            minWidth="1.3rem"
            px={0}
            ml={1}
          >
            <Icon name="chevron-down" size="22px" />
          </Button>
        </Box>
      </Box>
      {open && (
        <>
          <Box
            marginLeft="-3px"
            background="#F7F9FD"
            border="muted"
            paddingY=".7em"
            paddingX="1em"
          >
            <Box marginBottom={2}>
              <Text fontSize="sm" fontWeight={500} color="#084B8A">
                Line Items
              </Text>
            </Box>
            {lineItems.map(a => (
              <OrderLine key={a.id} item={a.node ? a.node : a} />
            ))}
          </Box>

          {channels.filter(channel => channel.type === 'MARKETPLACE').length >
            0 &&
            mpCart &&
            JSON.parse(mpCart).lineItems &&
            JSON.parse(mpCart).lineItems.edges.length > 0 && (
              <MPCart cart={JSON.parse(mpCart)} cartName="Marketplace" />
            )}
          {channels.filter(channel => channel.type === 'SHOPIFY').length > 0 &&
            customCart &&
            JSON.parse(customCart).lineItems &&
            JSON.parse(customCart).lineItems.edges.length > 0 && (
              <MPCart
                cart={JSON.parse(customCart)}
                cartName="BN"
                background="#F1FBFC"
                color="#007489"
              />
            )}
          {channels.filter(channel => channel.type === 'ZINC').length > 0 &&
            zincCart &&
            JSON.parse(zincCart).products &&
            JSON.parse(zincCart).products.length > 0 &&
            parseZinc(zincCart, zincCheckout)}
          {mpCheckout && (
            <Box
              marginLeft="-3px"
              background="#F1FAF5"
              border="muted"
              paddingY=".7em"
              paddingX="1em"
            >
              <Box marginBottom={10}>
                <Text size={400} fontWeight={500} color="#00783E">
                  Marketplace Order
                </Text>
              </Box>
              {mpCheckout[0].marketLineItems.map(a => (
                <Box background="#fff" border="muted" marginBottom={5}>
                  <Box display="flex" alignItems="center">
                    <Box
                      height="100%"
                      background="white"
                      borderRight="1px solid #e8e9ea"
                    >
                      <Box as="img" src={a.variantImg} width="100px" />
                    </Box>
                    <Box padding={5} paddingLeft={10}>
                      <Heading size={300}>{a.title}</Heading>
                      <Box display="flex">
                        {a.quantity > 1 && (
                          <Box>
                            <Text size={300} color="muted">
                              ${a.variantPrice} x {a.quantity}
                            </Text>
                          </Box>
                        )}
                        <Heading size={300} marginRight={10} color="green">
                          $
                          {a.variantPrice &&
                            priceString(a.variantPrice, a.quantity)}
                        </Heading>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

OrderListItem.propTypes = {
  id: PropTypes.string,
  orderId: PropTypes.string,
  orderName: PropTypes.string,
  email: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  streetAddress1: PropTypes.string,
  streetAddress2: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
  shopName: PropTypes.string,
  phone: PropTypes.string,
  lineItems: PropTypes.object,
  currency: PropTypes.string,
  totalPrice: PropTypes.number,
  subTotalPrice: PropTypes.number,
  totalDiscount: PropTypes.number,
  totalTax: PropTypes.number,
  createAt: PropTypes.number,
  mpCheckout: PropTypes.object,
  mpCart: PropTypes.object,
  note: PropTypes.object,
  disabled: PropTypes.bool,
  selectedOrderIndex: PropTypes.number,
  selectedLineIndex: PropTypes.array,
  open: PropTypes.bool,
  updateIndex: PropTypes.func,
  index: PropTypes.number,
  createCheckout: PropTypes.func,
  buttons: PropTypes.element,
};
