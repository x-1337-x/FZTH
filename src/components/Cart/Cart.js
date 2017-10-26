import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromCart, incrQtty, decrQtty } from '../../actions/cart';

import './style.css';

class Cart extends Component {
  removeItem(id) {
    this.props.removeItem(id)
  }

  handleInputChange = ({target}) => {
    let element = this.props.items.filter(el => el.id === parseInt(target.name, 10))[0];
    if (target.value > element.qtty) {
      this.props.increase(parseInt(target.name, 10))
    } else if (target.value < element.qtty) {
      this.props.decrease(parseInt(target.name, 10))
    }
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
  increase(id) {
    dispatch(incrQtty(id))
  },
  decrease(id) {
    dispatch(decrQtty(id))
  }
})

export default connect(stateToProps, dispatchToProps)(Cart);