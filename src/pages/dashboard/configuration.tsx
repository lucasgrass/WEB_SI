import Sidebar from '@portal/components/sidebar';
import { NextPage } from 'next';
import { User } from '@portal/mocks/user';
import React from 'react';
import { Button } from '@mui/material';

const Dashboard: NextPage = () => {
  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle"><div>
        <p className="title">Informações Pessoais</p></div>
        <div>
          <p >Nome: {User[0].name}</p>
          <p>Email: {User[0].email} <Button variant="contained" size='small' >Alterar Email</Button></p>
          <p>Senha: {User[0].password} <Button variant="contained" size='small' >Alterar Senha</Button></p>
          </div>      
        </div>
    </div>
  );
};

export default Dashboard;
