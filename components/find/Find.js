import React, { Component } from 'react';
import Link from 'next/link';
import { gql } from 'apollo-boost';
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
  Avatar,
} from 'evergreen-ui';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Product from './findListItem/Product';
import AmzProduct from './findListItem/AmzProduct';
import User from '../user/User';
import Pagination from '../common/Pagination';
import TextButton from '../common/Button';
import { CardStyle } from '../common/DefaultStyles';
import { front, prodFront } from '../../config';

const getItems = gql`
  query getItems(
    $search: String
    $limit: Int
    $sort: String
    $pageNum: Int
    $exclude: Json
    $include: Json
    $priceCurrency: String
    $price: String
    $itemLocationCountry: String
  ) {
    getItems(
      search: $search
      limit: $limit
      sort: $sort
      pageNum: $pageNum
      exclude: $exclude
      include: $include
      priceCurrency: $priceCurrency
      price: $price
      itemLocationCountry: $itemLocationCountry
    ) {
      item
    }
  }
`;

export const getItemGroup = gql`
  query getItemGroup($itemID: String) {
    getItemGroup(itemID: $itemID) {
      item
    }
  }
`;

const sortOptions = [
  {
    label: 'Lowest Price',
    value: 'price',
  },
  {
    label: 'Highest Price',
    value: '-price',
  },
  {
    label: 'Best Match',
    value: 'match',
  },
];

const option = (name, options, update, selected) => (
  <Pane marginBottom={10} marginRight={10}>
    <Heading size={500} fontSize="12px" fontWeight={500} marginBottom={2}>
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

export default class Find extends Component {
  static propTypes = {
    headerSize: PropTypes.number,
    atcDisabled: PropTypes.bool,
    addVariant: PropTypes.func,
  };

  state = {
    sort: {
      label: 'Lowest Price',
      value: 'price',
    },
    searchBar: '',
    searchEntry: null,
    limit: 10,
    pageNum: 0,
    min: '',
    max: '',
    price: null,
    priceCurrency: 'USD',
    itemLocationCountry: 'US',
    include: [],
    exclude: [],
    selectedChannel: 'zinc',
    zincResults: [],
  };

  zincSearch = (searchEntry, token) => {
    console.log('called');
    fetch(
      `${
        process.env.NODE_ENV === 'development' ? front : prodFront
      }/api/zinc/search?query=${searchEntry}&token=${token}`
    )
      .then(res => res.json())
      .then(json => this.setState({ zincResults: json }))
      .catch(error => console.log('Error: ', error));
  };

  render() {
    const { headerSize, atcDisabled, addMPItem, addZincItem } = this.props;
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
      price,
      zincResults,
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
                            pageNum: state.pageNum - 1,
                          }))
                        }
                        onRight={() =>
                          this.setState(state => ({
                            pageNum: state.pageNum + 1,
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
                              pageNum: 0,
                            })
                          }
                          onKeyPress={e => {
                            if (e.key === 'Enter') {
                              this.setState(state => ({
                                searchEntry: state.searchBar,
                              }));
                              if (selectedChannel === 'zinc') {
                                this.zincSearch(searchBar, me.zincToken);
                              }
                            }
                          }}
                        />
                      </Pane>
                    </Pane>

                    <Pane
                      display="flex"
                      flexWrap="wrap"
                      background="#f5f5f5"
                      paddingY=".7em"
                      paddingX="1em"
                    >
                      {option(
                        'Channel',
                        ['zinc', 'marketplace'],
                        a => this.setState({ selectedChannel: a }),
                        selectedChannel
                      )}
                      {option(
                        'Location',
                        ['US', 'CN', 'All'],
                        a => this.setState({ itemLocationCountry: a }),
                        itemLocationCountry
                      )}
                      {option(
                        'Items per page',
                        [10, 50, 100],
                        a => this.setState({ limit: a }),
                        limit
                      )}
                    </Pane>
                    {searchEntry && selectedChannel === 'marketplace' && (
                      <Query
                        query={getItems}
                        variables={{
                          search: searchEntry,
                          limit,
                          sort: sort.value,
                          pageNum,
                          exclude,
                          include,
                          priceCurrency,
                          price,
                          itemLocationCountry,
                        }}
                      >
                        {({ data, error, loading }) => {
                          if (loading)
                            return (
                              <Pane
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                height="100vh"
                              >
                                <Spinner size={80} />
                              </Pane>
                            );
                          if (
                            error ||
                            !data.getItems.item ||
                            data.getItems.item.length < 1
                          )
                            return (
                              <Pane paddingX="1em" paddingY="1em">
                                <Pane
                                  background="tint2"
                                  display="flex"
                                  justifyContent="center"
                                  alignItems="center"
                                  flexDirection="column"
                                  borderRadius={3}
                                >
                                  <Heading margin="1em" size={600}>
                                    No items found.
                                  </Heading>
                                </Pane>
                              </Pane>
                            );
                          return (
                            <>
                              {data.getItems.item.data.products.edges.map(
                                product => (
                                  <Product
                                    addVariantToCart={(a, b) => addMPItem(a, b)}
                                    checkout={() => toaster.success(`checkout`)}
                                    key={product.node.id.toString()}
                                    product={product.node}
                                    client="Marketplace"
                                    atcDisabled={atcDisabled}
                                  />
                                )
                              )}
                            </>
                          );
                        }}
                      </Query>
                    )}
                    {selectedChannel === 'zinc' && zincResults.length ? (
                      zincResults.map(product => (
                        <AmzProduct
                          product={product}
                          addVariantToCart={a => toaster.success(a)}
                          atcDisabled={atcDisabled}
                          addZincItem={(a, b, c, d, e) =>
                            addZincItem(a, b, c, d, e)
                          }
                        />
                      ))
                    ) : (
                      <Pane paddingX="1em" paddingY="1em">
                        <Pane
                          background="tint2"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          flexDirection="column"
                          borderRadius={3}
                        >
                          <Heading margin="1em" size={600}>
                            No items found
                          </Heading>
                        </Pane>
                      </Pane>
                    )}
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
