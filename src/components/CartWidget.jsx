import React from 'react'
import Checkout from './Checkout';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Box } from '@mui/material';
import Total from './Total';
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function CartWidget() {
    const [{ cart }, dispatch] = useStateValue();
    
    function rendertoCart() {
        return (
            <div>
                {cart?.map((product) => (
                    <Grid item xs={12} md={6} lg={4}>
                        <Checkout key={product.id} {...product}/>
                    </Grid>
                )
                )}
            </div>
        )
    }

    rendertoCart() 

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
      {rendertoCart}
      </Grid>
    </Box>
    <Typography>
    <Total/>
    </Typography>
    </>
  )
}

export default CartWidget