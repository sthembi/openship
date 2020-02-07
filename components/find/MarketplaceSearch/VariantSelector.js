import React, { Component } from 'react';
import { Pane, Heading, Select } from 'evergreen-ui';

class VariantSelector extends Component {
  render() {
    return (
      <Pane marginRight={10}>
        <Heading size={100}>{this.props.option.name}</Heading>
        <Select
          height={20}
          name={this.props.option.name}
          key={this.props.option.name}
          background="#fff"
          onChange={this.props.handleOptionChange}
        >
          {this.props.option.values.map(value => (
            // <Heading
            //   size={100}
            //   fontWeight={700}
            //   color="#425A70"
            //   // border="1px solid #E4E7EB"
            //   background="#F9F9FB"
            //   borderColor="transparent"
            //   is="button"
            //   marginRight={3}
            //   transition="all 0.1s ease-in"
            //   borderRadius={2}
            //   outline="none"
            //   cursor="pointer"
            //   display="inline-flex"
            //   alignItems="center"
            //   elevation={1}
            //   justifyContent="center"
            //   onClick={e => this.props.handleOptionChange(e)}
            // >
            //   {value}
            // </Heading>
            <option
              value={value}
              key={`${this.props.option.name}-${value}`}
            >{`${value}`}</option>
          ))}
        </Select>
      </Pane>
    );
  }
}

export default VariantSelector;
