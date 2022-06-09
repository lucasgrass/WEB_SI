import { DataGrid } from '@mui/x-data-grid';
import Header from '@portal/components/Header';
import Sidebar from '@portal/components/Sidebar';
import { useReduxState } from '@portal/hooks/useReduxState';
import { getUsers } from '@portal/store/User/action';
import { NextPage } from 'next';
import React, { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';

const UserList: NextPage = () => {
  const dispatch = useDispatch();
  const {
    user: { userList },
  } = useReduxState();

  const getUserType = (type: number) => {
    switch (type) {
      case 0:
        return 'Usuário App';
      case 1:
        return 'Usuário Dash';
      case 2:
        return 'Admin';
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <Header label="Lista de Usuários" />
        <DataGrid
          style={{ height: '92.8%' }}
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
              field: 'profileType',
              headerName: 'Tipo de Perfil',
              flex: 1,
            },
            {
              field: 'updatedAt',
              headerName: 'Última Alteração',
              flex: 1,
            },
          ]}
          rows={userList.map((item) => ({
            id: item.id,
            name: item.name,
            email: item.email,
            profileType: getUserType(item.profileType),
            updatedAt: new Date(item.updatedAt).toLocaleString('pt-br'),
          }))}
          pageSize={userList.length}
        />
      </div>
    </div>
  );
};

export default UserList;
