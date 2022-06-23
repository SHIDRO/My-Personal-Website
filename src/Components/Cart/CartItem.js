import React from 'react'
import { Box, Typography } from '@mui/material'

const CartItem = ({amount, name, price}) => {
  return (
    <Box sx={{borderTop: '1px solid grey', padding: '10px'}}>
        <Typography variant="h5"><b>name:</b> {name}</Typography>
        <Typography variant='h5'><b>amount:</b> {amount}</Typography>
        <Typography sx={{textAlign: "right" }} variant="h6" align="right"><b>price:</b> {price}$</Typography>
    </Box>
  )
}

export default CartItem