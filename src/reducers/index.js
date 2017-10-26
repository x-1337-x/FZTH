import { combineReducers } from 'redux';
import {auth} from './auth'
import {products} from './products'
import {cart} from './cart'

const combinedReducers = combineReducers({
  auth,
  products,
  cart
});

export default combinedReducers;