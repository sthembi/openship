import { useState } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import {
  Menu,
  Icon,
  Heading,
  Pane,
  TextInputField,
  Popover,
  IconButton,
  Tablist,
  Tab,
  toaster
} from "evergreen-ui";
import PropTypes from "prop-types";
import { Query, Mutation } from "react-apollo";

import gql from "graphql-tag";
import Button from "../common/Button";
import { shopsQuery, shopsQueryVars } from "../shops/ShopList";
import Signout from "../user/Signout";
import { front, prodFront } from "../../config";

export const channelsQuery = gql`
  query($first: Int!, $skip: Int!) {
    channels(orderBy: createdAt_ASC, first: $first, skip: $skip) {
      id
      type
      name
      createdAt
      settings
    }
  }
`;

export const channelsQueryVars = {
  skip: 0,
  first: 10
};

const CREATE_CHANNEL_MUTATION = gql`
  mutation CREATE_CHANNEL_MUTATION(
    $name: String!
    $type: ChannelType!
    $settings: Json!
  ) {
    createChannel(name: $name, type: $type, settings: $settings) {
      id
      type
      name
      createdAt
      settings
    }
  }
`;

const Divider = (
  <Pane
    flexShrink={0}
    height={3}
    backgroundColor="rgb(44, 71, 118)"
    borderRadius={1}
    marginY={5}
    marginX={12}
  />
);

const option = (name, options, update, selected) => (
  <Pane marginBottom={10} marginRight={10}>
    <Heading size={500} fontSize="14px" fontWeight={500} marginBottom={8}>
      {name}
    </Heading>
    <Tablist>
      {options.map((a, index) => (
        <Tab
          key={a}
          id={a}
          marginLeft={0}
          height="20px"
          fontSize="10px"
          marginBottom={3}
          letterSpacing="0.3px"
          fontWeight={400}
          textTransform="uppercase"
          onSelect={() => update(a)}
          isSelected={a === selected}
          aria-controls={`panel-${a}`}
        >
          {a}
        </Tab>
      ))}
    </Tablist>
  </Pane>
);

export const NavGroupTitle = ({ title, icon }) => (
  <Pane display="flex" alignItems="center">
    <Heading
      size={100}
      marginTop={8}
      marginBottom={8}
      marginLeft={16}
      marginRight={16}
      fontWeight={700}
      fontSize="13px"
      color="#d7dae0"
      flex={1}
    >
      {title}
    </Heading>
    {icon}
  </Pane>
);

function postRequest(url, data) {
  return fetch(url, {
    credentials: "same-origin", // 'include', default: 'omit'
    method: "POST", // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify({ shops: data }), // Use correct payload (matching 'Content-Type')
    headers: { "Content-Type": "application/json" }
  });
}

const Header = ({ router, logo, onClick }) => {
  const [type, setType] = useState("zinc");
  const [name, setName] = useState("");
  const [key, setKey] = useState("");
  const [secret, setSecret] = useState("");

  const { asPath } = router;

  const NavItem = ({ icon, iconColor, title, href }) => (
    <Pane
      borderLeft={`3px solid ${
        asPath && asPath.startsWith(href) ? "rgb(66, 95, 146)" : "transparent"
      }`}
      background={asPath && asPath.startsWith(href) ? "rgb(35, 61, 106)" : null}
      onSelect={onClick}
    >
      <Link href={href}>
        <Menu.Item
          icon={
            <Icon
              icon={icon}
              color={iconColor || "#ffffff"}
              marginRight="-8px"
              marginLeft="13px"
              size={15}
            />
          }
          onSelect={onClick}
          width="100%"
        >
          <Heading
            color="#fff"
            size={500}
            fontSize={15}
            overflow="visible"
            textTransform="capitalize"
          >
            {title}
          </Heading>
        </Menu.Item>
      </Link>
    </Pane>
  );

  return (
    <Pane
      background="rgb(23, 43, 77)"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Pane>
        <Menu width="100%">
          {logo}
          <Menu.Group>
            <NavGroupTitle title="Orders" />
            <NavItem icon="delta" title="Pending" href="/pending" />
            <NavItem icon="time" title="Processed" href="/processed" />
            <NavItem icon="tick-circle" title="Completed" href="/completed" />
          </Menu.Group>
          {Divider}
          <Menu.Group>
            <NavGroupTitle title="Products" />
            <NavItem icon="database" title="All Products" href="/products" />
            <NavItem icon="globe" title="Marketplace" href="/find" />
          </Menu.Group>
          {Divider}
          <Menu.Group>
            <NavGroupTitle
              title={
                <Link href="/shops">
                  <Pane color="#d7dae0" cursor="pointer">
                    Shops
                  </Pane>
                </Link>
              }
              icon={
                <Popover
                  content={
                    <Pane
                      width={300}
                      display="flex"
                      alignItems="left"
                      justifyContent="center"
                      flexDirection="column"
                      padding={15}
                    >
                      <form
                        method="GET"
                        action="/shopify/auth"
                        style={{ width: "100%" }}
                      >
                        <TextInputField label="Shop Name" marginBottom="10px" />
                        <TextInputField
                          label="Shop URL"
                          marginBottom="10px"
                          hint="Must end in .myshopify.com"
                          id="shop"
                          name="shop"
                        />

                        <Button
                          width="100%"
                          justifyContent="center"
                          appearance="primary"
                          intent="success"
                          fontSize="12px"
                          paddingY={3}
                        >
                          Go to Shopify
                        </Button>
                      </form>
                    </Pane>
                  }
                >
                  <IconButton
                    height={20}
                    icon="plus"
                    marginRight={16}
                    appearance="primary"
                    intent="success"
                    borderRadius={20}
                    outline="none"
                  />
                </Popover>
              }
            />
            <Query query={shopsQuery} variables={shopsQueryVars}>
              {({ data, error, loading }) => {
                if (error || !data.shops) return null;
                const { shops } = data;
                postRequest(
                  `${
                    process.env.NODE_ENV === "development" ? front : prodFront
                  }/_shopify`,
                  shops
                );

                return shops.map((shop, index) => (
                  <Pane key={index}>
                    <NavItem
                      icon={
                        <Pane
                          marginRight="-8px"
                          marginLeft="13px"
                          alignItems="center"
                          justifyContent="center"
                          display="flex"
                        >
                          <svg
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width="16px"
                            height="16px"
                            viewBox="0 0 48 48"
                            enableBackground="new 0 0 16 16"
                            xmlSpace="preserve"
                            fill="#47B881"
                          >
                            <path d="M24 0C10.746 0 0 10.746 0 24s10.746 24 24 24 24-10.746 24-24S37.254 0 24 0zm0 36c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z" />
                          </svg>
                        </Pane>
                      }
                      iconColor="success"
                      title={shop.name}
                      href={`/shop?shop=${shop.domain.split(".")[0]}`}
                    />
                  </Pane>
                ));
              }}
            </Query>
          </Menu.Group>
          {Divider}
          <Menu.Group>
            <NavGroupTitle
              title={
                <Pane color="#d7dae0" cursor="pointer">
                  Channels
                </Pane>
              }
              icon={
                <Popover
                  content={
                    <Pane
                      width={300}
                      display="flex"
                      alignItems="left"
                      justifyContent="center"
                      flexDirection="column"
                      padding={15}
                    >
                      {option(
                        "Channel Type",
                        ["zinc", "custom"],
                        a => setType(a),
                        type
                      )}
                      <TextInputField
                        label="Name"
                        marginBottom="10px"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                      {type === "zinc" && (
                        <TextInputField
                          label="API Key"
                          marginBottom="10px"
                          hint="You must get the key at Zinc.io"
                          value={key}
                          onChange={e => setKey(e.target.value)}
                        />
                      )}
                      {type === "custom" && (
                        <>
                          <TextInputField
                            label="API Key"
                            marginBottom="10px"
                            value={key}
                            onChange={e => setKey(e.target.value)}
                            // value={customKey}
                            // onChange={e => setCustomKey(e.value)}
                          />
                          <TextInputField
                            label="Secret"
                            value={secret}
                            onChange={e => setSecret(e.target.value)}
                          />
                        </>
                      )}

                      <Mutation
                        mutation={CREATE_CHANNEL_MUTATION}
                        refetchQueries={[
                          { query: channelsQuery, variables: channelsQueryVars }
                        ]}
                      >
                        {(createChannel, { error, loading }) => (
                          <Button
                            width="100%"
                            justifyContent="center"
                            appearance="primary"
                            intent="success"
                            fontSize="12px"
                            paddingY={3}
                            onClick={async () => {
                              await createChannel({
                                variables: {
                                  type: type.toUpperCase(),
                                  name: name,
                                  settings: {
                                    ...(key && { key }),
                                    ...(secret && { secret })
                                  }
                                }
                              });
                              setName("");
                              setKey("");
                              setSecret("");
                              toaster.success(`Channel has been added `);
                            }}
                          >
                            Add Channel
                          </Button>
                        )}
                      </Mutation>
                    </Pane>
                  }
                >
                  <IconButton
                    height={20}
                    icon="plus"
                    marginRight={16}
                    appearance="primary"
                    intent="success"
                    borderRadius={20}
                    outline="none"
                  />
                </Popover>
              }
            />
            <Query query={channelsQuery} variables={channelsQueryVars}>
              {({ data, error, loading }) => {
                if (error || !data.channels) return null;
                const { channels } = data;
                return channels.map((channel, index) => (
                  <Pane key={index}>
                    <NavItem
                      icon={
                        <Pane
                          marginRight="-8px"
                          marginLeft="13px"
                          alignItems="center"
                          justifyContent="center"
                          display="flex"
                        >
                          <svg
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width="16px"
                            height="16px"
                            viewBox="0 0 48 48"
                            enableBackground="new 0 0 16 16"
                            xmlSpace="preserve"
                            fill="#47B881"
                          >
                            <path d="M24 0C10.746 0 0 10.746 0 24s10.746 24 24 24 24-10.746 24-24S37.254 0 24 0zm0 36c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z" />
                          </svg>
                        </Pane>
                      }
                      iconColor="success"
                      title={channel.name}
                      href={`/channel?channel=${channel.name}`}
                    />
                  </Pane>
                ));
              }}
            </Query>
          </Menu.Group>
          {Divider}
          <Menu.Group>
            {/* <NavGroupTitle title="Settings" /> */}
            <NavItem icon="cog" title="Settings" href="/settings" />
          </Menu.Group>
        </Menu>
      </Pane>
      <Pane marginTop="auto">
        <Signout />
      </Pane>
    </Pane>
  );
};

export default withRouter(Header);
