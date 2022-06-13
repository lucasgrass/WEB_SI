import { reportReducer } from './Reports/reducer';
import { userReducer } from './User/reducer';
import { combineReducers } from 'redux';

import authReducer from './Auth/reducer';
import loadingReducer from './Loading/reducer';
import typeReducer from './Types/reducer';

const reducers = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  user: userReducer,
  type: typeReducer,
  report: reportReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
