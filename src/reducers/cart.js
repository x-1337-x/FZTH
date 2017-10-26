const defaultState = {
  items: []
}

export const cart = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART': {
      let { items } = state;
      if (items.length !== 0 && items.some(el => el.id === action.product.id)) {
        return {
          ...state,
          items: [...items].map(el => {
            return el.id === action.product.id
                   ? {...el, qtty: (el.qtty + 1)}
                   : {...el}
          })
        }
      } else {
        return {
          ...state,
          items: [...items, {id: action.product.id, qtty: 1}]
        }
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: [...state.items].filter(i => i.id !== action.id)
      }
    default:
      return state;
  }
}