import { Divider, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, {useRef} from 'react'
import {Outlet} from 'react-router-dom';


const Home = () => {
    const testRef = useRef();
  return (
    <Container>
        <Typography align='center' gutterBottom sx={{marginTop: '20px'}} variant="h2"> 
            Home
        </Typography>
        <Divider/>
        <Typography align='center' gutterBottom sx={{marginTop: '20px'}} variant="subtitle1"> 
            Add info about yourself,
            something like (text, picture) sections.
        </Typography>

        <Outlet/>
    </Container>
  )
}

export default Home