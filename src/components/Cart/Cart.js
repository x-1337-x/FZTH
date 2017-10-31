import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromCart, setQtty, sendOrder } from '../../actions/cart';
import { changeProductQtty }  from '../../actions/products';

import './style.css';

class Cart extends Component {
  total = this.props.items.map(el => el.price).reduce((acc, curr) => acc + curr, 0);

  removeItem(id, qtty) {
    this.props.removeItem(id);
    this.props.changeProductQtty(id, qtty, '+');
  }

  changeItemQuantity(id, qtty, operation = '+', step = 1) {
    if (qtty < 2 && operation === '-') return;
    if (operation === '+') {
      this.props.setQtty(id, qtty + step);
      this.props.changeProductQtty(id, step);
    } else if (operation === '-') {
      this.props.setQtty(id, qtty - step);
      this.props.changeProductQtty(id, step, '+');
    }
  }


  bagAndTag = () => {
    this.props.sendOrder({
      id: Date.now(),
      contents: this.props.items
    })
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
                <button onClick={() => this.changeItemQuantity(el.id, el.qtty, '-')}>-</button>
                <button onClick={() => this.changeItemQuantity(el.id, el.qtty)}>+</button>
                <button onClick={() => this.removeItem(el.id, el.qtty)}>x</button>
              </div>
            )}
          )
        )}
        Total: {this.props.total}
        <button onClick={this.bagAndTag}>
          BUY
        </button>
      </div>
    )
  }
}

const stateToProps = state => {
  return {
    items: [...state.cart.items],
    order: {...state.cart.order},
    total: [...state.cart.items].map(el => el.price * el.qtty).reduce((acc, curr) => acc + curr, 0)
  }
}

const dispatchToProps = dispatch => ({
  removeItem(id) {
    dispatch(removeFromCart(id))
  },
  setQtty(id, qtty) {
    dispatch(setQtty(id, qtty))
  },
  sendOrder(order) {
    dispatch(sendOrder(order));
  },
  changeProductQtty(id, qtty, operation) {
    dispatch(changeProductQtty(id, qtty, operation))
  },
  increase(id, qtty) {
    dispatch(setQtty(id, qtty))
  }
})

export default connect(stateToProps, dispatchToProps)(Cart);