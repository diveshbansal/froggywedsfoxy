import React, { Component } from 'react';
class CustomA extends Component {
  render() {
    return (
      <a href={this.props.link}>{this.props.displayName}</a>
    )
  }
}
export default CustomA;