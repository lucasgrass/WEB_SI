import Sidebar from '@portal/components/Sidebar';
import { NextPage } from 'next';
import React from 'react';
import Header from '@portal/components/Header';
import { Button } from '@mui/material';

const Dashboard: NextPage = () => {
  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <Header label="Relatório" />
        <button className="report">Gerar Relatório</button>
      </div>
    </div>
  );
};

export default Dashboard;
