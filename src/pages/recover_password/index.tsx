import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import { recovery } from '@portal/store/Auth/action';
import Logo from '@portal/components/Logo';

const theme = createTheme();

const RecoverPassword: NextPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!!email) {
      console.log({
        email: data.get('email'),
      });

      dispatch(recovery(data.get('email')));
    }
  };

  const router = useRouter();
  return (
    <div className="container-father">
      <Logo />
      <div className="width-100">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '65%',
              }}
            >
              <h2 className="title">Esqueci minha senha</h2>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Digite seu e-mail"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="button-enter">
                  Recuperar Senha
                </button>

                <button
                  type="submit"
                  className="button-back"
                  onClick={() => router.push('/login')}
                >
                  Voltar
                </button>

                <Grid container>
                  <Grid item xs></Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default RecoverPassword;
