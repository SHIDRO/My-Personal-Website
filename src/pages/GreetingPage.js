import { Container, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const GreetingPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Typography sx={{ marginTop: "20px" }} align="center" variant="h3">
        Thank you for submitting your email.
      </Typography>
      <Button
        onClick={() => navigate("/")}
        sx={{
          width: "20%",
          margin: "20px auto",
          display: "flex",
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "#404040",
          },
        }}
        variant="contained"
      >
        Back To Home
      </Button>
    </Container>
  );
};

export default GreetingPage;
