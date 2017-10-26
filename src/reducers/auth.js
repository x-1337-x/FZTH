const defaultState = {
  loggedIn: false
}

export const auth = (state = defaultState, action) => {
  switch(action.type) {
    case 'TOGGLE_AUTH':
      return {
        ...state,
        loggedIn: action.loggedIn
      }

    default:
      return state;
  }
}
