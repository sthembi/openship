import React from 'react';
import {
  Box,
  Heading,
  Text,
  Icon,
  Input,
  Divider,
  Button,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';

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
    <Box boxShadow="sm" borderRadius="5px">
      <Box
        display="flex"
        justifyContent="center"
        borderTopRightRadius="5px"
        borderTopLeftRadius="5px"
        borderBottom="1px solid #E4E7EB"
      >
        {tabs.map((tab, index) => (
          <Box
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
            <Icon
              name="check-circle"
              size={4}
              color={index <= sellerStep ? 'green.400' : 'white'}
              bg={index <= sellerStep ? 'white' : 'green.400'}
              borderRadius="999px"
              p={index <= sellerStep ? '0px' : '1px'}
            />

            <Text
              key={tab}
              id={tab}
              aria-controls={`Boxl-${tab}`}
              textAlign="center"
              fontSize="sm"
              marginX={2}
              marginY={1}
              color="text"
              {...index <= sellerStep && { fontWeight: '600', color: '#fff' }}
            >
              {tab}
            </Text>
          </Box>
        ))}
      </Box>
      <Box
        background="white"
        flex="1"
        borderBottomLeftRadius={5}
        borderBottomRightRadius={5}
      >
        {tabs.map((tab, index) => (
          <Box
            key={tab}
            id={`Boxl-${tab}`}
            aria-labelledby={tab}
            aria-hidden={index !== sellerStep}
            display={index === sellerStep ? 'block' : 'none'}
          >
            {(() => {
              switch (index) {
                case 0:
                  return (
                    <>
                      <Box padding={4}>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          marginBottom={15}
                        >
                          <Heading
                            fontSize="md"
                            color="#425A70"
                            fontWeight={500}
                          >
                            Getting started as a marketplace seller
                          </Heading>
                        </Box>

                        <Divider />

                        <Box mb={4}>
                          <Text
                            color="#425A70"
                            fontSize="sm"
                            fontWeight={500}
                            mb={1}
                          >
                            Shop Name
                          </Text>
                          <Input
                            size="sm"
                            placeholder={requested || "Frank's Bike Shop"}
                            value={shopName}
                            onChange={e => setShopName(e.target.value)}
                            disabled={requested}
                            mb={1}
                          />
                          <Text fontSize="xs" color="gray.500">
                            Name of shop that will appear on marketplace
                          </Text>
                        </Box>

                        <Box mb={4}>
                          <Text
                            color="#425A70"
                            fontSize="sm"
                            fontWeight={500}
                            mb={1}
                          >
                            Shop Reviews
                          </Text>
                          <Input
                            size="sm"
                            placeholder={
                              requested ||
                              'www.google.com/reviews/franksbikeshop'
                            }
                            value={reviews}
                            onChange={e => setReviews(e.target.value)}
                            disabled={requested}
                            mb={1}
                          />
                          <Text fontSize="xs" color="gray.500">
                            Please link us to any shop reviews you have
                          </Text>
                        </Box>

                        <Box mb={4}>
                          <Text
                            color="#425A70"
                            fontSize="sm"
                            fontWeight={500}
                            mb={1}
                          >
                            Order Threshold
                          </Text>
                          <Input
                            size="sm"
                            placeholder={requested || '100'}
                            value={threshold}
                            onChange={e => setThreshold(e.target.value)}
                            disabled={requested}
                            mb={1}
                          />
                          <Text fontSize="xs" color="gray.500">
                            Limit on how many orders can be handled daily by
                            shop
                          </Text>
                        </Box>
                      </Box>

                      {requested ? (
                        <Box
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
                          <Text fontSize="sm" color="#47B881" fontWeight={500}>
                            Marketplace seller access has been requested. We'll
                            be in touch soon.
                          </Text>
                        </Box>
                      ) : (
                        <Button
                          height={35}
                          fontSize={15}
                          width="100%"
                          color="#fff"
                          letterSpacing="wider"
                          fontWeight={700}
                          textTransform="uppercase"
                          background="#47B881"
                          borderBottomLeftRadius="5"
                          borderBottomRightRadius="5"
                          borderTopLeftRadius="0"
                          borderTopRightRadius="0"
                          _hover={{ opacity: 0.8 }}
                        >
                          Confirm
                        </Button>
                      )}
                    </>
                  );
                case 1:
                  return (
                    <>
                      <Box padding={4}>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          marginBottom={15}
                        >
                          <Heading
                            fontSize="md"
                            fontWeight={500}
                            color="#425A70"
                          >
                            Your marketplace account has been approved.
                          </Heading>
                        </Box>
                        <Divider />

                        <Heading
                          fontSize="md"
                          fontWeight={500}
                          marginBottom={2}
                          color="#425A70"
                        >
                          Stripe Integration
                        </Heading>
                        <Box
                          as="p"
                          marginBottom={5}
                          color="#425A70"
                          fontSize="sm"
                        >
                          By connecting Stripe, the marketplace will be able to
                          accept payments from buyers on your behalf. Funds and
                          payouts can be managed from your Stripe dashboard.
                        </Box>
                      </Box>
                      <a
                        href={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_FP0VAQDBcM7LCrGiCMuARMl7DJoTyZM6&scope=read_write&state=${id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          height={35}
                          fontSize={15}
                          width="100%"
                          color="#fff"
                          letterSpacing="wider"
                          fontWeight={700}
                          textTransform="uppercase"
                          background="#1070ca"
                          borderBottomLeftRadius="5"
                          borderBottomRightRadius="5"
                          borderTopLeftRadius="0"
                          borderTopRightRadius="0"
                          _hover={{ opacity: 0.8 }}
                        >
                          Connect Stripe
                        </Button>
                      </a>
                    </>
                  );
                case 2:
                  return (
                    <Box padding={4}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        marginBottom={15}
                      >
                        <span role="img" aria-label="confetti">
                          🎉
                        </span>
                        <Heading fontSize="md" fontWeight={600} color="#425A70">
                          You're all set!
                        </Heading>
                      </Box>

                      <Divider />
                      <Heading
                        fontSize="md"
                        fontWeight={500}
                        marginBottom={2}
                        color="#425A70"
                      >
                        Adding Products
                      </Heading>
                      <Box
                        as="p"
                        marginBottom={25}
                        color="#425A70"
                        fontSize="sm"
                      >
                        To add products to the marketplace, simply navigate to
                        the all products link. You will see a sync button next
                        to each product. Once clicked, you can edit the item,
                        add quantity, and have the item listed. We currently
                        only support free shipping so please price this into the
                        cost of the item.
                      </Box>
                      <Heading
                        fontSize="md"
                        fontWeight={500}
                        marginBottom={2}
                        color="#425A70"
                      >
                        Orders
                      </Heading>
                      <Box
                        as="p"
                        marginBottom={25}
                        color="#425A70"
                        fontSize="sm"
                      >
                        Once your item in the marketplace is sold, an order will
                        be created on the Shopify shop that the product was
                        added from. Payments will be handled by Stripe and a
                        link to the Stripe payment page will be added to the
                        created order.
                      </Box>
                      <Heading
                        fontSize="md"
                        fontWeight={500}
                        marginBottom={2}
                        color="#425A70"
                      >
                        Payments
                      </Heading>
                      <Box
                        as="p"
                        marginBottom={25}
                        color="#425A70"
                        fontSize="sm"
                      >
                        The openship marketplace has a 4% seller fee on each
                        order (this does not include credit card processing fees
                        from Stripe). Payouts and chargebacks are to be handled
                        directly on your Stripe dashboard.
                      </Box>
                      <Heading
                        fontSize="md"
                        fontWeight={500}
                        marginBottom={2}
                        color="#425A70"
                      >
                        Fulfillment
                      </Heading>
                      <Box as="p" color="#425A70" fontSize="sm">
                        The created order on your Shopify shop can be fulfilled
                        like any other order. Once the order is fulfilled, the
                        tracking information will be synced directly to the
                        buyer's shop.
                      </Box>
                    </Box>
                  );
                default:
                  return <div>Error</div>;
              }
            })()}
          </Box>
        ))}
      </Box>
    </Box>
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
