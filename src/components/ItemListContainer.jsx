import React from 'react'
import ItemList from './ItemList';
import {useState} from 'react';
import { useEffect } from 'react';

const ItemListContainer = ({saludo}) => {
  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    return data;
  };

  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  const renderProducts = products.map((item) => {
    return <ItemList key={item.id} {...item}/>

  })

  getProducts();

    
  return (
  <>
    <div>
        <h1>{saludo}</h1>
        
    </div>
    {renderProducts}
  </>
    
  )  
}

export default ItemListContainer