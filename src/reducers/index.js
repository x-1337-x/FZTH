import { combineReducers } from 'redux';
import { auth } from './auth';
import { products } from './products';
import { cart } from './cart';
import { orders } from './orders';

const combinedReducers = combineReducers({
  auth,
  products,
  cart,
  orders
});

export default combinedReducers;