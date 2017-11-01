const defaultState = [];

export const orders = (prevState = defaultState, action) => {
  switch(action.type) {
    case 'STORE_ORDER':
      return [...prevState, action.order];

    default:
      return prevState;
  }
}