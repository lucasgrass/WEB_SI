import { USER_ME, USER_LIST } from './../actionsType';
import Toast from '@portal/services/toaster';
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

export const getMe = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const payload = await UserAPI.me();
    dispatch({
      type: USER_ME,
      payload,
    });
  } catch (err) {
    Toast.error('Erro, não foi possivel buscar os dados desse usuário');
  } finally {
    dispatch(stopLoading());
  }
};

export const getUsers = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const payload = await UserAPI.list();
    dispatch({
      type: USER_LIST,
      payload,
    });
  } catch (err) {
    Toast.error('Erro, não foi possivel listar os usuários');
  } finally {
    dispatch(stopLoading());
  }
};

export const updateUser =
  (userData: models.User, id: string) => async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      await UserAPI.update(userData, id);
      dispatch(getMe());
    } catch (err) {
      Toast.error('Erro, não foi possivel atualizar os dados desse usuário');
    } finally {
      dispatch(stopLoading());
    }
  };
