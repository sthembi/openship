import React, { useState } from 'react';
import Link from 'next/link';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import {
  Box,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/core';
import { CURRENT_USER_QUERY } from '../user/User';
import Pagination from '../common/Pagination';
import { CardStyle } from '../common/DefaultStyles';
import MarketplaceSearch from './MarketplaceSearch';
import ZincSearch from './ZincSearch';
import ShopifySearch from './ShopifySearch';
import { CHANNELS_QUERY, channelsQueryVars } from '../layout/Page';

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

export const option = (name, options, update, selected) => (
  <Box marginBottom={2} marginRight={5}>
    <Heading fontSize="sm" color="text" fontWeight={500} marginBottom={0}>
      {name}
    </Heading>
    <Box display="flex">
      {options.length > 0 ? (
        options.map((a, index) => (
          <Box
            id={a}
            key={index}
            p={1}
            mr={2}
            mt={2}
            borderRadius={3}
            bg={a === selected ? '#e2e9f2' : 'transparent'}
            onClick={() => update(a)}
            cursor="pointer"
          >
            <Heading
              fontSize="xs"
              fontWeight={500}
              px={1}
              color={a === selected ? '#1070ca' : '#425a70'}
              letterSpacing="wide"
              textTransform="uppercase"
            >
              {a}
            </Heading>
          </Box>
        ))
      ) : (
        <Text mt={2} fontSize="sm" color="text">
          No Channels Added
        </Text>
      )}
    </Box>
  </Box>
);

const Find = ({
  headerSize,
  atcDisabled,
  addMPItem,
  addCustomItem,
  addZincItem,
}) => {
  const [value, setValue] = useState('price');
  const [searchBar, setSearchBar] = useState('');
  const [searchEntry, setSearchEntry] = useState('');
  const [limit, setLimit] = useState(10);
  const [pageNum, setPageNum] = useState(0);
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [price, setPrice] = useState(null);
  const [priceCurrency, setPriceCurrency] = useState('USD');
  const [itemLocationCountry, setItemLocationCountry] = useState('US');
  const [include, setInclude] = useState([]);
  const [exclude, setExclude] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState('Marketplace');

  const {
    data: { me },
  } = useQuery(CURRENT_USER_QUERY);

  const allChannels = useQuery(CHANNELS_QUERY, {
    variables: channelsQueryVars,
  });

  const { data, error: channelsError, loading: channelsLoading } = allChannels;

  const toast = useToast();

  return (
    <>
      <Box display="flex" py={4}>
        <Box flex={1} alignItems="center" display="flex">
          <Heading fontSize="2xl" color="text" fontWeight={500}>
            Marketplace
          </Heading>
        </Box>
      </Box>
      <Box {...CardStyle} background="white">
        {(() => {
          if (!me) return null;
          if (me.buyer && me.buyer.status) {
            return (
              <>
                <Box
                  display="flex"
                  paddingX="1em"
                  paddingY="1em"
                  flexWrap="wrap"
                >
                  <Pagination
                    leftDisabled={pageNum === 0}
                    onLeft={() => setPageNum(pageNum - 1)}
                    onRight={() => setPageNum(pageNum + 1)}
                  />
                  <Box flex={1}>
                    <InputGroup width="100%" borderColor="gray.300">
                      <InputLeftElement
                        children={<Icon name="search" color="gray.300" />}
                      />
                      <Input
                        value={searchBar}
                        onChange={e => {
                          setSearchBar(e.target.value);
                          setPageNum(0);
                        }}
                        onKeyPress={e => {
                          if (e.key === 'Enter') {
                            setSearchEntry(searchBar);
                          }
                        }}
                        placeholder="Search"
                      />
                    </InputGroup>
                  </Box>
                </Box>
                {(() => {
                  if (channelsError || !data || !data.channels) return null;
                  return (
                    <>
                      <Box
                        display="flex"
                        flexWrap="wrap"
                        background="#f5f5f5"
                        paddingY=".7em"
                        paddingX="1em"
                      >
                        {option(
                          'Channel',
                          data.channels.map(a => a.name),
                          a => setSelectedChannel(a),
                          selectedChannel
                        )}
                        {option(
                          'Location',
                          ['US', 'CN', 'All'],
                          a => setItemLocationCountry(a),
                          itemLocationCountry
                        )}
                        {option(
                          'Items per page',
                          [10, 50, 100],
                          a => setLimit(a),
                          limit
                        )}
                      </Box>
                      {searchEntry &&
                        data.channels.filter(
                          order => order.name === selectedChannel
                        )[0].type === 'MARKETPLACE' && (
                          <MarketplaceSearch
                            {...{
                              search: searchEntry,
                              limit,
                              sort: value,
                              pageNum,
                              exclude,
                              include,
                              priceCurrency,
                              price,
                              itemLocationCountry,
                              atcDisabled,
                              addMPItem,
                            }}
                          />
                        )}
                      {data.channels.length > 0 &&
                        data.channels.filter(
                          order => order.name === selectedChannel
                        )[0].type === 'ZINC' && (
                          <ZincSearch
                            addZincItem={addZincItem}
                            atcDisabled={atcDisabled}
                            searchEntry={searchEntry}
                            token={
                              data.channels.filter(c => c.type === 'ZINC')[0]
                                .settings.key
                            }
                          />
                        )}
                      {data.channels.length > 0 &&
                        data.channels.filter(
                          order => order.name === selectedChannel
                        )[0].type === 'SHOPIFY' && (
                          <ShopifySearch
                            addCustomItem={(a, b) =>
                              addCustomItem(
                                a,
                                b,
                                data.channels.filter(
                                  order => order.name === selectedChannel
                                )[0].settings.shopURL,
                                data.channels.filter(
                                  order => order.name === selectedChannel
                                )[0].settings.key
                              )
                            }
                            checkout={() =>
                              toast({
                                position: 'top-right',
                                title: `Checkout`,
                                status: 'success',
                                duration: 2000,
                                isClosable: true,
                              })
                            }
                            client="Marketplace"
                            atcDisabled={atcDisabled}
                            searchEntry={searchEntry}
                            apiKey={
                              data.channels.filter(
                                order => order.name === selectedChannel
                              )[0].settings.key
                            }
                            url={
                              data.channels.filter(
                                order => order.name === selectedChannel
                              )[0].settings.shopURL
                            }
                          />
                        )}
                    </>
                  );
                })()}
              </>
            );
          }
          return (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              height="200px"
            >
              <Link href="/settings">
                <a>
                  <Button background="#DDEBF7" borderRadius={3}>
                    <Heading fontSize="lg" fontWeight={700} color="#1070CA">
                      APPLY FOR BETA ACCESS
                    </Heading>
                  </Button>
                </a>
              </Link>
            </Box>
          );
        })()}
      </Box>
    </>
  );
};

export default Find;
