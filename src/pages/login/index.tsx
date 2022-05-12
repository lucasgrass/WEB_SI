import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { authenticate } from '@portal/store/Auth/action';
import type { NextPage } from 'next';
import { sign } from 'crypto';
import Logo from '@portal/components/Logo';

const theme = createTheme();

const SignIn: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const login_info = new FormData(event.currentTarget);
    console.log({
      email: login_info.get('email'),
      password: login_info.get('password'),
    });

    dispatch(
      authenticate({
        email: login_info.get('email'),
        password: login_info.get('password'),
      })
    );
  };

  return (
    <div className="container-father">
      <Logo />
      <div className="width-100">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: '65%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2 className="title">Fazer Login</h2>
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Digite sua senha"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button type="submit" className="button-enter">
                  Entrar
                </button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href="/recover_password"
                      variant="body2"
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '8%',
                        color: '#A200FF',
                        fontSize: '14px',
                      }}
                    >
                      Esqueceu sua senha?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
};
export default SignIn;
