import { Modal, Box, Typography, Divider,Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import {useNavigate, Routes, Route, useLocation} from 'react-router-dom'
import OrderForm from '../OrderForm/OrderForm';

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '14px'
  };

const Cart = () => {
    const location = useLocation();
    const {cart} = useSelector(state => state);
    const navigate = useNavigate();

    const onClose = () => {
      const page = location.pathname.split('/cart')[0];
      navigate(page);
    }

  return (
    <Modal
    open={true}
    onClose={onClose}
    >
        <Box sx={style}>
            <Typography gutterBottom variant="h3">Cart</Typography>
            <Divider/>
            {cart.cart.map(item => (
                <CartItem key={item.name} name={item.name} price={item.price} amount={item.amount}/>
            ))}
            <Divider/>
            {cart.cart.length > 0 && <Box sx={{ display: 'flex', justifyContent: 'center', marginTop : '20px'}}>
              <Button sx={{marginRight: '15px'}} onClick={onClose} color="error" variant="text">Close</Button>
              <Button onClick={() => navigate('order')} variant="outlined">Order</Button>
            </Box>}

     
        <Routes>
              {cart.cart.length > 0 && <Route path="order" element={<OrderForm/>}/>}
        </Routes>
        </Box>
        
    </Modal>
  )
}

export default Cart