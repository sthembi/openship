import React from 'react';
import {
  Pane,
  Heading,
  Text,
  Tablist,
  Paragraph,
  Icon,
  ListItem,
} from 'evergreen-ui';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import AddCard from './AddCard';

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
  shopName,
  setShopName,
  reviews,
  setReviews,
  threshold,
  setThreshold,
  error,
  loading,
  createCustomer,
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
            {index <= buyerStep ? (
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
              {...index <= buyerStep && { fontWeight: '600', color: '#fff' }}
            >
              {tab}
            </Text>
            {/* <Pill
              color="green"
              isSolid
              fontSize="10px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon icon="tick" color="#fff" size={11} marginRight={4} />
              Pending Approval
            </Pill> */}
          </Pane>
          // <Pane
          //   display="flex"
          //   justifyContent="center"
          //   alignItems="center"
          //   // {...index !== 0 && { paddingLeft: 40 }}
          // >
          //   {index !== 0 && (
          //     <Pane
          //       height={3}
          //       width={40}
          //       marginLeft={7.5}
          //       backgroundColor={
          //         index <= currentStep ? 'rgb(70, 184, 128)' : '#a5adba'
          //       }
          //     />
          //   )}
          //   <Pane
          //     display="flex"
          //     justifyContent="center"
          //     alignItems="center"
          //     flexWrap="wrap"
          //   >

          //     <Icon
          //       icon="dot"
          //       size={22}
          //       color={index <= currentStep ? '#22d78a' : '#a5adba'}
          //     />

          //     <Text
          //       key={tab}
          //       id={tab}
          //       onClick={() => setCurrentStep(index)}
          //       aria-controls={`panel-${tab}`}
          //       color="#fff"
          //       {...index === currentStep && { fontWeight: '600' }}
          //     >
          //       {tab}
          //     </Text>
          //   </Pane>
          // </Pane>
        ))}
      </Tablist>
      <Pane
        background="white"
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
            aria-hidden={index !== buyerStep}
            display={index === buyerStep ? 'block' : 'none'}
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
                            Getting started as a marketplace buyer
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
                          Requesting Buyer Access
                        </Heading>
                        <Paragraph marginBottom={5}>
                          Since we are in Beta, we will be allowing users to use
                          the marketplace in batches. Simply click the request
                          access button and we'll notify you when access has
                          been approved.
                        </Paragraph>
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
                            Marketplace buyer access has been requested. We'll
                            be in touch soon.
                          </Text>
                        </Pane>
                      ) : (
                        <Button
                          height={35}
                          fontSize={15}
                          width="100%"
                          textColor="#fff"
                          background="#14B5D0"
                          borderBottomLeftRadius="5"
                          borderBottomRightRadius="5"
                          borderTopLeftRadius="0"
                          borderTopRightRadius="0"
                          onClick={onConfirm}
                          isLoading={loading}
                        >
                          Request Access
                        </Button>
                      )}
                    </>
                  );
                case 1:
                  return (
                    <>
                      <Pane padding={16} paddingBottom={0}>
                        <Pane
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          marginBottom={15}
                        >
                          <Heading size={500} color="#425A70">
                            Please add a payment method
                          </Heading>
                        </Pane>
                        <Pane
                          flexShrink={0}
                          height={3}
                          backgroundColor="#E4E7EB"
                          borderRadius={1}
                        />
                      </Pane>
                      <AddCard />
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
                        Using the Marketplace
                      </Heading>
                      <Paragraph marginBottom={25}>
                        You can access the marketplace under the pending tab.
                        When you fulfill your shop order using the marketplace,
                        it will be placed under the processed tab. Once the
                        marketplace seller ships the item, we will fulfill the
                        order on your shop.
                      </Paragraph>
                      <Heading size={400} marginBottom={4} color="#425A70">
                        We're still in Beta!
                      </Heading>
                      <Paragraph marginBottom={25}>
                        Please note we are still squashing bugs and making
                        improvements. If you have any issues, please open a
                        ticket here or an issue on Github.
                      </Paragraph>

                      <Heading size={400} marginBottom={4} color="#425A70">
                        Upcoming Features
                      </Heading>
                      <Paragraph>
                        We are working on new features and as a beta tester, you
                        will get first access when these are ready.
                      </Paragraph>
                      <ListItem>
                        Automatic returns for marketplace orders
                      </ListItem>
                      <ListItem>
                        3rd party returns integration (Returnly, Return Magic,
                        etc.)
                      </ListItem>
                      <ListItem>Bulk buying from marketplace sellers</ListItem>
                      <ListItem>
                        Fulfillment center integration (ShipBob, ShipMonk,
                        Rakuten 3PL, etc.)
                      </ListItem>
                    </Pane>
                  );
                default:
                  return <div>hi</div>;
              }
            })()}
          </Pane>
        ))}
      </Pane>
    </Pane>
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
