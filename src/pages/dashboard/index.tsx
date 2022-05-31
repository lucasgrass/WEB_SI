import Sidebar from '@portal/components/Sidebar';
import { NextPage } from 'next';
import React from 'react';
import { User } from '@portal/mocks/user';
import { ReportProps } from '@portal/models/module';

const Dashboard: NextPage = () => {
  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <div>
          <p className="home-title">Olá, {User[0].name}!</p>
          <p>Bem-Vindo a Dashboard do GRAFIA Cidade.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
