import { AddCircle, Delete } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from '@portal/components/Sidebar';
import { useReduxState } from '@portal/hooks/useReduxState';
import { Types } from '@portal/mocks/types';
import { TypesProps } from '@portal/models/module';
import { createType, listTypes, updateType } from '@portal/store/Types/action';
import { NextPage } from 'next';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';

const TypeList: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<TypesProps>({ typeName: '' });
  const [types, setTypes] = useState<TypesProps[]>(Types);
  const [counter, setCounter] = useState([]);
  const [open2, setOpen2] = useState(false);
  const [typeName, setTypeName] = useState('');
  const [subtypes, setSubtypes] = useState<string[]>([]);

  const {
    type: { typeList },
  } = useReduxState();

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setCounter([]);
    setType({ typeName: '', subTypes: [] });
    setOpen(false);

    setTypeName('');
    setSubtypes([]);
    setOpen2(false);
  };

  const handleChangeTypeName = (event: ChangeEvent<HTMLInputElement>) => {
    setType({ typeName: event.target.value });
  };

  const handleChangeSubtype = (
    typeName: string,
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let arr = type.subTypes ? type.subTypes : [];
    arr[index] = event.target.value;

    setType({ typeName, subTypes: arr });
  };

  const handleAdd = () => {
    let len = counter.length;
    setCounter([...counter, len]);
  };

  const handleRemove = (idx: number, typeName: string) => {
    let arr_counter = counter;
    arr_counter = arr_counter.filter((item, index) => {
      return index !== idx;
    });
    setCounter(arr_counter);

    let arr_subtypes = type.subTypes;
    arr_subtypes = arr_subtypes.filter((item, index) => {
      return index !== idx;
    });
    setType({ typeName, subTypes: arr_subtypes });
  };

  const handleSave = () => {
    console.log(type);
    dispatch(createType(type));
    handleClose();
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setTypeName('');
    setSubtypes([]);
    setOpen2(false);
  };

  const handleAdd2 = (subtypes: string[]) => {
    setSubtypes([...subtypes, '']);
  };

  const handleChangeSubtype2 = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let arr = [...subtypes];
    arr[index] = event.target.value;

    setSubtypes(arr);
  };

  const handleChangeTypeName2 = (event: SelectChangeEvent) => {
    let arr_subtypes = typeList;
    let type = arr_subtypes.find((item, index) => {
      return item.typeName === (event.target.value as string);
    });
    setTypeName(type.typeName);

    if (type.subTypes) setSubtypes(type.subTypes);
  };

  const handleRemove2 = (idx: number) => {
    let arr_subtypes = subtypes;
    arr_subtypes = arr_subtypes.filter((item, index) => {
      return index !== idx;
    });

    setSubtypes(arr_subtypes);
  };

  const handleSave2 = () => {
    let type = {
      typeName: typeName,
      subTypes: subtypes,
    };

    console.log(type);

    dispatch(
      updateType(
        type,
        typeList.find((item) => item.typeName === typeName).id ?? ''
      )
    );

    handleClose2();
  };

  useEffect(() => {
    dispatch(listTypes());
  }, []);

  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <div className="table-title" style={{ marginLeft: '5px' }}>
          Listagem de Tipos e Subtipos
        </div>

        <div
          style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '5px' }}
        >
          <Button
            variant="contained"
            onClick={handleOpen}
            style={{ backgroundColor: '#a200ff' }}
          >
            Adicionar novo Tipo
          </Button>
          <Button
            variant="contained"
            onClick={handleOpen2}
            style={{ backgroundColor: '#a200ff', marginLeft: '10px' }}
          >
            Adicionar novo Subtipo
          </Button>
        </div>

        <DataGrid
          style={{ height: '81.8%' }}
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
          rows={typeList.map((item) => ({
            id: item.id,
            typeName: item.typeName,
            subTypes: item.subTypes.join(', '),
          }))}
          pageSize={typeList.length}
        />
      </div>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Adicionar Novo Tipo</DialogTitle>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { ml: 3, mb: 5 },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Nome do Tipo</InputLabel>
            <Input
              id="component-simple"
              value={type.typeName}
              onChange={handleChangeTypeName}
            />
          </FormControl>
        </Box>

        <div
          style={{
            height: '64px',
          }}
        >
          <DialogTitle display={'inline-block'}>Adicionar Subtipo</DialogTitle>

          <Button
            onClick={handleAdd}
            style={{ marginBottom: '10px' }}
            disabled={type.typeName === '' ? true : false}
          >
            <AddCircle fontSize="large" style={{ color: '#a200ff' }} />
          </Button>
        </div>

        {counter.map((item, index) => (
          <Box
            component="form"
            sx={{
              '& > :not(style)': { ml: 3, mb: 5 },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl variant="standard" style={{ display: 'inline-block' }}>
              <InputLabel htmlFor="component-simple">
                Subtipo {index + 1}
              </InputLabel>
              <Input
                id="component-simple"
                value={
                  type.subTypes && type.subTypes.length > 0
                    ? type.subTypes[index]
                    : ''
                }
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeSubtype(type.typeName, e, index)
                }
              />
            </FormControl>
            <Button
              style={{ marginTop: '15px' }}
              onClick={() => {
                handleRemove(index, type.typeName);
              }}
            >
              <Delete
                fontSize="medium"
                color="error"
                style={{ display: 'inline-block' }}
              />
            </Button>
          </Box>
        ))}

        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancelar
          </Button>
          <Button onClick={handleSave} style={{ color: '#a200ff' }}>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open2} onClose={handleClose} fullWidth>
        <DialogTitle>Adicionar Novo Subtipo</DialogTitle>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { ml: 3, mb: 5 },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl
            style={{
              width: '500px',
            }}
          >
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeName}
              label="Tipo"
              onChange={handleChangeTypeName2}
            >
              {typeList.map((item) => (
                <MenuItem value={item.typeName}>{item.typeName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <div
          style={{
            height: '64px',
          }}
        >
          <DialogTitle display={'inline-block'}>Adicionar Subtipo</DialogTitle>

          <Button
            onClick={() => handleAdd2(subtypes)}
            style={{ marginBottom: '10px' }}
            disabled={typeName === '' ? true : false}
          >
            <AddCircle fontSize="large" style={{ color: '#a200ff' }} />
          </Button>
        </div>

        {subtypes &&
          subtypes.map((item, index) => (
            <Box
              component="form"
              sx={{
                '& > :not(style)': { ml: 3, mb: 5 },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl
                variant="standard"
                style={{ display: 'inline-block' }}
              >
                <InputLabel htmlFor="component-simple">
                  Subtipo {index + 1}
                </InputLabel>
                <Input
                  id="component-simple"
                  value={item}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangeSubtype2(e, index)
                  }
                />
              </FormControl>
              <Button
                style={{ marginTop: '15px' }}
                onClick={() => {
                  handleRemove2(index);
                }}
              >
                <Delete
                  fontSize="medium"
                  color="error"
                  style={{ display: 'inline-block' }}
                />
              </Button>
            </Box>
          ))}

        <DialogActions>
          <Button onClick={handleClose2} color="error">
            Cancelar
          </Button>
          <Button onClick={handleSave2} style={{ color: '#a200ff' }}>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TypeList;
