import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { BorderAll } from '@mui/icons-material'
import { Row, Col } from 'react-bootstrap'

const theme = createTheme()

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        height: '100vh',
        backgroundColor: '#000'
      }}
    >
      <Row>
        <Col md={5}>
          <div
            style={{
              display: 'flex',
              backgroundColor: '#A200FF'
            }}
          >
            <p>aaa</p>
          </div>
        </Col>
        <Col md={6}>
          <p>aaa</p>
        </Col>
      </Row>
    </div>
  )
}
