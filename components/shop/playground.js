import React from 'react';
import PropTypes from 'prop-types';
import { front, prodFront } from '../../config';

class ShopPlayground extends React.Component {
  static propTypes = {
    shop: PropTypes.string,
    url: PropTypes.string,
    accessToken: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      renderElements: true,
    };
    this.URL = React.createRef();
  }

  componentWillReceiveProps = nextProps => {
    this.URL.current.contentWindow.m.handleChangeEndpoint(
      `${process.env.NODE_ENV === 'development' ? front : prodFront}/${
        nextProps.accessToken
      }/graphql`
    );
  };

  render() {
    const { shop, url, accessToken } = this.props;
    const { renderElements } = this.state;
    return (
      renderElements && (
        <iframe
          src={`${
            process.env.NODE_ENV === 'development' ? front : prodFront
          }/playgrounds`}
          title={`${shop} playground`}
          width="100%"
          height="1000px"
          id="myId"
          className="📦b-btm-wdt_0 📦b-lft-wdt_0 📦b-rgt-wdt_0 📦b-top-wdt_0"
          ref={this.URL}
          onLoad={() =>
            this.URL.current.contentWindow.m.handleChangeEndpoint(
              url
              // `${
              //   process.env.NODE_ENV === 'development' ? front : prodFront
              // }/shopify/${this.props.shop}/graphql`
            )
          }
        />
      )
    );
  }
}

export default ShopPlayground;
