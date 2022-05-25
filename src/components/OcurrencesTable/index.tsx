import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Occurrences from '../../mock-occurrences.json';

function createData(
  tipo: string,
  data: string,
  usuario: string,
  subtipo: string,
  descricao: string
) {
  return {
    tipo,
    data,
    usuario,
    subtipo,
    descricao,
    ocorrencia: [
      {
        //dados minizaveis tem que ver o que vamos por, o formato e como vamos manipular.
        tipo: 'teste',
        data: 'data',
        usuario: 'usuario',
        subtipo: 'subtipo',
        descricao: 'descricao',
      },
      {
        //dados minizaveis tem que ver o que vamos por, o formato e como vamos manipular.
        tipo: 'teste',
        data: 'data',
        usuario: 'usuario',
        subtipo: 'subtipo',
        descricao: 'descricao',
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.tipo}
        </TableCell>
        {/* <TableCell align="right">{row.tipo}</TableCell> */}
        <TableCell align="right">{row.data}</TableCell>
        <TableCell align="right">{row.usuario}</TableCell>
        <TableCell align="right">{row.subtipo}</TableCell>
        <TableCell align="right">{row.descricao}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.ocorrencia.map((ocurrenceRow) => (
                    <TableRow key={ocurrenceRow.tipo}>
                      {/* <TableCell component="th" scope="row">
                        {ocurrenceRow.data}
                      </TableCell> */}
                      <TableCell>{ocurrenceRow.tipo}</TableCell>
                      <TableCell align="right">
                        {ocurrenceRow.usuario}
                      </TableCell>
                      <TableCell align="right">
                        {ocurrenceRow.descricao}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const rows = [
  createData('crime', '25/02/2022', 'guilherme', 'homicidio', 'aaaaa'),
];

const [list, setList] = useState(Occurrences);

console.log(list);

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Ocorrencia</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Usuario</TableCell>
            <TableCell align="right">subtipo</TableCell>
            <TableCell align="right">Descricao</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.tipo} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
