import { DataGrid } from '@mui/x-data-grid';
import Header from '@portal/components/Header';
import Sidebar from '@portal/components/Sidebar';
import { userList } from '@portal/mocks/userList';
import { NextPage } from 'next';
import React from 'react';

const UserList: NextPage = () => {
  const headers = [
    'ID do Usuário',
    'Nome',
    'E-mail',
    'Tipo de Perfil',
    'Última Alteração',
  ];

  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <Header label="Lista de Usuários" />
        <DataGrid
          columns={[
            { field: 'id', headerName: 'ID' },
            {
              field: 'name',
              headerName: 'Nome',
              flex: 1,
            },
            {
              field: 'email',
              headerName: 'E-mail',
              flex: 1,
            },
            {
              field: 'profiletype',
              headerName: 'Tipo de Perfil',
              flex: 1,
            },
            {
              field: 'updateAt',
              headerName: 'Última Alteração',
              flex: 1,
            },
          ]}
          rows={userList.map((item) => ({
            id: item.id,
            name: item.name,
            email: item.email,
            profiletype: item.profiletype,
            updateAt: new Date(item.updateAt).toLocaleString('pt-br'),
          }))}
          pageSize={UserList.length}
        />
      </div>
    </div>
  );
};

export default UserList;
