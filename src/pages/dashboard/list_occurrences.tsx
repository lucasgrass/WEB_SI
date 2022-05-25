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
import OccurrencesList from '../../components/OcurrencesTable';

const Ocorrencias: NextPage = () => {
  return (
    <div>
      <div>
        <Sidebar />
        <div>
          <OccurrencesList />
        </div>
      </div>
    </div>
  );
};

export default Ocorrencias;
