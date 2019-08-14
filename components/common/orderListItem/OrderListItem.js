import React, { useState, useEffect } from 'react';
import {
  IconButton,
  Pane,
  Heading,
  Paragraph,
  Text,
  Avatar,
} from 'evergreen-ui';
import PropTypes from 'prop-types';
import Cart from '../../pending/Cart/Cart';
import OrderLine from './OrderLine';

const priceString = (price, quantity) => {
  const total = Math.round(price * quantity * 100).toString();
  return `${total.substring(0, total.length - 2)}.${total.substring(
    total.length - 2
  )}`;
};

export default function OrderListItem(props) {
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  // async function onChange(
  //   selected,
  //   updateIndexFunc,
  //   updateLineFunc,
  //   createCheckoutFunc,
  //   setCheckoutFunc,
  //   errorTextObj
  // ) {
  //   updateIndexFunc(selected.length > 0 ? props.index : null);
  //   updateLineFunc(selected);
  //   if (errorTextObj !== '{}') {
  //     setCheckoutFunc(JSON.parse(errorTextObj));
  //   } else if (selected.length > 0) {
  //     const checkout = await createCheckoutFunc({
  //       variables: {
  //         input: {
  //           shippingAddress: {
  //             address1: props.streetAddress1,
  //             address2: props.streetAddress2 && props.streetAddress2,
  //             city: props.city,
  //             province: props.state,
  //             country: 'US',
  //             zip: props.zip,
  //             firstName: props.first_name,
  //             lastName: props.last_name,
  //           },
  //         },
  //       },
  //     });

  //     setCheckoutFunc(checkout.data.createCheckout.checkout);
  //   } else {
  //     setCheckoutFunc({});
  //   }
  // }

  async function onCheckAllChange(
    e,
    updateIndexFunc,
    createCheckoutFunc,
    errorTextObj
  ) {
    updateIndexFunc(e ? props.index : null);

    if (e && errorTextObj === '{}') {
      await createCheckoutFunc({
        shippingAddress: {
          address1: props.streetAddress1,
          address2: props.streetAddress2 && props.streetAddress2,
          city: props.city,
          province: props.state,
          country: 'US',
          zip: props.zip,
          firstName: props.first_name,
          lastName: props.last_name,
        },
      });
    }
  }

  function handleToggleClick(e) {
    e.stopPropagation();
    setOpen(prevOpen => !prevOpen);
  }

  function cart(string) {
    const parsedError = JSON.parse(string);
    return parsedError.lineItems && <Cart checkout={parsedError} />;
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
    processText,
    errorText,
    note,
    disabled,
    buttons,
    selectedOrderIndex,
    updateIndex,
    createCheckout,
  } = props;
  console.log(processText);
  return (
    <Pane>
      <Pane
        display="flex"
        paddingX="1em"
        paddingY=".7em"
        onClick={
          !disabled
            ? () =>
                onCheckAllChange(
                  !selectedOrderIndex,
                  updateIndex,
                  createCheckout,
                  errorText
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
        <Pane>
          <Pane display="flex" flexWrap="wrap" alignItems="center">
            <Heading size={400} marginRight={12}>
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
              size={100}
              lineHeight="20px"
              fontWeight={500}
              marginRight={12}
            >
              {shopName.split('.')[0]}
            </Heading>
            <Heading size={200}>
              {Intl.DateTimeFormat('en-US').format(Date.parse(createAt))}
            </Heading>
          </Pane>
          <Paragraph size={300} fontSize={13} color="#425A70">
            {first_name} {last_name}
            <br />
            {streetAddress1} {streetAddress2}
            <br />
            {city}
            {', '}
            {state} {zip}
          </Paragraph>
        </Pane>
        <Pane
          display="flex"
          marginLeft="auto"
          justifyContent="center"
          // alignItems="center"
        >
          {buttons}
          <IconButton
            marginLeft={3}
            height={20}
            aria-expanded={open}
            onClick={handleToggleClick}
            appearance="minimal"
            icon="chevron-down"
            iconSize={18}
            pointerEvents="visible"
          />
        </Pane>
      </Pane>
      {open && (
        <>
          <Pane
            marginLeft="-3px"
            background="#F7F9FD"
            border="muted"
            paddingY=".7em"
            paddingX="1em"
          >
            <Pane marginBottom={10}>
              <Text size={400} fontWeight={500} color="#084B8A">
                Line Items
              </Text>
            </Pane>
            {lineItems.map(a => (
              <OrderLine key={a.id} item={a.node ? a.node : a} />
            ))}
          </Pane>
          {errorText && cart(errorText)}
          {processText && (
            <Pane
              marginLeft="-3px"
              background="#F1FAF5"
              border="muted"
              paddingY=".7em"
              paddingX="1em"
            >
              <Pane marginBottom={10}>
                <Text size={400} fontWeight={500} color="#00783E">
                  Marketplace Order
                </Text>
              </Pane>
              {processText[0].marketLineItems.map(a => (
                <Pane background="#fff" border="muted" marginBottom={5}>
                  <Pane display="flex" alignItems="center">
                    <Pane
                      height="100%"
                      background="white"
                      borderRight="1px solid #EDF0F2"
                    >
                      <Avatar
                        src={a.variantImg}
                        borderRadius={0}
                        size={70}
                        backgroundColor="white"
                        border="muted"
                      />
                    </Pane>
                    <Pane padding={5} paddingLeft={10}>
                      <Heading size={300}>{a.title}</Heading>
                      <Pane display="flex">
                        {a.quantity > 1 && (
                          <Pane>
                            <Text size={300} color="muted">
                              ${a.variantPrice} x {a.quantity}
                            </Text>
                          </Pane>
                        )}
                        <Heading size={300} marginRight={10} color="green">
                          $
                          {a.variantPrice &&
                            priceString(a.variantPrice, a.quantity)}
                        </Heading>
                      </Pane>
                    </Pane>
                  </Pane>
                </Pane>
              ))}
            </Pane>
          )}
        </>
      )}
    </Pane>
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
  processText: PropTypes.object,
  errorText: PropTypes.object,
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
