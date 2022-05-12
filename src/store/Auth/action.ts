import { Dispatch } from 'redux';
import Toast from '@portal/services/toaster';
import AuthAPI from '@portal/repositories/auth';

import { AUTH_LOGGED, AUTH_LOGIN, LOGOUT } from '../actionsType';
import { startLoading, stopLoading } from '../Loading/action';

export const authenticate =
  (userData: models.LoginRequest) => async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const payload: models.LoginResponse = await AuthAPI.login(userData);
      Toast.success('Logado com sucesso');
      if (payload) {
        dispatch({
          type: AUTH_LOGIN,
          payload: {
            token: payload.token,
          },
        });
      }
    } catch (err) {
      Toast.error('Usuário e/ou Senha inválidos');
    } finally {
      dispatch(stopLoading());
    }
  };

export const recovery = (email: string) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    await AuthAPI.recovery(email);
    Toast.success('E-mail de recuperação de senha enviado');
  } catch (err) {
    Toast.error('Digite um E-mail válido');
  } finally {
    dispatch(stopLoading());
  }
};

export const checkLogin = () => async (dispatch: any) => {
  dispatch(startLoading());
  //Check Login Method
  dispatch(stopLoading());
};

export const logout = () => async (dispatch: Dispatch) => {
  dispatch({ type: LOGOUT });
};
