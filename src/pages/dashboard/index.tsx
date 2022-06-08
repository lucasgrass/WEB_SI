import Sidebar from '@portal/components/Sidebar';
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { User } from '@portal/mocks/user';
import { ReportProps } from '@portal/models/module';
import { useDispatch } from 'react-redux';
import { getMe } from '@portal/store/User/action';
import { useReduxState } from '@portal/hooks/useReduxState';

const Dashboard: NextPage = () => {
  const dispatch = useDispatch();
  const {
    user: { me },
  } = useReduxState();

  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <div>
          <p className="home-title">Olá, {me ? me.name : ''}!</p>
          <p className="home-text">Bem-Vindo a Dashboard do GRAFIA Cidade.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
