import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { BorderAll } from '@mui/icons-material';

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div style={{ display:'flex', border: '1px solid red', height:'100vh' }}>
      <div style={{ float:'left', width:'75%', backgroundColor:'#A200FF' }}>
        <div style={{ display:'flex', marginTop:'50%', marginLeft:'35%' }}>
            <h2 style={{ color:'#FFF', fontSize:'40px' }}>
              GRAFIA
              <span style={{ color:'#000000', fontSize:'40px' }}>
                Cidade
              </span>
            </h2>
        </div>
      </div>
      <div style={{ width:'100%' }}>
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: '80%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                <button type='submit'
                style={{
                  color: '#FFF',
                  backgroundColor:'#A200FF',
                  width:'396px',
                  height:'60px',
                  borderRadius:'5px',
                  border:'none',
                  marginTop:'10%',
                  fontSize:'18px',
                  cursor:'pointer'
                }}
                >  
                  Entrar
                </button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2" 
                    sx={{ 
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop:'8%',
                            color:'#A200FF',
                            fontSize:'14px'
                        }}>
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