import Sidebar from '@portal/components/Sidebar';
import { NextPage } from 'next';
import React from 'react';
import Header from '@portal/components/Header';

const Dashboard: NextPage = () => {
  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <Header label="Relatório" />
      </div>
    </div>
  );
};

export default Dashboard;
