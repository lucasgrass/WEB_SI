import Sidebar from '@portal/components/sidebar';
import { NextPage } from 'next';
import { User } from '@portal/mocks/user';
import React from 'react';
import { Button } from '@mui/material';
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
        <div style={{ border: '1px solid red' }}>
          <h3>Informações Pessoais</h3>
          <p>
            <b>Nome:</b> {User[0].name}
          </p>
          <p>
            <b>Email:</b> {User[0].email}
            <Button variant="outlined" size="small">
              Alterar Email
            </Button>
          </p>

          <p>
            <b>Senha:</b> *******
            <Button variant="outlined" size="small">
              Alterar Senha
            </Button>
          </p>
        </div>
        <div style={{ border: '1px solid green' }}>
          <h3>Informações Administrativas</h3>
          <p>
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
