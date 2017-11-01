import {
  CREATE_PRODUCT,
  CHANGE_PRODUCT_QUANTITY
} from './actions';

export const create = product => {
  return {
    type: CREATE_PRODUCT,
    product
  }
}

export const changeProductQtty = (id, qtty, operation = '-') => {
  return {
    type: CHANGE_PRODUCT_QUANTITY,
    id,
    qtty,
    operation
  }
}
