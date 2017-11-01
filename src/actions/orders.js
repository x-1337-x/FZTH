import { STORE_ORDER } from './actions';

export const storeOrder = order => {
  return {
    type: STORE_ORDER,
    order
  }
}