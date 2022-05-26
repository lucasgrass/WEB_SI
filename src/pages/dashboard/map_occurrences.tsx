import Sidebar from '@portal/components/Sidebar';
import { NextPage } from 'next';
import React from 'react';

const Dashboard: NextPage = () => {
  return (
    <div style={{ border: '3px solid green' }}>
      <div style={{ border: '2px solid black' }}>
        <Sidebar />
      </div>
      <div style={{ border: '1px solid red' }}>teste</div>
    </div>
  );
};

export default Dashboard;
