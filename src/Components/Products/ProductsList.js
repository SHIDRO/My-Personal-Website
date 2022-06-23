import { Typography, Grid, Container } from "@mui/material";
import React from "react";
import products from "../../constants/products-list";
import ProductItem from "./ProductItem";
import {Outlet} from 'react-router-dom';

const ProductsList = () => {
  return (
    <div>
      <Typography sx={{ marginTop: "20px" }} align="center" variant="h4">
        My Products
      </Typography>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid key={product.name} item xs={12} sm={6} md={4}>
              <ProductItem
                price={product.price}
                name={product.name}
                description={product.description}
                deliveryDays={product.deliveryDays}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Outlet/>
    </div>
  );
};

export default ProductsList;
