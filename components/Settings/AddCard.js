import React from 'react';
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe,
} from 'react-stripe-elements';
import { Pane, Heading, TextInput } from 'evergreen-ui';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import Button from '../common/Button';
import { CURRENT_USER_QUERY } from '../user/User';

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

const CREATE_CUSTOMER = gql`
  mutation createCustomer($userInput: Json!) {
    createCustomer(userInput: $userInput) {
      cardObj
    }
  }
`;

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

  handleSubmit = (ev, createCustomerFunc) => {
    ev.preventDefault();
    const { stripe } = this.props;
    if (stripe) {
      stripe
        .createToken({
          ...this.state,
        })
        .then(async payload => {
          const customer = await createCustomerFunc({
            variables: {
              userInput: { token: { id: payload.token.id } },
            },
          });
        });
    } else {
    }
  };

  render() {
    const { fontSize } = this.props;
    const { name, addressLine1, addressLine2 } = this.state;
    return (
      <>
        <style jsx global>{`
          .card {
            box-shadow: none;
          }
          .card:active {
            z-index: 2;
            outline: none;
            box-shadow: inset 0 0 2px rgba(67, 90, 111, 0.14),
              inset 0 0 0 1px #579ad9, 0 0 0 3px rgba(16, 112, 202, 0.14);
            z-index: 2;
            outline: none;
          }
          .card:selected {
            opacity: 0.8;
            border-color: transparent;
            border: 'none';
          }
          .card:focus {
            z-index: 2;
            outline: none;
            box-shadow: inset 0 0 2px rgba(67, 90, 111, 0.14),
              inset 0 0 0 1px #579ad9, 0 0 0 3px rgba(16, 112, 202, 0.14);
            z-index: 2;
            outline: none;
          }
        `}</style>

        <Mutation
          mutation={CREATE_CUSTOMER}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(createCustomer, { error, loading }) => (
            <form onSubmit={e => this.handleSubmit(e, createCustomer)}>
              <Pane padding={16} paddingBottom={10}>
                <Heading
                  size={400}
                  marginBottom={4}
                  fontWeight={500}
                  color="#425A70"
                >
                  Name
                </Heading>
                <Pane
                  elevation={1}
                  borderRadius={3}
                  marginBottom={10}
                  width="100%"
                >
                  <TextInput
                    placeholder="James Michael"
                    fontFamily='"Helvetica Neue", Helvetica, sans-serif'
                    fontSize={14}
                    letterSpacing="0.025em"
                    background="#fff"
                    borderRadius={3}
                    width="100%"
                    className="card"
                    value={name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </Pane>
                <Heading
                  size={400}
                  marginBottom={4}
                  fontWeight={500}
                  color="#425A70"
                >
                  Address
                </Heading>
                <Pane
                  elevation={1}
                  borderRadius={3}
                  marginBottom={10}
                  width="100%"
                >
                  <TextInput
                    placeholder="2 Infinite Loop"
                    fontFamily='"Helvetica Neue", Helvetica, sans-serif'
                    fontSize={14}
                    letterSpacing="0.025em"
                    background="#fff"
                    borderRadius={3}
                    width="100%"
                    className="card"
                    value={addressLine1}
                    onChange={e =>
                      this.setState({ addressLine1: e.target.value })
                    }
                  />
                </Pane>
                <Heading
                  size={400}
                  marginBottom={4}
                  fontWeight={500}
                  color="#425A70"
                >
                  Suite (optional)
                </Heading>
                <Pane
                  elevation={1}
                  borderRadius={3}
                  marginBottom={10}
                  width="100%"
                >
                  <TextInput
                    placeholder="Suite 5"
                    fontFamily='"Helvetica Neue", Helvetica, sans-serif'
                    fontSize={14}
                    letterSpacing="0.025em"
                    background="#fff"
                    width="100%"
                    borderRadius={3}
                    className="card"
                    value={addressLine2}
                    onChange={e =>
                      this.setState({ addressLine2: e.target.value })
                    }
                  />
                </Pane>

                <Heading
                  size={400}
                  marginBottom={4}
                  fontWeight={500}
                  color="#425A70"
                >
                  Credit or Debit Card Number
                </Heading>
                <Pane
                  marginBottom={10}
                  background="#fff"
                  padding={8}
                  borderRadius={3}
                  elevation={1}
                >
                  <CardElement {...createOptions(fontSize)} />
                </Pane>
              </Pane>

              <Button
                height={35}
                fontSize={15}
                width="100%"
                // intent="primary"
                textColor="#fff"
                background="#1070ca"
                borderBottomLeftRadius="5"
                borderBottomRightRadius="5"
                borderTopLeftRadius="0"
                borderTopRightRadius="0"
              >
                Submit
              </Button>
            </form>
          )}
        </Mutation>
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
      renderElements: false,
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
