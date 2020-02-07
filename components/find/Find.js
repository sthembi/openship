import React, { Component } from "react";
import Link from "next/link";
import { gql } from "apollo-boost";
import {
  Pane,
  Heading,
  Text,
  SearchInput,
  Icon,
  TextInput,
  IconButton,
  Spinner,
  TagInput,
  toaster,
  Tablist,
  Tab,
  Avatar
} from "evergreen-ui";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import MktProduct from "./MarketplaceSearch/MktProduct";
import AmzProduct from "./ZincSearch/AmzProduct";
import User from "../user/User";
import Pagination from "../common/Pagination";
import TextButton from "../common/Button";
import { CardStyle } from "../common/DefaultStyles";
import { channelsQuery, channelsQueryVars } from "../layout/Header";
import MarketplaceSearch from "./MarketplaceSearch";
import ZincSearch from "./ZincSearch";
import ShopifySearch from "./ShopifySearch";

export const getItemGroup = gql`
  query getItemGroup($itemID: String) {
    getItemGroup(itemID: $itemID) {
      item
    }
  }
`;

const sortOptions = [
  {
    label: "Lowest Price",
    value: "price"
  },
  {
    label: "Highest Price",
    value: "-price"
  },
  {
    label: "Best Match",
    value: "match"
  }
];

export const option = (name, options, update, selected) => (
  <Pane marginBottom={10} marginRight={10}>
    <Heading size={500} fontSize="12px" fontWeight={500} marginBottom={2}>
      {name}
    </Heading>
    <Tablist>
      {options.map((a, index) => (
        <Tab
          key={index}
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

export default class Find extends Component {
  static propTypes = {
    headerSize: PropTypes.number,
    atcDisabled: PropTypes.bool,
    addVariant: PropTypes.func
  };

  state = {
    sort: {
      label: "Lowest Price",
      value: "price"
    },
    searchBar: "",
    searchEntry: null,
    limit: 10,
    pageNum: 0,
    min: "",
    max: "",
    price: null,
    priceCurrency: "USD",
    itemLocationCountry: "US",
    include: [],
    exclude: [],
    selectedChannel: "Marketplace",
    zincResults: []
  };

  render() {
    const {
      headerSize,
      atcDisabled,
      addMPItem,
      addCustomItem,
      addZincItem
    } = this.props;
    const {
      pageNum,
      searchBar,
      sort,
      limit,
      itemLocationCountry,
      selectedChannel,
      min,
      max,
      include,
      exclude,
      searchEntry,
      priceCurrency,
      price
    } = this.state;
    return (
      <>
        <Pane display="flex" paddingTop={16} paddingBottom={16}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading size={headerSize || 700}>Marketplace</Heading>
          </Pane>
        </Pane>
        <Pane {...CardStyle} background="white">
          <User>
            {({ data: { me } }) => {
              if (!me) return null;
              if (me.buyer && me.buyer.status) {
                return (
                  <>
                    <Pane
                      display="flex"
                      paddingX="1em"
                      paddingY="1em"
                      flexWrap="wrap"
                    >
                      <Pagination
                        leftDisabled={pageNum === 0}
                        onLeft={() =>
                          this.setState(state => ({
                            pageNum: state.pageNum - 1
                          }))
                        }
                        onRight={() =>
                          this.setState(state => ({
                            pageNum: state.pageNum + 1
                          }))
                        }
                      />
                      <Pane flex={1}>
                        <SearchInput
                          placeholder="Search"
                          boxShadow="none"
                          width="100%"
                          height={36}
                          value={searchBar}
                          onChange={e =>
                            this.setState({
                              searchBar: e.target.value,
                              pageNum: 0
                            })
                          }
                          onKeyPress={e => {
                            if (e.key === "Enter") {
                              this.setState(state => ({
                                searchEntry: state.searchBar
                              }));
                            }
                          }}
                        />
                      </Pane>
                    </Pane>
                    <Query query={channelsQuery} variables={channelsQueryVars}>
                      {({ data, error, loading }) => {
                        if (error || !data.channels) return null;
                        const { channels } = data;
                        return (
                          <>
                            <Pane
                              display="flex"
                              flexWrap="wrap"
                              background="#f5f5f5"
                              paddingY=".7em"
                              paddingX="1em"
                            >
                              {option(
                                "Channel",
                                channels.map(a => a.name),
                                a => this.setState({ selectedChannel: a }),
                                selectedChannel
                              )}
                              {option(
                                "Location",
                                ["US", "CN", "All"],
                                a => this.setState({ itemLocationCountry: a }),
                                itemLocationCountry
                              )}
                              {option(
                                "Items per page",
                                [10, 50, 100],
                                a => this.setState({ limit: a }),
                                limit
                              )}
                            </Pane>
                            {searchEntry &&
                              channels.filter(
                                order => order.name === selectedChannel
                              )[0].type === "MARKETPLACE" && (
                                <MarketplaceSearch
                                  {...{
                                    search: searchEntry,
                                    limit,
                                    sort: sort.value,
                                    pageNum,
                                    exclude,
                                    include,
                                    priceCurrency,
                                    price,
                                    itemLocationCountry,
                                    atcDisabled
                                  }}
                                />
                              )}
                            {channels.filter(
                              order => order.name === selectedChannel
                            )[0].type === "ZINC" && (
                              <ZincSearch
                                addZincItem={addZincItem}
                                atcDisabled={atcDisabled}
                                searchEntry={searchEntry}
                                token={
                                  channels.filter(c => c.type === "ZINC")[0]
                                    .settings.key
                                }
                              />
                            )}
                            {channels.filter(
                              order => order.name === selectedChannel
                            )[0].type === "SHOPIFY" && (
                              <ShopifySearch
                                addVariantToCart={(a, b) => addCustomItem(a, b)}
                                checkout={() => toaster.success(`checkout`)}
                                client="Marketplace"
                                atcDisabled={atcDisabled}
                                searchEntry={searchEntry}
                              />
                            )}
                          </>
                        );
                      }}
                    </Query>
                  </>
                );
              }
              return (
                <Pane
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  height="200px"
                >
                  <Link href="/settings">
                    <a>
                      <TextButton intent="primary" height={30} fontSize={16}>
                        Apply for Beta Access
                      </TextButton>
                    </a>
                  </Link>
                </Pane>
              );
            }}
          </User>
        </Pane>
      </>
    );
  }
}
