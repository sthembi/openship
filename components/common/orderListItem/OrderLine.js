import { Pane, Heading, Text, Avatar, Strong } from 'evergreen-ui';
import PropTypes from 'prop-types';

const OrderLine = props => {
  const { item } = props;

  const priceString = (price, quantity) => {
    const total = Math.round(price * quantity * 100).toString();
    return `${total.substring(0, total.length - 2)}.${total.substring(
      total.length - 2
    )}`;
  };

  return (
    <>
      <Pane background="#fff" border="muted" marginBottom={5}>
        <Pane display="flex" alignItems="center">
          <Pane height="100%" background="white">
            <Avatar
              src={item.img ? item.img : item.image && item.image.originalSrc}
              borderRadius={0}
              size={70}
              backgroundColor="white"
            />
          </Pane>
          <Pane borderLeft="muted" padding={5} paddingLeft={10}>
            <Heading size={300}>{item.name}</Heading>
            <Text size={300}>{item.id}</Text>
            <br />
            <Text size={300}>{item.product_id}</Text>
            <Pane display="flex">
              {/* <Text size={300}>{lineItem.variant.title}</Text>
              <Pane marginX={5}>·</Pane> */}
              {item.quantity > 1 && (
                <Pane>
                  <Text size={300} color="muted">
                    $
                    {item.price
                      ? item.price
                      : item.discountedUnitPriceSet.shopMoney.amount}{' '}
                    x {item.quantity}
                  </Text>
                </Pane>
              )}
              <Heading size={300} marginRight={10} color="green">
                $
                {item.price
                  ? priceString(item.price, item.quantity)
                  : item.discountedUnitPriceSet.shopMoney.amount *
                    item.quantity}
              </Heading>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    </>
  );
};

export default OrderLine;

OrderLine.propTypes = {
  item: PropTypes.object.isRequired,
};
