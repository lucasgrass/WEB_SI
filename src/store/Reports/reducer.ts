import { REPORT_LIST } from '../actionsType';

export const initialState: reducers.ReportsState = {
  reportsList: [],
};

export const reportReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REPORT_LIST:
      return {
        ...state,
        reportsList: action.payload,
      };
    default:
      return state;
  }
};

export default reportReducer;
