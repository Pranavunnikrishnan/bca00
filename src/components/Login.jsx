import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h3>Facebook</h3>
      <Typography variant='h5' color='primary'>Login to Facebook</Typography>
      <TextField label='Email or mibile number' variant='outlined'/>
      <br></br>
      <TextField type={'password'}  label='password' variant='outlined'/>
      <br></br>
    </div>
  )
}

export default Login
