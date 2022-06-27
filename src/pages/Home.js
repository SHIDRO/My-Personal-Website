import { Divider, TextField, Typography, Paper, Box, Button, Avatar } from "@mui/material";
import { Container } from "@mui/system";
import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import Info from "../Components/UI/Info";

const Home = () => {
  const matches1388 = useMediaQuery('(max-width: 1388px)');
  const matches1000 = useMediaQuery('(max-width: 1000px)');
  const matches533 = useMediaQuery('(max-width: 560px)')
  const matches350 = useMediaQuery('(max-width: 350px)')

  let textVariant = 'h3';
  let width = "50%";
  let imgHeight = "600px";
  let buttonSize = 'large'
  let buttonMargin = '60px 0 0 30px'

  if(matches350){
    textVariant="h6"
    width='80%'
    buttonSize='medium'
    imgHeight = '450px'
    buttonMargin = '30px 0 0 30px'
    imgHeight = '490px'
  }
  else if(matches533){
    textVariant="h6"
    width='80%'
    buttonSize='medium'
    imgHeight = '450px'
    buttonMargin = '30px 0 0 30px'
  } else if(matches1000){
    width='80%'
    textVariant = 'h4'
    imgHeight = '500px'
    buttonMargin = '40px 0 0 30px'
  } else if(matches1388){
    width="60%"
  }

  const testRef = useRef();

  console.log(matches1388);
  return (
    <Container sx={{ marginTop: '20px', maxWidth: '80%'}} maxWidth="">
      <Paper
        style={{

          backgroundImage: `url(https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png)`,
          height: imgHeight,
          margin: ' 20px auto 30px',
          backgroundPosition: "center center",
          backgroundSize: "cover",
          opacity: 1
        }}
      >
      <Box sx={{color: 'white'}}>
        
        <Typography
          sx={{paddingTop: '80px', paddingLeft: '30px', paddingRight: '10px'}}
          align="left"
          gutterBottom
          variant="h6"
        >
          WEB DEVELOPER & DESIGNER.
        </Typography>

        <Typography
        sx={{width: '80%',marginTop: '10px', paddingLeft: '30px'}}
        variant={textVariant}
        >
        Hi, My name is Adam.
        </Typography>

        <Typography
        sx={{width: width, paddingLeft: '30px'}}
        variant={textVariant}
        >
        im a Web Developer at intermediate level.
        I have wide & deep knowledge in web development.
        </Typography>

        <Button sx={{margin: `${buttonMargin}`}} size={buttonSize} variant="contained" >
          Let's Talk
        </Button>
        </Box>
      </Paper>

      <Info/>

      <Outlet />
    </Container>
  );
};

export default Home;
