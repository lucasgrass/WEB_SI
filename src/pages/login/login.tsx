import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { authenticate } from '@portal/store/Auth/action';

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const login_info = new FormData(event.currentTarget);
    console.log({
      email: login_info.get('email'),
      password: login_info.get('password'),
    });
  };

  const dispatch = useDispatch();

  return (
    <div className="container-father">
      <div className="container-left">
        <div className="container-name">
          <h2 className="text-grafia">
            GRAFIA
            <span className="text-cidade">Cidade</span>
          </h2>
        </div>
      </div>
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
                  autoComplete="current-password"
                />
                <button
                  type="submit"
                  className="button-enter"
                  onClick={() =>
                    dispatch(authenticate({ email: '', password: '' }))
                  }
                >
                  Entrar
                </button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href="#"
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
}
