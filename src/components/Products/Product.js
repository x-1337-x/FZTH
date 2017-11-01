import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {

  render() {
    return (
      <div>
        <div>{this.props.product.name}</div>
      </div>
    )
  }
}

const stateToProps = (state, context) => {
  return {
    product: state.products[context.id] || {name: "NO ITEM GOES BY THIS ID. CHECK YOUR FIRE"}
  }
}

export default connect(stateToProps)(Product);