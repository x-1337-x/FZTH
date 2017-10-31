const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SET_QUANTITY = 'SET_QUANTITY';
const SEND_ORDER = 'SEND_ORDER';

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