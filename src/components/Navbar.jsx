import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }} >
          Facebook
        </Typography>
        <Button color="inherit"><Link to ='/Login' style={{color:'white',textDecoration:'none'}}>Login</Link></Button>
        <Button color="inherit"><Link to ='/Signup' style={{color:'white',textDecoration:'none'}}>signup</Link></Button>
        <Button color="inherit"><Link to ='/Home' style={{color:'white',textDecoration:'none'}}>Home</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
