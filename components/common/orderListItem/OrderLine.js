import { Box, Heading, Text } from '@chakra-ui/core';
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
    <Box
      background="#fff"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="#e8e9ea"
      marginBottom={2}
    >
      <Box display="flex" alignItems="center">
        <Box height="100%" background="white" borderRight="1px solid #e8e9ea">
          <Box
            as="img"
            src={item.img ? item.img : item.image && item.image.originalSrc}
            width="100px"
          />
        </Box>
        <Box borderLeft="muted" padding={2} paddingLeft={4}>
          <Heading fontSize="xs" color="text">
            {item.name}
          </Heading>
          <Text fontSize="xs" color="text">
            {item.id}
          </Text>
          <Text fontSize="xs">{item.product_id}</Text>
          <Box display="flex">
            {item.quantity > 1 && (
              <Box>
                <Text fontSize="xs" color="muted">
                  $
                  {item.price
                    ? item.price
                    : item.discountedUnitPriceSet.shopMoney.amount}{' '}
                  x {item.quantity}
                </Text>
              </Box>
            )}
            <Heading fontSize="xs" marginRight={10} color="green.600">
              $
              {item.price
                ? priceString(item.price, item.quantity)
                : item.discountedUnitPriceSet.shopMoney.amount * item.quantity}
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderLine;

OrderLine.propTypes = {
  item: PropTypes.object.isRequired,
};
