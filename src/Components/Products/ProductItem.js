import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useDispatch } from "react-redux";
import {cartActions} from '../../store/store';

const ProductItem = ({ price, name, description, deliveryDays }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const item = {name, price, description, deliveryDays};

    dispatch(cartActions.addToCart(item));
  };

  return (
    <Card raised sx={{ maxWidth: 345, margin: "20px auto" }}>
      <CardMedia
        component="img"
        height="300"
        image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/261738877/original/e43fae574c3c92e568a69b8172010834cdb045a5/build-and-design-your-next-prefect-website.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography fontSize={"18px"} variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography align="right" sx={{ marginRight: "20px" }} variant="h6">
          {price}$
        </Typography>
        <AccessTimeIcon />
        <Typography align="left" variant="subtitle1">
          {deliveryDays} Days Delivery
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={addToCartHandler}
          sx={{ marginLeft: "10px", marginBottom: "10px" }}
          size="medium"
          variant="contained"
          endIcon={<ShoppingCartIcon />}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
