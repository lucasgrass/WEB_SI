import Row from '@portal/components/Row';
import Sidebar from '@portal/components/Sidebar';
import { Occurrences } from '@portal/mocks/occurrences';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Header from '@portal/components/Header';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useReduxState } from '@portal/hooks/useReduxState';
import { listReports, removeReport } from '@portal/store/Reports/action';

const Ocorrencias: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const dispatch = useDispatch();
  const {
    report: { reportsList },
  } = useReduxState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(listReports());
  }, []);

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
                    onClick={() => {
                      handleClickOpen();
                    }}
                  >
                    <i className="bx bx-trash"></i>
                  </Button>
                );
              },
            },
          ]}
          rows={reportsList.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            type: item.type.typeName,
            subtype: item.type.subTypes.join(', '),
            date: new Date(item.createdAt).toLocaleString('pt-br'),
          }))}
          pageSize={reportsList.length}
        />
      </div>
      <Dialog open={open} onClose={handleClose} maxWidth>
        <DialogTitle style={{ fontWeight: 'bold', fontSize: '30px' }}>
          Certeza que deseja remover essa ocorrência?
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            className="button-change"
            style={{ width: '75px' }}
          >
            Não
          </button>
          <button
            onClick={() => {
              dispatch(removeReport());
              handleClose();
            }}
            className="button-change"
            style={{ width: '75px' }}
          >
            Sim
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Ocorrencias;
