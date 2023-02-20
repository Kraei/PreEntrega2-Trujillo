import React from 'react'
import ItemList from './ItemList';
import {useState} from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const {category} = useParams();
  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    return data;
  };

  // const getProducts = async () => {
  //   const response = await fetch('https://fakestoreapi.com/products');
  //   //console.log(response);
  //   const data = await response.json();
  //   //console.log(data);
  //   return data;
  // };

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

  const catFilter = products.filter((item) => item.category === category);

    
  return (
  <>
    <div>
        {category ? <ItemList items={catFilter}/> : <ItemList items={products} />}
        
    </div>
    {renderProducts}
  </>
    
  )  
}

export default ItemListContainer