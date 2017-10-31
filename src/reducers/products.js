let defaultState = {
  1: {
      id: 1,
      name: 'tovar 1',
      price: 5,
      qtty: 666
  },

  2: {
    id: 2,
    name: 'tovar 2',
    price: 10,
    qtty: 666
  },

  3: {
      id: 3,
      name: 'tovar 3',
      price: 5,
      qtty: 666
  },

  4: {
    id: 4,
    name: 'tovar 4',
    price: 10,
    qtty: 666
  },

  5: {
      id: 5,
      name: 'tovar 5',
      price: 5,
      qtty: 666
  },

  6: {
    id: 6,
    name: 'tovar 6',
    price: 10,
    qtty: 666
  }
}

export const products = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT_QUANTITY':
      if (action.operation === 'add') {
        return {
          ...state,
          [action.id] : {...state[action.id], qtty: state[action.id].qtty + action.qtty}
        }
      } else if (action.operation === 'substract') {
        return {
          ...state,
          [action.id] : {...state[action.id], qtty: state[action.id].qtty - action.qtty}
        }
      }
    break;
    
    default:
      return state;
  }
}