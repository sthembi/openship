import React, { Component } from 'react';
import Link from 'next/link';
import { gql } from 'apollo-boost';
import {
  Pane,
  Heading,
  Button,
  SearchInput,
  SelectMenu,
  TextInput,
  IconButton,
  Spinner,
  TagInput,
  toaster,
} from 'evergreen-ui';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Product from './findListItem/Product';
import User from '../user/User';
import Pagination from '../common/Pagination';
import TextButton from '../common/Button';

import { CardStyle } from '../common/DefaultStyles';

const getItems = gql`
  query getItems(
    $search: String
    $limit: Int
    $sort: String
    $pageNum: Int
    $filter: Json
  ) {
    getItems(
      search: $search
      limit: $limit
      sort: $sort
      pageNum: $pageNum
      filters: $filter
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
    limit: 100,
    pageNum: 0,
    min: '',
    max: '',
    price: null,
    priceCurrency: 'USD',
    itemLocationCountry: 'US',
    include: [],
    exclude: [],
  };

  render() {
    const { headerSize, atcDisabled, addVariant } = this.props;
    const {
      pageNum,
      searchBar,
      sort,
      limit,
      itemLocationCountry,
      min,
      max,
      include,
      exclude,
      searchEntry,
      priceCurrency,
      price,
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
                      paddingTop="1em"
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
                            }
                          }}
                        />
                      </Pane>
                    </Pane>
                    <Pane
                      display="block"
                      paddingX="1em"
                      paddingY=".5em"
                      maxWidth="100%"
                    >
                      <Pane
                        display="flex"
                        flexWrap="wrap"
                        alignContent="space-around"
                      >
                        <Pane marginRight={10} marginBottom={4}>
                          <SelectMenu
                            hasFilter={false}
                            title="Sort by..."
                            options={sortOptions.map(option => ({
                              label: option.label,
                              value: option.value,
                            }))}
                            selected={sort.value}
                            onSelect={item => this.setState({ sort: item })}
                          >
                            <Button height={24}>
                              {sort.label || 'Sort by...'}
                            </Button>
                          </SelectMenu>
                        </Pane>
                        <Pane marginRight={10} marginBottom={7}>
                          <SelectMenu
                            hasFilter={false}
                            title="Items per page..."
                            options={[10, 50, 100].map(label => ({
                              label,
                              value: label,
                            }))}
                            selected={limit}
                            onSelect={item =>
                              this.setState({ limit: item.value })
                            }
                          >
                            <Button height={24}>
                              {`${limit} per page` || 'Items per page...'}
                            </Button>
                          </SelectMenu>
                        </Pane>
                        <Pane marginRight={10} marginBottom={4}>
                          <SelectMenu
                            hasFilter={false}
                            title="Location"
                            options={['US', 'CN', 'All'].map(label => ({
                              label,
                              value: label,
                            }))}
                            selected={
                              itemLocationCountry === null
                                ? 'All'
                                : itemLocationCountry
                            }
                            onSelect={item =>
                              this.setState({
                                itemLocationCountry:
                                  item.value === 'All' ? null : item.value,
                              })
                            }
                          >
                            <Button height={24}>
                              {itemLocationCountry == null
                                ? 'All'
                                : itemLocationCountry || 'Location'}
                            </Button>
                          </SelectMenu>
                        </Pane>
                        <Pane display="flex" marginBottom={7} marginRight={10}>
                          <TextInput
                            height={24}
                            width={40}
                            placeholder="min"
                            value={min}
                            onChange={e =>
                              this.setState({ min: e.target.value })
                            }
                          />
                          <TextInput
                            height={24}
                            marginLeft={6}
                            width={40}
                            placeholder="max"
                            value={max}
                            onChange={e =>
                              this.setState({ max: e.target.value })
                            }
                          />
                          <IconButton
                            height={24}
                            marginLeft={6}
                            icon="tick"
                            intent="success"
                            onClick={() =>
                              this.setState(state => ({
                                price: `[${state.min}..${state.max}]`,
                              }))
                            }
                          />
                        </Pane>
                      </Pane>
                      <Pane display="flex" flexWrap="wrap">
                        <TagInput
                          marginRight={8}
                          marginBottom={5}
                          maxHeight={32}
                          overflow="auto"
                          inputProps={{ placeholder: 'Only Include...' }}
                          values={include}
                          onChange={value => {
                            this.setState({ include: value });
                          }}
                          type="search"
                        />
                        <TagInput
                          inputProps={{ placeholder: 'Exclude...' }}
                          marginBottom={5}
                          maxHeight={32}
                          overflow="auto"
                          values={exclude}
                          onChange={value => {
                            this.setState({ exclude: value });
                          }}
                          type="search"
                        />
                      </Pane>
                    </Pane>
                    {searchEntry && (
                      <Query
                        query={getItems}
                        variables={{
                          search: searchEntry,
                          limit,
                          sort: sort.value,
                          pageNum,
                          filter: `priceCurrency:${priceCurrency},price:${price},itemLocationCountry:${itemLocationCountry},sellers:${JSON.stringify(
                            include
                          )
                            .replace('[', '{')
                            .replace(']', '}')
                            .replace(/,/g, '|')},
                  excludeSellers:${JSON.stringify(exclude)
                    .replace('[', '{')
                    .replace(']', '}')
                    .replace(/,/g, '|')}`,
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
                              <Pane paddingX="1em" paddingBottom="1em">
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
                                  // <FindListItem
                                  //   addToCart={this.props.addToCart}
                                  //   client="Marketplace"
                                  //   product={product.node}
                                  // />
                                  <Product
                                    // addVariantToCart={(a, b) =>
                                    //   toaster.success(`${a} ${b} addVariantToCart`)
                                    // }
                                    addWidget={addVariant}
                                    addVariantToCart={(a, b) =>
                                      addVariant(a, b)
                                    }
                                    checkout={() => toaster.success(`checkout`)}
                                    // checkout={this.props.checkout}
                                    key={product.node.id.toString()}
                                    product={product.node}
                                    client="Marketplace"
                                    atcDisabled={atcDisabled}
                                    // buttons={
                                    //   <Pane marginLeft="auto" height={20}>
                                    //     <AddProduct product={product.node} />
                                    //   </Pane>
                                    // }
                                  />
                                )
                              )}
                            </>
                          );
                        }}
                      </Query>
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
