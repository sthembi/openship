import React from 'react';
import {
  Pane,
  Heading,
  TextInputField,
  Text,
  Tablist,
  Paragraph,
  Icon,
} from 'evergreen-ui';
import PropTypes from 'prop-types';
import Button from '../common/Button';

const sucessCard = {
  paddingX: 10,
  paddingY: 5,
  background: '#F1FAF5',
  display: 'flex',
  alignItems: 'center',
};

const sellerOnboarding = ({
  sellerStep,
  requested,
  shopName,
  setShopName,
  reviews,
  setReviews,
  threshold,
  setThreshold,
  error,
  loading,
  updateSeller,
  id,
}) => {
  const tabs = ['Shop Info', 'Connect Stripe', 'Add Products'];

  async function onConfirm() {
    const res = await updateSeller({
      variables: {
        userInput: {
          questions: [{ shopName }, { reviews }, { threshold }],
        },
      },
    });
  }
  return (
    <Pane elevation={1} borderRadius="5px">
      <Tablist
        display="flex"
        justifyContent="center"
        // background="#10384f"
        borderTopRightRadius="5px"
        borderTopLeftRadius="5px"
        borderBottom="1px solid #E4E7EB"
      >
        {tabs.map((tab, index) => (
          <Pane
            flex={1}
            display="flex"
            // flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={13}
            flexWrap="wrap"
            // {...index !== 0 && { borderLeft: '1px solid #DDEBF7' }}
            {...index <= sellerStep && {
              background: '#123950',
            }}
            {...index === 0 && {
              borderTopLeftRadius: '5px',
            }}
            {...index === 1 &&
              sellerStep === 0 && {
                borderRight: '2px solid #f0f0f0',
              }}
            {...index === 2 && {
              borderTopRightRadius: '5px',
            }}
          >
            {index <= sellerStep ? (
              <Icon
                icon="tick"
                color="#fff"
                background="#46b880"
                borderRadius="999px"
                padding={3}
                size={16}
              />
            ) : (
              <Icon
                icon="tick"
                color="#46b880"
                background="#fff"
                borderRadius="999px"
                boxShadow="0px 0px 0 1px #46b880"
                padding={3}
                size={16}
              />
            )}

            <Text
              key={tab}
              id={tab}
              aria-controls={`panel-${tab}`}
              textAlign="center"
              marginX={8}
              marginY={4}
              {...index <= sellerStep && { fontWeight: '600', color: '#fff' }}
            >
              {tab}
            </Text>
          </Pane>
        ))}
      </Tablist>
      <Pane
        background="tint1"
        flex="1"
        borderBottomLeftRadius={5}
        borderBottomRightRadius={5}
      >
        {tabs.map((tab, index) => (
          <Pane
            key={tab}
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={tab}
            aria-hidden={index !== sellerStep}
            display={index === sellerStep ? 'block' : 'none'}
          >
            {(() => {
              switch (index) {
                case 0:
                  return (
                    <>
                      <Pane padding={16}>
                        <Pane
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          marginBottom={15}
                        >
                          <Heading size={500} color="#425A70">
                            Getting started as a marketplace seller
                          </Heading>
                        </Pane>
                        <Pane
                          flexShrink={0}
                          height={3}
                          backgroundColor="#E4E7EB"
                          borderRadius={1}
                          marginBottom={15}
                        />
                        <TextInputField
                          label="Shop Name"
                          hint="Name of shop that will appear on marketplace"
                          placeholder={requested || "Frank's Bike Shop"}
                          value={shopName}
                          onChange={e => setShopName(e.target.value)}
                          disabled={requested}
                        />
                        <TextInputField
                          label="Shop Reviews"
                          hint="Please link us to any shop reviews you have"
                          placeholder={
                            requested || 'www.google.com/reviews/franksbikeshop'
                          }
                          value={reviews}
                          onChange={e => setReviews(e.target.value)}
                          disabled={requested}
                        />
                        <TextInputField
                          label="Order Threshold"
                          hint="Limit on how many orders can be handled daily by shop"
                          placeholder={requested || '100'}
                          value={threshold}
                          onChange={e => setThreshold(e.target.value)}
                          disabled={requested}
                        />
                      </Pane>

                      {requested ? (
                        <Pane
                          {...sucessCard}
                          padding={15}
                          borderTop="2px solid #f0f0f0"
                          borderBottomLeftRadius="5"
                          borderBottomRightRadius="5"
                          borderTopLeftRadius="0"
                          borderTopRightRadius="0"
                        >
                          <Icon
                            icon="endorsed"
                            color="#47B881"
                            marginRight={10}
                          />
                          <Text
                            size={500}
                            color="#47B881"
                            fontWeight={500}
                            fontSize="14px"
                          >
                            Marketplace seller access has been requested. We'll
                            be in touch soon.
                          </Text>
                        </Pane>
                      ) : (
                        <Button
                          height={35}
                          fontSize={15}
                          width="100%"
                          // intent="primary"
                          textColor="#fff"
                          background="#47B881"
                          borderBottomLeftRadius="5"
                          borderBottomRightRadius="5"
                          borderTopLeftRadius="0"
                          borderTopRightRadius="0"
                          onClick={onConfirm}
                        >
                          Confirm
                        </Button>
                      )}
                    </>
                  );
                case 1:
                  return (
                    <>
                      <Pane padding={16}>
                        <Pane
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          marginBottom={15}
                        >
                          <Heading size={500} color="#425A70">
                            Your marketplace account has been approved.
                          </Heading>
                        </Pane>
                        <Pane
                          flexShrink={0}
                          height={3}
                          backgroundColor="#E4E7EB"
                          borderRadius={1}
                          marginBottom={15}
                        />
                        <Heading size={400} marginBottom={4} color="#425A70">
                          Stripe Integration
                        </Heading>
                        <Paragraph marginBottom={5}>
                          By connecting Stripe, the marketplace will be able to
                          accept payments from buyers on your behalf. Funds and
                          payouts can be managed from your Stripe dashboard.
                        </Paragraph>
                      </Pane>
                      <a
                        href={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_FP0VAQDBcM7LCrGiCMuARMl7DJoTyZM6&scope=read_write&state=${id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          height={35}
                          fontSize={15}
                          width="100%"
                          // intent="primary"
                          textColor="#fff"
                          background="#1070ca"
                          borderBottomLeftRadius="5"
                          borderBottomRightRadius="5"
                          borderTopLeftRadius="0"
                          borderTopRightRadius="0"
                        >
                          Connect Stripe
                        </Button>
                      </a>
                    </>
                  );
                case 2:
                  return (
                    <Pane padding={16}>
                      <Pane
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        marginBottom={15}
                      >
                        <span role="img" aria-label="confetti">
                          🎉
                        </span>
                        <Heading size={500} color="#425A70">
                          You're all set!
                        </Heading>
                      </Pane>
                      <Pane
                        flexShrink={0}
                        height={3}
                        backgroundColor="#E4E7EB"
                        borderRadius={1}
                        marginBottom={15}
                      />
                      <Heading size={400} marginBottom={4} color="#425A70">
                        Adding Products
                      </Heading>
                      <Paragraph marginBottom={25}>
                        To add products to the marketplace, simply navigate to
                        the all products link. You will see a sync button next
                        to each product. Once clicked, you can edit the item,
                        add quantity, and have the item listed. We currently
                        only support free shipping so please price this into the
                        cost of the item.
                      </Paragraph>
                      <Heading size={400} marginBottom={4} color="#425A70">
                        Orders
                      </Heading>
                      <Paragraph marginBottom={25}>
                        Once your item in the marketplace is sold, an order will
                        be created on the Shopify shop that the product was
                        added from. Payments will be handled by Stripe and a
                        link to the Stripe payment page will be added to the
                        created order.
                      </Paragraph>
                      <Heading size={400} marginBottom={4} color="#425A70">
                        Payments
                      </Heading>
                      <Paragraph marginBottom={25}>
                        The openship marketplace has a 4% seller fee on each
                        order (this does not include credit card processing fees
                        from Stripe). Payouts and chargebacks are to be handled
                        directly on your Stripe dashboard.
                      </Paragraph>
                      <Heading size={400} marginBottom={4} color="#425A70">
                        Fulfillment
                      </Heading>
                      <Paragraph>
                        The created order on your Shopify shop can be fulfilled
                        like any other order. Once the order is fulfilled, the
                        tracking information will be synced directly to the
                        buyer's shop.
                      </Paragraph>
                    </Pane>
                  );
                default:
                  return <div>Error</div>;
              }
            })()}
          </Pane>
        ))}
      </Pane>
    </Pane>
  );
};

export default sellerOnboarding;

sellerOnboarding.propTypes = {
  sellerStep: PropTypes.number.isRequired,
  requested: PropTypes.bool,
  shopName: PropTypes.string,
  setShopName: PropTypes.func,
  reviews: PropTypes.string,
  setReviews: PropTypes.func,
  threshold: PropTypes.string,
  setThreshold: PropTypes.func,
  error: PropTypes.object,
  loading: PropTypes.bool,
  updateSeller: PropTypes.func,
};
