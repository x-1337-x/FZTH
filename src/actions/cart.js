import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_QUANTITY,
  SEND_ORDER
} from './actions';

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    product
  }
}

export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

export const setQtty = (id, qtty) => {
  return {
    type: SET_QUANTITY,
    id,
    qtty
  }
}

export const sendOrder = order => {
  return {
    type: SEND_ORDER,
    order
  }
}