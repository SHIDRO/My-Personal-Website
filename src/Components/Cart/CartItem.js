import React from "react";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../store/store';
import products from '../../constants/products-list';

let variant = 'h5'

const CartItem = ({ amount, name, price }) => {
  const dispatch = useDispatch();
  const match485 = useMediaQuery('(max-width: 485px)');

  if(match485){
    variant = 'h6';
  } else {
    variant = 'h5'
  }

  const onDeleteHandler = () => {
    const item = products.find(item => item.name === name);
    dispatch(cartActions.deleteFromCart(item));
  };

  return (
    <>
    <IconButton onClick={onDeleteHandler} sx={{float: 'left', padding:'16px 10px 0 0'}} aria-label="delete">
    <DeleteIcon />
  </IconButton>

    <Box sx={{ borderTop: "1px solid grey", padding: "10px 10px 10px 33px" }}>
      <Typography variant={variant}>
        <b>name:</b> {name}
      </Typography>
      <Typography variant={variant}>
        <b>amount:</b> {amount}
      </Typography>
      <Typography sx={{ textAlign: "right" }} variant="h6" align="right">
        <b>price:</b> {price}$
      </Typography>
    </Box>
    </>
  );
};

export default CartItem;
