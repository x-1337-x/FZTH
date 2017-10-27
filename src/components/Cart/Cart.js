import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromCart, setQtty } from '../../actions/cart';

import './style.css';

class Cart extends Component {
  removeItem(id) {
    this.props.removeItem(id)
  }

  handleInputChange = ({target}) => {
    this.props.setQtty(parseInt(target.name, 10), target.value)
  }

  render() {
    let {items} = this.props;

    if(items.length === 0) return null;
    return (
      <div className="cart">
        <span>CART:</span>
        {items && (
          items.map((el, i) => {
            return (
              <div key={i}>
                {el.id} ({el.qtty})
                <input 
                  name = {el.id}
                  type="number"
                  min="0"
                  value={el.qtty}
                  onChange={this.handleInputChange}
                />
                <button onClick={() => this.removeItem(el.id)}>x</button>
              </div>
            )}
          )
        )}
      </div>
    )
  }
}

const stateToProps = state => {
  return {
    items: [...state.cart.items]
  }
}

const dispatchToProps = dispatch => ({
  removeItem(id) {
    dispatch(removeFromCart(id))
  },
  setQtty(id, qtty) {
    dispatch(setQtty(id, qtty))
  }
})

export default connect(stateToProps, dispatchToProps)(Cart);