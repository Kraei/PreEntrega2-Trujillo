import React from 'react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";

function Item({id, name, price, pictureUrl, stock, category}) {
  return (
    <>
    <div key = {id}>{name}</div>
    <p>Categoría: {category}</p>
    <p>Precio: {price}</p>
    <ItemCount/>
    </>
  )
}

export default Item