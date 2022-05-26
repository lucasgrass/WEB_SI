import Sidebar from '@portal/components/Sidebar';
import { NextPage } from 'next';
import React from 'react';
import OccurrencesList from '../../components/OcurrencesTable';

const Ocorrencias: NextPage = () => {
  return (
    <div
      style={{
        backgroundColor: '#DADADA',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Sidebar />

      <div style={{ marginLeft: 115, marginTop: 50, width: '90%' }}>
        <OccurrencesList />
      </div>
    </div>
  );
};

export default Ocorrencias;
