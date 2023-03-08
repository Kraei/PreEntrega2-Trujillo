import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemListContainer = () => {
    // const {category} = useParams();
    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    };
    const [products, setProducts] = useState([]);
    console.log(products)

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    const renderProducts = products.map((item) => {
        return (
        <Grid item xs={6} md={3}>
          <ItemList key={item.id} {...item}/>
        </Grid>
        )
    
      })
    
      getProducts();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {renderProducts}
      </Grid>
    </Box>
  );
}
export default ItemListContainer;