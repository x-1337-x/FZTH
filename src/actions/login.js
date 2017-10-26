const TOGGLE_AUTH = 'TOGGLE_AUTH';

export const logIn = loggedIn => {
  return {
    type: TOGGLE_AUTH,
    loggedIn
  }
}
