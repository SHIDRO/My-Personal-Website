import React from "react";
import { Container, Avatar, Box, Typography, Grid } from "@mui/material";

const infoSections = [
  {
    id: '1',
    avatarfloat: "right",
    textFloat: "left",
    text: "Some Text",
    image: "OP",
  },
  {
    id: '2',
    avatarfloat: "left",
    textFloat: "right",
    text: "Some Text",
    image: "AD",
  },
];

const avatarStyle = { width: "100px", height: "100px", marginTop: "10px" };

const Info = () => {
  return (
    <Grid sx={{backgroundColor: '#cccccc'}} container>
        
        {infoSections.map((info) => (
            
            <Grid item lg={12} >
            <Box sx={{ margin: "20px auto 140px", width: "80%" }}>
            <Typography
              sx={{ float: info.textFloat, margin: "20px 0 0 0" }}
              variant="h4"
            >
              {info.text}
            </Typography>
            <Avatar sx={{ float: info.avatarfloat, ...avatarStyle }}>
              {info.image}
            </Avatar>
            </Box>
            </Grid>

        ))}
  
    </Grid>
      
  );
};

export default Info;
