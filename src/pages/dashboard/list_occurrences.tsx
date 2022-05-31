import Sidebar from '@portal/components/Sidebar';
import { NextPage } from 'next';
import React from 'react';
import OccurrencesList from '../../components/OcurrencesTable';

const Ocorrencias: NextPage = () => {
  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <OccurrencesList />
      </div>
    </div>
  );
};

export default Ocorrencias;
