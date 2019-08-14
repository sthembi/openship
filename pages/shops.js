import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import {
  Pane,
  Dialog,
  Heading,
  TextInput,
  Text,
  Icon,
  Switch,
} from 'evergreen-ui';
import Composer from 'react-composer';
import ShopList, {
  shopsQuery,
  shopsQueryVars,
} from '../components/shops/ShopList';

const CREATE_SHOP_MUTATION = gql`
  mutation CREATE_SHOP_MUTATION(
    $domain: String!
    $accessToken: String!
    $name: String!
  ) {
    upsertShop(accessToken: $accessToken, domain: $domain, name: $name) {
      id
    }
  }
`;

const WEBHOOK_MUTATION = gql`
  mutation createWebhook($domain: String!, $accessToken: String!) {
    createWebhook(domain: $domain, accessToken: $accessToken) {
      userErrors
      webhookSubscription
    }
  }
`;

export default class Shops extends Component {
  static async getInitialProps({ query: { shop, accessToken } }) {
    return { shop, accessToken };
  }

  static propTypes = {
    shop: PropTypes.string,
    accessToken: PropTypes.string,
  };

  /*eslint-disable */
  state = {
    open: this.props.shop && true,
    name: this.props.shop && this.props.shop.split(".")[0],
    checked: false
  };
  /*eslint-disable */

  handleClick = async (upsertShop, createWebhook) => {
    const data1 = await upsertShop();
    if (this.state.checked) {
      const data2 = await createWebhook();
    }
    this.setState({ open: false });
  };

  render() {
    const { shop, accessToken } = this.props;
    const { open, name, checked } = this.state;

    return (
      <>
        <Composer
          components={[
            <Mutation
              mutation={CREATE_SHOP_MUTATION}
              variables={{ domain: shop, accessToken, name }}
              refetchQueries={[
                { query: shopsQuery, variables: shopsQueryVars }
              ]}
            />,
            <Mutation
              mutation={WEBHOOK_MUTATION}
              variables={{ domain: shop, accessToken }}
            />
          ]}
        >
          {([upsertShop, createWebhook]) => (
            <>
              <Pane>
                <Dialog
                  width="440px"
                  isShown={open}
                  title="Add shop to Openship"
                  // hasHeader={false}
                  // hasFooter={false}
                  confirmLabel="Confirm"
                  intent="success"
                  onConfirm={() => this.handleClick(upsertShop, createWebhook)}
                >
                  {/* <Heading size={400}>Shop Name</Heading>
                  <TextInput
                    onChange={e => this.setState({ name: e.target.value })}
                    value={name}
                  />
                  <Heading size={400} marginTop={15}>
                    Shop URL
                  </Heading>
                  {shop} */}
                  <Pane>
                    {/* <Pane marginBottom={6}>
                      <Text
                        fontWeight={500}
                        size={500}
                        textTransform="capitalize"
                      >
                        {name}
                      </Text>
                      <TextInput
                        fontSize="16px"
                        onChange={e => this.setState({ name: e.target.value })}
                        value={name}
                        marginBottom={5}
                      />
                      <Heading lineHeight="10px" fontSize="12px" size={100}>
                        Name
                      </Heading>
                    </Pane> */}

                    {/* <Pane>
                      <Text fontWeight={500} size={400}>
                        {shop}
                      </Text>
                      <Heading lineHeight="10px" fontSize="10px" size={100}>
                        URL
                      </Heading>
                    </Pane> */}
                    <Pane
                      position="relative"
                      display="inline-flex"
                      height={32}
                      width="100%"
                      marginBottom={3}
                    >
                      <Pane
                        width={32}
                        height={32}
                        pointerEvents="none"
                        position="absolute"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Icon
                          icon="shop"
                          color="#8b949c"
                          size={12}
                          zIndex={3}
                        />
                      </Pane>
                      <TextInput
                        className="clean-input"
                        paddingLeft={32}
                        // name="Shop Name"
                        width="100%"
                        value={name}
                        fontSize={15}
                        onChange={e => this.setState({ name: e.target.value })}
                        marginBottom={15}
                        // placeholder="Shop Name"
                        backgroundColor="#F5F6F7 !important"
                      />
                    </Pane>
                    <Heading
                      lineHeight="10px"
                      fontSize="11px"
                      size={100}
                      padding={3}
                      marginBottom={10}
                    >
                      Shop Name
                    </Heading>
                    {/* <Pane>
                      <Text fontWeight={500} size={400}>
                        {shop}
                      </Text>
                      <Heading lineHeight="10px" fontSize="10px" size={100}>
                        URL
                      </Heading>
                    </Pane> */}
                    {/* <Pane
                      display="flex"
                      width="100%"
                      marginBottom={3}
                    >
                      <Pane
                        width={32}
                        height={32}
                        pointerEvents="none"
                        position="absolute"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Icon
                          icon="link"
                          color="#8b949c"
                          size={12}
                          zIndex={3}
                        />
                      </Pane>
                      <Pane height="32px">
                        <Text
                          // className="clean-input"
                          paddingLeft={32}
                          width="100%"
                          fontSize={15}
                          marginBottom={15}
                          height="100%"
                          // backgroundColor="#F5F6F7 !important"
                        >
                          {shop}
                        </Text>
                        </Pane>
                    </Pane> */}
                    <Pane display="flex" alignItems="center">
                      {/* <Pane paddingY={7} paddingX={10}>
                      <Icon
                        icon="link"
                        color="#8b949c"
                        size={12}
                        zIndex={3}
                      />
                      </Pane> */}
                      <Text paddingX={3} paddingY={2} fontSize={15}>
                        {shop}
                      </Text>
                    </Pane>
                    <Heading
                      lineHeight="10px"
                      fontSize="11px"
                      size={100}
                      padding={3}
                      marginBottom={15}
                    >
                      Shopify URL
                    </Heading>
                  </Pane>
                  <Pane display="flex" alignItems="center">
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
                      checked={checked}
                      onChange={e =>
                        this.setState({ checked: e.target.checked })
                      }
                    />
                  </Pane>
                </Dialog>
              </Pane>
              <ShopList />
            </>
          )}
        </Composer>
      </>
    );
  }
}
