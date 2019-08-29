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
          // lineHeight="16px"
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

// fetch('http://localhost:3000/api/zinc-api?search=shoes')
//   .then(response => response.json())
//   .then(json =>
//     json.map(
//       item => <div>{item.product_id}</div>
//   (
// <Pane
//   display="flex"
//   alignItems="center"
//   borderTop="0.1rem solid #dfe3e8"
// >
//   <Pane padding={15}>
//     {item.image && (
//       <Avatar
//         src={item.image}
//         alt={`${item.title} product shot`}
//         borderStyle="solid"
//         borderWidth="1px"
//         borderRadius={3}
//         borderColor="#e8e9ea"
//         size={90}
//       />
//     )}
//   </Pane>
//   <Pane
//     padding={15}
//     paddingLeft={0}
//     marginTop={3}
//     marginBottom="auto"
//   >
//     <Heading size={500}>
//       {item.product_id}
//     </Heading>
//     <Heading
//       size={400}
//       marginRight={10}
//       color="green"
//     >
//       ${item.price}
//     </Heading>
//   </Pane>
// </Pane>
// )
//   )
// );
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
    amzResults: [],
  };

  amzFunc = searchEntry => {
    fetch(`http://localhost:3000/api/zinc-api?search=${searchEntry}`)
      .then(res => res.json())
      .then(json => this.setState({ amzResults: json }))
      .catch(error => console.log('Error: ', error));

    if (this.state.amzResults) {
      return this.state.amzResults.map(item => (
        <Pane
          display="flex"
          alignItems="center"
          borderTop="0.1rem solid #dfe3e8"
        >
          <Pane padding={15}>
            {item.image && (
              <Avatar
                src={item.image}
                alt={`${item.title} product shot`}
                borderStyle="solid"
                borderWidth="1px"
                borderRadius={3}
                borderColor="#e8e9ea"
                size={90}
              />
            )}
          </Pane>
          <Pane padding={15} paddingLeft={0} marginTop={3} marginBottom="auto">
            <Heading size={500}>{`${item.title.slice(0, 70)}...`}</Heading>
            <Pane color="#F7D154" display="flex" alignItems="center">
              <Icon icon="star" size={15} paddingRight={3} />
              <Text paddingRight={12} lineHeight="unset">
                {item.stars}
              </Text>
              <Text size={300} color="muted" lineHeight="unset">
                {item.num_reviews} reviews
              </Text>
            </Pane>
            <a
              href={`https://amazon.com/gp/product/${item.product_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text size={300} lineHeight="12px">
                {item.product_id}
              </Text>
            </a>
            <Heading size={400} marginRight={10} color="green">
              ${item.price / 100}
            </Heading>
          </Pane>
        </Pane>
      ));
    }
  };

  render() {
    const { headerSize, atcDisabled, addVariant } = this.props;
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
      amzResults,
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
                            }
                          }}
                        />
                      </Pane>
                    </Pane>
                    {/* <Pane
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
                    </Pane> */}
                    <Pane
                      display="flex"
                      flexWrap="wrap"
                      background="#f5f5f5"
                      paddingY=".7em"
                      paddingX="1em"
                    >
                      {/* <Pane marginBottom={10} marginRight={10}>
                        <Heading
                          size={500}
                          fontSize="12px"
                          fontWeight={500}
                          marginBottom={2}
                        >
                          Channel
                        </Heading>
                        <Tablist
                        // marginBottom={10}
                        // display="flex"
                        // alignItems="center"
                        // flexBasis={240}
                        // marginRight={24}
                        >
                          {this.state.channels.map((channel, index) => (
                            <Tab
                              key={channel}
                              id={channel}
                              marginLeft={0}
                              height="20px"
                              fontSize="10px"
                              // lineHeight="16px"
                              marginBottom={3}
                              letterSpacing="0.3px"
                              fontWeight={400}
                              textTransform="uppercase"
                              onSelect={() =>
                                this.setState({ selectedChannel: index })
                              }
                              isSelected={index === this.state.selectedChannel}
                              aria-controls={`panel-${channel}`}
                            >
                              {channel}
                            </Tab>
                          ))}
                        </Tablist>
                      </Pane> */}
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
                    {searchEntry &&
                      selectedChannel === 'zinc' &&
                      this.amzFunc(searchEntry)}
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
