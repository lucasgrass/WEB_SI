import Sidebar from '@portal/components/sidebar';
import { NextPage } from 'next';
import { User } from '@portal/mocks/user';
import React from 'react';
import Header from '@portal/components/Header';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const Dashboard: NextPage = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <Header label="Configurações" />
        <div>
          <h3 className="subtitle">Informações Pessoais</h3>
          <p className="textfield-user">
            <b>Nome:</b> {User[0].name}
          </p>
          <p className="textfield-user">
            <b>Email:</b> {User[0].email}
            <button className="button-change">Alterar E-mail</button>
          </p>

          <p className="textfield-user">
            <b>Senha:</b> *******
            <button className="button-change">Alterar Senha</button>
          </p>
        </div>
        <div>
          <h3 className="subtitle">Informações Administrativas</h3>
          <p className="textfield-user">
            <b>Tipo de perfil:</b> {User[0].profiletype}
            <i
              className="bx bxs-info-circle"
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1.5 }}>
                  Tipo 0: <br />
                  Tipo 1: <br />
                  Tipo 2:
                </Typography>
              </Popover>
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
