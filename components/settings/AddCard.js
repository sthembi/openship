import React from 'react';
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe,
} from 'react-stripe-elements';
import { Box, Heading, Button, Input } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const createOptions = (fontSize, padding) => ({
  style: {
    base: {
      fontSize,
      color: '#424770',
      letterSpacing: '0.025em',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      '::placeholder': {
        color: '#aab7c4',
      },
      padding,
    },
    invalid: {
      color: '#9e2146',
    },
  },
});

class _CardForm extends React.Component {
  static propTypes = {
    stripe: PropTypes.object,
    fontSize: PropTypes.number,
  };

  state = {
    name: '',
    addressLine1: '',
    addressLine2: '',
    addressCity: '',
    addressState: '',
    addressZip: '',
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { stripe } = this.props;
    if (stripe) {
      stripe
        .createToken({
          ...this.state,
        })
        .then(async payload => {
          const customer = await this.props.createCustomer({
            variables: {
              userInput: { token: { id: payload.token.id } },
            },
          });
        });
    }
  };

  render() {
    const { fontSize } = this.props;
    const { name, addressLine1, addressLine2 } = this.state;
    return (
      <>
        <form onSubmit={e => this.handleSubmit(e, createCustomer)}>
          <Box padding={4} paddingBottom={2}>
            <Heading
              fontSize="md"
              marginBottom={2}
              fontWeight={500}
              color="#425A70"
            >
              Name
            </Heading>
            <Box elevation={1} borderRadius={3} marginBottom={4} width="100%">
              <Input
                value={name}
                onChange={e => this.setState({ name: e.target.value })}
                placeholder="James Michael"
                height="32px"
                px={3}
                borderColor="transparent"
              />
            </Box>
            <Heading
              fontSize="md"
              marginBottom={2}
              fontWeight={500}
              color="#425A70"
            >
              Address
            </Heading>
            <Box elevation={1} borderRadius={3} marginBottom={4} width="100%">
              <Input
                value={addressLine1}
                onChange={e => this.setState({ addressLine1: e.target.value })}
                placeholder="2 Infinite Loop"
                height="32px"
                px={3}
                borderColor="transparent"
              />
            </Box>
            <Heading
              fontSize="md"
              marginBottom={2}
              fontWeight={500}
              color="#425A70"
            >
              Suite (optional)
            </Heading>
            <Box elevation={1} borderRadius={3} marginBottom={4} width="100%">
              <Input
                value={addressLine2}
                onChange={e => this.setState({ addressLine2: e.target.value })}
                placeholder="Suite 5"
                height="32px"
                px={3}
                borderColor="transparent"
              />
            </Box>

            <Heading
              fontSize="md"
              marginBottom={2}
              fontWeight={500}
              color="#425A70"
            >
              Credit or Debit Card Number
            </Heading>
            <Box
              marginBottom={4}
              background="#fff"
              padding={2}
              borderRadius={3}
              elevation={1}
            >
              <CardElement {...createOptions(fontSize)} />
            </Box>
          </Box>

          <Button
            height={35}
            fontSize={15}
            width="100%"
            color="#fff"
            letterSpacing="wider"
            fontWeight={700}
            textTransform="uppercase"
            background="#1070ca"
            borderBottomLeftRadius="5"
            borderBottomRightRadius="5"
            borderTopLeftRadius="0"
            borderTopRightRadius="0"
            _hover={{ opacity: 0.8 }}
          >
            Submit
          </Button>
        </form>
      </>
    );
  }
}
const CardForm = injectStripe(_CardForm);
/* eslint-disable */
class AddCard extends React.Component {
  constructor() {
    super();
    this.state = {
      renderElements: false
    };
  }

  componentDidMount() {
    this.setState({ renderElements: true });
  }

  render() {
    const { renderElements } = this.state;
    return (
      renderElements && (
        <StripeProvider apiKey="pk_test_8DBiS9gU5BhsZZ0KkXllJppT00APOMomgF">
          <Elements>
            <CardForm fontSize={12} />
          </Elements>
        </StripeProvider>
      )
    );
  }
}
/* eslint-disable */

export default AddCard;
