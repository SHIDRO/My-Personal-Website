import { Modal, Box, Typography, Divider } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/store';
import CartItem from './CartItem';
import {useNavigate, useLocation} from 'react-router-dom'

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
    const {cart} = useSelector(state => state);
    const navigate = useNavigate();


    const onClose = () => {
        navigate(-1);
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
        </Box>
    </Modal>
  )
}

export default Cart