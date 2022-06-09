import Header from '@portal/components/Header';
import Sidebar from '@portal/components/sidebar';
import { User } from '@portal/mocks/user';
import { NextPage } from 'next';
import React from 'react';
import {
  Typography,
  Popover,
  Box,
  FormControl,
  TextField,
  DialogTitle,
  DialogActions,
  Dialog,
} from '@mui/material';

const Configuration: NextPage = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open2 = Boolean(anchorEl);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          </p>

          <p className="textfield-user">
            <b>Senha:</b> *******
            <button className="button-change" onClick={handleClickOpen}>
              Alterar Senha
            </button>
          </p>
        </div>
        <div>
          <h3 className="subtitle">Informações Administrativas</h3>
          <p className="textfield-user">
            <b>Tipo de perfil:</b> {User[0].profiletype}
            <i
              className="bx bxs-info-circle"
              aria-owns={open2 ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen2}
              onMouseLeave={handlePopoverClose}
            >
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={open2}
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
                </Typography>
              </Popover>
            </i>
          </p>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle style={{ fontWeight: 'bold' }}>Alterar Senha</DialogTitle>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { ml: 3, mb: 10 },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl variant="outlined">
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha Atual"
              type="password"
              id="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="newpassword"
              label="Nova Senha"
              type="newpassword"
              id="newpassword"
            />
          </FormControl>
        </Box>
        <DialogActions>
          <button onClick={handleClose} className="button-change">
            Cancelar
          </button>
          <button onClick={handleClose} className="button-change">
            Alterar
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Configuration;
