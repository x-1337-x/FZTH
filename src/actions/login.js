import { TOGGLE_AUTH } from './actions';

export const logIn = loggedIn => {
  return {
    type: TOGGLE_AUTH,
    loggedIn
  }
}
