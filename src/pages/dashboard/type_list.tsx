import Sidebar from '@portal/components/Sidebar';
import { NextPage } from 'next';
import React from 'react';
import { Types } from '@portal/mocks/types';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const Dashboard: NextPage = () => {
  const headers = ['ID', 'Tipo', 'Subtipos'];
  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        {/* <div className="table-title">Listagem de Tipos e Subtipos</div> */}
        {/* <div className="container-create">
          <button>Criar novo Tipo</button>
          <button>Criar novo Subtipo</button>
        </div> */}
        <DataGrid
          columns={[
            { field: 'id', headerName: 'ID' },
            {
              field: 'typeName',
              headerName: 'Tipo',
              flex: 1,
            },
            {
              field: 'subTypes',
              headerName: 'Subtipos',
              flex: 1,
            },
          ]}
          rows={Types.map((item) => ({
            id: item.id,
            typeName: item.typeName,
            subTypes: item.subTypes,
          }))}
          pageSize={Types.length}
        />
      </div>
    </div>
  );
};

export default Dashboard;
