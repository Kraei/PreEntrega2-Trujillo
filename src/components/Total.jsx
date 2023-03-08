import React from 'react';
import { Button } from '@mui/material';

function Total() {
  return (
    <>
        <p>Total items: 3</p>
        <p>Total price: $100</p>
    
        <Button variant="contained" color="primary">
            Checkout
        </Button>
    
    </>
  )
}

export default Total