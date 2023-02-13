import React from 'react'

function ItemList({title, price}) {
  return (
    <>
    <h5>{title}</h5>
    <p>${price}</p>
    </>
  )
}

export default ItemList