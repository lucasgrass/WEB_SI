import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function RecoverPassword() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '65%',
              }}
            >
              <h2 className="title-recover">Esqueci minha senha</h2>
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
                <button type="submit" className="button-enter">
                  Recuperar Senha
                </button>
                <button type="submit" className="button-back">
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
}
