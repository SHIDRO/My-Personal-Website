import { Typography, Container, Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import WorkItem from '../Components/UI/WorkItem';
import works from '../constants/works';

const Works = () => {
  return (
    <Container>
        <Typography sx={{marginTop: '10px'}} align="center" variant="h3">
            My Works
        </Typography>
          <Grid sx={{marginTop: '20px'}} container spacing={4}>
            
            {works.map(work => (
              <Grid key={work.id} item sm={12} md={6}>
              <WorkItem description={work.description} url={work.url} image={work.image}/>
              </Grid>
            ))}
            
          </Grid>
          
          <Outlet/>

    </Container>
  )
}

export default Works