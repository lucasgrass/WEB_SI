import { REPORT_LIST } from '../actionsType';
import Toast from '@portal/services/toaster';
import { Dispatch } from 'redux';

import { startLoading, stopLoading } from '../Loading/action';
import TypeAPI from '@portal/repositories/type';
import { listTypes } from '../Types/action';
import ReportsAPI from '@portal/repositories/reports';

export const listReports = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    const payload = await ReportsAPI.list();
    dispatch({
      type: REPORT_LIST,
      payload,
    });
  } catch (err) {
    Toast.error('Erro, não foi possível obter as ocorrências no momento');
  } finally {
    dispatch(stopLoading());
  }
};

export const removeReport = (id: string) => async (dispatch: Dispatch) => {
  dispatch(startLoading());
  try {
    await ReportsAPI.delete(id);
    dispatch(listReports());
  } catch (err) {
    Toast.error('Erro, não foi possível remover essa ocorrência no momento');
  } finally {
    dispatch(stopLoading());
  }
};
