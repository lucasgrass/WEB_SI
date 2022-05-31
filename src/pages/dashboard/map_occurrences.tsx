import Sidebar from '@portal/components/Sidebar';
import { NextPage } from 'next';
import React from 'react';

const Dashboard: NextPage = () => {
  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle"></div>
    </div>
  );
};

export default Dashboard;
