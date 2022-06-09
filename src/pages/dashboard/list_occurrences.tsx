import Row from '@portal/components/Row';
import Sidebar from '@portal/components/Sidebar';
import { Occurrences } from '@portal/mocks/occurrences';
import { NextPage } from 'next';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Header from '@portal/components/Header';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
} from '@mui/material';

const Ocorrencias: NextPage = () => {
  const headers = [
    'ID da Ocorrência',
    'Título',
    'Descrição',
    'Tipo',
    'SubTipo',
    'Data',
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <Header label="Lista de Ocorrências" />
        <DataGrid
          style={{ height: '92.8%' }}
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
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleClickOpen}
                  >
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Certeza que deseja remover essa ocorrência?'}
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Não</Button>
          <Button onClick={handleClose} autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Ocorrencias;
