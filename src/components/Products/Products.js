import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';
import { changeProductQtty }  from '../../actions/products';

class Products extends Component {
  add = product => {
    this.props.add(product)
    this.props.changeProductQtty(product.id, 1)
  }



  render() {
    return (
      <div>
        <ul>
          {Object.values(this.props.products)
            .map(p =>
              <li key={p.id}>{p.id} : {p.name} How much? -- {p.price} [In Stock: {p.qtty}]
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
  },
  changeProductQtty(id, qtty, operation) {
    dispatch(changeProductQtty(id, qtty, operation))
  }
})

export default connect(stateToProps, dispatchToProps)(Products);