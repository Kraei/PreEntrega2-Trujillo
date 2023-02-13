import React from 'react'
import ItemCount from './ItemCount'

function ItemDetailContainer() {
  return (
    <>
    <div>
        <h2>ItemDetailContainer</h2>
    <img 
        src="src/assets/img/img01.jpg"/>
        <figcaption>Algo</figcaption>
    </div>
    <ItemCount/>
    </>
  )
}

export default ItemDetailContainer