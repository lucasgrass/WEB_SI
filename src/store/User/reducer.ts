import { AUTH_LOGIN, AUTH_LOGGED } from '../actionsType';

export const initialState: reducers.AuthState = {
  authenticated: {
    accessToken: null,
  },
  logged: false,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;