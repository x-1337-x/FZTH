let defaultState = {
  1: {
      id: 1,
      name: 'tovar 1',
      price: 5
  },

  2: {
    id: 2,
    name: 'tovar 2',
    price: 10
  },

  3: {
      id: 3,
      name: 'tovar 3',
      price: 5
  },

  4: {
    id: 4,
    name: 'tovar 4',
    price: 10
  },

  5: {
      id: 5,
      name: 'tovar 5',
      price: 5
  },

  6: {
    id: 6,
    name: 'tovar 6',
    price: 10
  }
}

export const products = (state = defaultState, action) => {
  switch(action.type) {

    default:
      return state;
  }
}