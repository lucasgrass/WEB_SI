import { USER_ME, TYPE_LIST } from './../actionsType';
import Toast from '@portal/services/toaster';
import { Dispatch } from 'redux';

import { startLoading, stopLoading } from '../Loading/action';
import TypeAPI from '@portal/repositories/type';

export const listTypes = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const payload = await TypeAPI.list();
    dispatch({
      type: TYPE_LIST,
      payload,
    });
  } catch (err) {
    Toast.error('Erro, não foi possível obter os tipos no momento');
  } finally {
    dispatch(stopLoading());
  }
};

export const createType =
  (data: models.TypesProps) => async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      await TypeAPI.create(data);
      dispatch(listTypes());
    } catch (err) {
      Toast.error('Erro, não foi possível criar esse tipo no momento');
    } finally {
      dispatch(stopLoading());
    }
  };

export const updateType =
  (data: models.TypesProps, id: string) => async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      await TypeAPI.update(data, id);
      dispatch(listTypes());
    } catch (err) {
      Toast.error('Erro, não foi possível atualizar esse tipo no momento');
    } finally {
      dispatch(stopLoading());
    }
  };
