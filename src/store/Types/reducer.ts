import { TYPE_LIST } from '../actionsType';

export const initialState: reducers.TypeState = {
  typeList: [],
};

export const typeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPE_LIST:
      return {
        ...state,
        typeList: action.payload,
      };
    default:
      return state;
  }
};

export default typeReducer;
