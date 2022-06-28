import React, { useState } from 'react'
import { Modal, Box, Typography, Button } from '@mui/material'
import {style as cartStyle} from '../Cart/Cart';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import {useNavigate} from 'react-router-dom';

const buttonStyle={fontSize: '18px',border: '1px solid black', margin: '20px', color: 'black', '&:hover': {
  border: '1px solid #666666',
  color: '#595959'
}}

const ContactModal = (props) => {
  const navigate = useNavigate()

  const closeModalHandler = () => {
    props.setOpen(false);
  };

  return (
    <Modal onClose={closeModalHandler} open={props.open}>
      <Box sx={{...cartStyle, width: '400px', display: 'flex', flexDirection: 'column', margin: 'auto'}}>
      <Button endIcon={<WhatsAppIcon/>} href={'https://wa.me/972542876772'} target="_blank" rel="noopener" sx={buttonStyle} variant="outlined">WHATSAPP</Button>
      <Button endIcon={<EmailIcon/>} onClick={() => navigate('mail-me')} sx={buttonStyle} variant="outlined">EMAIL</Button>
      </Box>
    </Modal>
  )
}

export default ContactModal