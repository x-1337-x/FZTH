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

    case 'INCREASE_QUANTITY': 
      return {
        ...state,
        items: [...state.items].map(el => {
          return el.id === action.id ? {...el, qtty: (el.qtty + 1)} : {...el}
        })
      }

    case 'DECREASE_QUANTITY': {
      let targetItem = [...state.items].filter(i => i.id === action.id)
      if (targetItem[0].qtty <= 1) {
        return {
          ...state,
          items: [...state.items].filter(i => i.id !== action.id)
        }
      } else {
        return {
          ...state,
          items: [...state.items].map(el => {
            return el.id === action.id ? {...el, qtty: (el.qtty - 1)} : {...el}
          })
        }
      }
    }

    case 'SET_QUANTITY':
      return {
        ...state,
        items: [...state.items].map(el => {
          return el.id === action.id ? {...el, qtty: action.qtty} : {...el}
        })
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