const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
const SET_QUANTITY = 'SET_QUANTITY'

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

export const incrQtty = id => {
  return {
    type: INCREASE_QUANTITY,
    id
  }
}

export const decrQtty = id => {
  return {
    type: DECREASE_QUANTITY,
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