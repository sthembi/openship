import { useState } from 'react';
import { Text, Pane, Heading, Avatar, IconButton } from 'evergreen-ui';
import PropTypes from 'prop-types';

function LineItem({ arg, handleLine }) {
  const initialQty = arg.quantity;
  const [quantity, setQuantity] = useState(arg.quantity);

  return (
    <Pane display="flex" alignItems="center" marginBottom={15}>
      <Pane display="block">
        <Pane>
          <Avatar
            src={arg.img ? arg.img : arg.image && arg.image.originalSrc}
            borderStyle="solid"
            borderWidth="1px"
            borderRadius={3}
            borderColor="#e8e9ea"
            size={50}
          />
        </Pane>
      </Pane>
      <Pane flex={2} display="block" marginLeft={10}>
        <Heading size={300}>{arg.name}</Heading>
        <Pane display="flex" alignItems="center">
          <IconButton
            icon="minus"
            appearance="minimal"
            height={15}
            marginRight={5}
            onClick={() => {
              handleLine(arg.id, quantity - 1, initialQty);
              setQuantity(Math.min(arg.quantity, Math.max(quantity - 1, 0)));
            }}
          />
          <Text size={300} marginRight={5}>
            {quantity}
          </Text>
          <IconButton
            icon="plus"
            appearance="minimal"
            height={15}
            onClick={() => {
              handleLine(arg.id, quantity + 1, initialQty);
              setQuantity(Math.min(arg.quantity, Math.max(quantity + 1, 0)));
            }}
          />
        </Pane>
      </Pane>
    </Pane>
  );
}

export default LineItem;

LineItem.propTypes = {
  arg: PropTypes.object,
  handleLine: PropTypes.func,
};
