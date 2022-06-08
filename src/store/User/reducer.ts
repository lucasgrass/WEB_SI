import { USER_ME, USER_LIST } from '../actionsType';

export const initialState: reducers.UserState = {
  me: null,
  userList: [],
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_ME:
      return {
        ...state,
        me: action.payload,
      };
    case USER_LIST:
      return {
        ...state,
        userList: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
