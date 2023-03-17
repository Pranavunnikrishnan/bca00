import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
            <h3>Facebook</h3>
      <Typography variant='h5' color='primary'>Create account</Typography>
      <TextField label='first name' variant='outlined'/>
      <TextField label='surname' variant='outlined'/>
      <br></br>
      <TextField label='email or mobile number' variant='outlined'/>
      <br></br>
      <TextField type={'password'} label='password' variant='outlined'/>
      <br></br>
      {/* <button variant="contained" color='success'>Signup</button>  */}
      <Button variant='contained' color='success' >SignUp</Button>

    </div>
  )
}

export default Signup
