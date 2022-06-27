import React from "react";
import { Avatar, Typography, Grid } from "@mui/material";
import infoSections from "../../constants/infoData";

const Info = () => {
  return (
    <>
      <Grid sx={{ backgroundColor: "#d9d9d9", padding: '20px' }} container>
        <Grid item sx={{ margin: "20px" }} lg={12}>
          <Typography align="center" variant="h4">
            Advanced Technologies
          </Typography>
        </Grid>
        {infoSections.map((info) => (
          <Grid
            key={info.id}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              margin: 'auto'
            }}
            item
            lg={4}
          >
            <Typography
              sx={{ margin: "30px 0 10px 0 " }}
              align="center"
              variant="h5"
            >
              {info.text}
            </Typography>
            <Avatar
              sx={{ width: "120px", height: "120px" }}
              src={info.image}
            ></Avatar>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Info;
