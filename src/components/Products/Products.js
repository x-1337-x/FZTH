import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../../actions/cart'

class Products extends Component {
  add(product) {
    console.log(product)
    this.props.add(product)
  }

  render() {
    return (
      <div>
        <ul>
          {Object.values(this.props.products)
            .map(p =>
              <li key={p.id}>{p.id} : {p.name} How much? -- {p.price}
                <button
                  onClick={() => (this.add(p))}
                >
                  AddToCart
                </button>
              </li>)}
        </ul>
      </div>
    )
  }
}

const stateToProps = state => {
  return {
    products: state.products
  }
}

const dispatchToProps = dispatch => ({
  add(data) {
    dispatch(addToCart(data))
  }
})

export default connect(stateToProps, dispatchToProps)(Products);