import React from 'react';
import { Heading, Pane, Avatar, Text, Icon } from 'evergreen-ui';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Button from './Button';

export const getItem = gql`
  query getItem($itemID: String) {
    getItem(itemID: $itemID) {
      item
    }
  }
`;

function formatter(arg) {
  if (arg.toString().includes('|')) {
    return arg;
  }
  return `v1|${arg}|0`;
}

function LineItem(note, id) {
  const lineItem = note
    .filter(a => a.lineID.indexOf(id) >= 0)
    .map(b => (
      <Pane
        elevation={1}
        background="#F9F9FB"
        paddingX={10}
        paddingY={10}
        margin={15}
        marginLeft={25}
        display="flex"
        alignItems="center"
        borderLeft="3px solid #47B881"
        maxWidth="40em"
      >
        <Query
          query={getItem}
          variables={{
            itemID: formatter(b.marketID),
          }}
        >
          {({ loading, error, data }) => {
            if (loading)
              return (
                <>
                  <Pane className="shine" height={50} width={50} />
                  <Pane
                    className="shine"
                    marginLeft={10}
                    height={15}
                    flex={10}
                  />
                  <Pane
                    className="shine"
                    marginLeft={10}
                    justifyContent="flex-end"
                    borderRadius={30}
                    height={15}
                    width={57}
                  />
                </>
              );
            const { title, image } = data.getItem.item;
            return (
              <Pane display="flex" alignItems="center" maxWidth="100%">
                <Avatar
                  src={image.imageUrl && image.imageUrl}
                  borderStyle="solid"
                  borderWidth="1px"
                  borderRadius={3}
                  borderColor="#e8e9ea"
                  size={50}
                />
                <Pane display="flex" alignItems="center">
                  <Pane marginLeft={20} marginRight={10}>
                    <Heading size={300}>{title}</Heading>
                    <Text color="muted" fontSize={14} />
                  </Pane>
                  <Pane>
                    <Button
                      intent="primary"
                      onClick={e => {
                        e.stopPropagation();
                        window.open(`https://google.com`, '_blank');
                      }}
                    >
                      Order
                      <Icon color="#007489" icon="arrow-right" size={12} />
                    </Button>
                  </Pane>
                </Pane>
              </Pane>
            );
          }}
        </Query>
      </Pane>
    ));
  return lineItem;
}

export default LineItem;
