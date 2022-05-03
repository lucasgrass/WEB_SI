import { Dispatch } from 'redux';

import { startLoading, stopLoading } from '../Loading/action';
import UserAPI from '@portal/repositories/user';

export const createUser =
  (userData: models.UserCreation) => async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      await UserAPI.create(userData);
    } catch (err) {
      // handle error
    } finally {
      dispatch(stopLoading());
    }
  };
