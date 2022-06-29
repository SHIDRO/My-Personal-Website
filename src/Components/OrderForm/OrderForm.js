import React from "react";
import { Grid, Container, Typography, Link, Button, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

//WHEN ADDING PAYMENT IS READY:

// const OrderForm = () => {
//   return (
//     <Container maxWidth="md">
//         <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>

//             </Grid>
//             <Grid item xs={12} sm={6}>

//             </Grid>
//         </Grid>
//     </Container>
//   )
// }

const OrderForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const onCancel = () => {
        const page = location.pathname.split('/order')[0];  
        navigate(page);
    }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Typography variant="h3">Order:</Typography>
      <Typography variant="subtitle1" gutterBottom>
        Our payment methods are on the way...
      </Typography>
      <Link sx={{typography: 'body1', fontSize: '20px', display: 'block'}} target="_blank" rel="noopener" href="https://www.fiverr.com/p4nda_boy/build-and-design-your-next-prefect-website" underline="none">
      {' Order Here >'}
      </Link>
      <Button onClick={onCancel} sx={{justifyContent: 'right'}} variant="text" color="error" >Cancel</Button>
    </Box>
  );
};

export default OrderForm;
