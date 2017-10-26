const CREATE_PRODUCT = 'CREATE_PRODUCT';

export const create = product => {
  return {
    type: CREATE_PRODUCT,
    product
  }
}
