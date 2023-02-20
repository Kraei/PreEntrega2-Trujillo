import React from 'react'

function ItemList({title, price, image}) {
  return (
    <>
    <h5>{title}</h5>
    <p>${price}</p>
    <img src={image}/>

    </>
  )
}

export default ItemList