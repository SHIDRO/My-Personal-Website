import { Modal, Box, Typography, Divider,Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import {useNavigate, Routes, Route, useLocation} from 'react-router-dom'
import OrderForm from '../OrderForm/OrderForm';
import {useMediaQuery} from '@mui/material';

export const style = {
    position: 'absolute',
    top: '45%',
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
    const match682 = useMediaQuery('(max-width: 682px)');
    const match485 = useMediaQuery('(max-width: 485px)');
    const match380 = useMediaQuery('(max-width: 380px)');

    const location = useLocation();
    const {cart} = useSelector(state => state);
    const navigate = useNavigate();

    if(match380){
      style.width = 250;
      style.top ="50%"
    } else if(match485){
      style.top ="50%"
      style.width = 300
    } else if(match682){
      style.top ="45%"
      style.width = 400
    } else {
      style.top ="45%"
      style.width = 600
    }

    const onClose = () => {
      if(location.pathname === "/cart"){
        return navigate('/')
      }
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
              <hr size="1" color='#666666' style={{marginTop: '20px'}}/>
     
        <Routes>
              {cart.cart.length > 0 && <Route path="order" element={<OrderForm/>}/>}
        </Routes>
        </Box>
        
    </Modal>
  )
}

export default Cart