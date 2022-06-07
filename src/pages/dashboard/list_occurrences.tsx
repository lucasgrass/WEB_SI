import { TableCell } from '@mui/material';
import Row from '@portal/components/Row';
import Sidebar from '@portal/components/Sidebar';
import { Occurrences } from '@portal/mocks/occurrences';
import { NextPage } from 'next';
import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const Ocorrencias: NextPage = () => {
  const headers = ['ID da Ocorrência', 'Título', 'Tipo', 'SubTipo', 'Data'];

  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <DataGrid
          columns={[
            { field: 'id', headerName: 'ID' },
            {
              field: 'title',
              headerName: 'Título',
              flex: 1,
            },
            {
              field: 'type',
              headerName: 'Tipo',
              flex: 1,
            },
            {
              field: 'subtype',
              headerName: 'Tipo',
              flex: 1,
            },
            {
              field: 'date',
              headerName: 'Data',
              flex: 1,
            },
          ]}
          rows={Occurrences.map((item) => ({
            id: item.id,
            title: item.title,
            type: item.type.typeName,
            subtype: item.type.subTypes.join(' ,'),
            date: new Date(item.createdAt).toLocaleString('pt-br'),
          }))}
          pageSize={Occurrences.length}
        />
      </div>
    </div>
  );
};

export default Ocorrencias;
