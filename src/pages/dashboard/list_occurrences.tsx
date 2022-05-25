import { NextPage } from 'next';
import Sidebar from '@portal/components/sidebar';
import * as React from 'react';
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

const Dashboard: NextPage = () => {
  function createData(
    tipo: string,
    data: number,
    usuario: string,
    local: string,
    descricao: string
  ) {
    return {
      tipo,
      data,
      usuario,
      local,
      descricao,
      ocorrencia: [
        {
          data: '2022-05-24'
          usuario: '',
        },
      ],
    };
  }

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
