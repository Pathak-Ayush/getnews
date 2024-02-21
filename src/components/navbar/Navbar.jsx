import React from 'react'
import './Navbar.css'
import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material';
const Navbar = () => {
  const theam = useTheme();
  const th = theam.palette.primary.main
  const tc=theam.palette.primary.light;
  return (
    <div style={{backgroundColor:th}}>
      <Typography padding={3} style={{color:tc}}>
        today we going to build the  the news  web apps
      </Typography>
    </div>
  )
}

export default Navbar