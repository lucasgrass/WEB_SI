import { TableCell } from '@mui/material';
import Row from '@portal/components/Row';
import Sidebar from '@portal/components/Sidebar';
import { Occurrences } from '@portal/mocks/occurrences';
import { NextPage } from 'next';
import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Header from '@portal/components/Header';
import { Button } from '@mui/material';

const Ocorrencias: NextPage = () => {
  const headers = [
    'ID da Ocorrência',
    'Título',
    'Descrição',
    'Tipo',
    'SubTipo',
    'Data',
  ];

  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <Header label="Lista de Ocorrências" />
        <DataGrid
          columns={[
            { field: 'id', headerName: 'ID' },
            {
              field: 'title',
              headerName: 'Título',
              flex: 1,
            },
            {
              field: 'description',
              headerName: 'Descrição',
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
            {
              field: 'Remover',
              renderCell: () => {
                return (
                  <Button variant="outlined" color="error">
                    <i className="bx bx-trash"></i>
                  </Button>
                );
              },
            },
          ]}
          rows={Occurrences.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
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
