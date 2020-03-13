import React from 'react';
import { Box, Heading, Text, Icon, Divider, Button } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const sucessCard = {
  paddingX: 10,
  paddingY: 5,
  background: '#F1FAF5',
  display: 'flex',
  alignItems: 'center',
};

const buyerOnboarding = ({
  buyerStep,
  requested,
  loading,
  createCustomer,
  addCardComp,
}) => {
  const tabs = ['Buyer Access', 'Payment Method', 'Ready to go'];
  async function onConfirm() {
    const res = await createCustomer({
      variables: {
        userInput: {
          questions: [{ request: true }],
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
            justifyContent="center"
            alignItems="center"
            padding={13}
            flexWrap="wrap"
            {...index <= buyerStep && {
              background: '#123950',
            }}
            {...index === 0 && {
              borderTopLeftRadius: '5px',
            }}
            {...index === 1 &&
              buyerStep === 0 && {
                borderRight: '2px solid #f0f0f0',
              }}
            {...index === 2 && {
              borderTopRightRadius: '5px',
            }}
          >
            <Icon
              name="check-circle"
              size={4}
              color={index <= buyerStep ? 'green.400' : 'white'}
              bg={index <= buyerStep ? 'white' : 'green.400'}
              borderRadius="999px"
              p={index <= buyerStep ? '0px' : '1px'}
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
              {...index <= buyerStep && { fontWeight: '600', color: '#fff' }}
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
            aria-hidden={index !== buyerStep}
            display={index === buyerStep ? 'block' : 'none'}
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
                            Getting started as a marketplace buyer
                          </Heading>
                        </Box>
                        <Divider />

                        <Heading
                          fontSize="md"
                          marginBottom={2}
                          color="#425A70"
                          fontWeight={500}
                        >
                          Requesting Buyer Access
                        </Heading>
                        <Box
                          as="p"
                          color="#425A70"
                          fontSize="sm"
                          marginBottom={2}
                        >
                          Since we are in Beta, we will be allowing users to use
                          the marketplace in batches. Simply click the request
                          access button and we'll notify you when access has
                          been approved.
                        </Box>
                      </Box>
                      {!requested ? (
                        <Box
                          {...sucessCard}
                          padding={15}
                          borderTop="2px solid #f0f0f0"
                          borderBottomLeftRadius="5px"
                          borderBottomRightRadius="5px"
                          borderTopLeftRadius="0"
                          borderTopRightRadius="0"
                        >
                          <Icon
                            icon="endorsed"
                            color="#47B881"
                            marginRight={10}
                          />
                          <Text fontSize="sm" color="#47B881" fontWeight={500}>
                            Marketplace buyer access has been requested. We'll
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
                          background="#14B5D0"
                          borderBottomLeftRadius="5"
                          borderBottomRightRadius="5"
                          borderTopLeftRadius="0"
                          borderTopRightRadius="0"
                          _hover={{ opacity: 0.8 }}
                        >
                          Request Access
                        </Button>
                      )}
                    </>
                  );
                case 1:
                  return (
                    <>
                      <Box padding={4} paddingBottom={0}>
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
                            Please add a payment method
                          </Heading>
                        </Box>
                      </Box>
                      <Box bg="gray.100">
                        <Box
                          flexShrink={0}
                          height={0.5}
                          backgroundColor="#E4E7EB"
                          borderRadius={1}
                        />
                        {addCardComp}
                      </Box>
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
                        Using the Marketplace
                      </Heading>
                      <Box
                        as="p"
                        marginBottom={25}
                        color="#425A70"
                        fontSize="sm"
                      >
                        You can access the marketplace under the pending tab.
                        When you fulfill your shop order using the marketplace,
                        it will be placed under the processed tab. Once the
                        marketplace seller ships the item, we will fulfill the
                        order on your shop.
                      </Box>
                      <Heading
                        fontSize="md"
                        fontWeight={500}
                        marginBottom={2}
                        color="#425A70"
                      >
                        We're still in Beta!
                      </Heading>
                      <Box
                        as="p"
                        marginBottom={25}
                        color="#425A70"
                        fontSize="sm"
                      >
                        Please note we are still squashing bugs and making
                        improvements. If you have any issues, please open a
                        ticket here or an issue on Github.
                      </Box>

                      <Heading
                        fontSize="md"
                        fontWeight={500}
                        marginBottom={2}
                        color="#425A70"
                      >
                        Upcoming Features
                      </Heading>
                      <Box as="p" color="#425A70" fontSize="sm">
                        We are working on new features and as a beta tester, you
                        will get first access when these are ready.
                      </Box>
                      <Box as="li" color="#425A70" fontSize="sm" my={2}>
                        Automatic returns for marketplace orders
                      </Box>
                      <Box as="li" color="#425A70" fontSize="sm" my={2}>
                        3rd party returns integration (Returnly, Return Magic,
                        etc.)
                      </Box>
                      <Box as="li" color="#425A70" fontSize="sm" my={2}>
                        Bulk buying from marketplace sellers
                      </Box>
                      <Box as="li" color="#425A70" fontSize="sm" my={2}>
                        Fulfillment center integration (ShipBob, ShipMonk,
                        Rakuten 3PL, etc.)
                      </Box>
                    </Box>
                  );
                default:
                  return <div>hi</div>;
              }
            })()}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default buyerOnboarding;

buyerOnboarding.propTypes = {
  buyerStep: PropTypes.number.isRequired,
  requested: PropTypes.bool,
  shopName: PropTypes.string,
  setShopName: PropTypes.func,
  reviews: PropTypes.string,
  setReviews: PropTypes.func,
  threshold: PropTypes.string,
  setThreshold: PropTypes.func,
  error: PropTypes.object,
  loading: PropTypes.bool,
  createCustomer: PropTypes.func,
};
