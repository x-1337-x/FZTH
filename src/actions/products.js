const CREATE_PRODUCT = 'CREATE_PRODUCT';
const CHANGE_PRODUCT_QUANTITY = 'CHANGE_PRODUCT_QUANTITY'

export const create = product => {
  return {
    type: CREATE_PRODUCT,
    product
  }
}

export const changeProductQtty = (id, qtty, operation = 'substract') => {
  return {
    type: CHANGE_PRODUCT_QUANTITY,
    id,
    qtty,
    operation
  }
}
