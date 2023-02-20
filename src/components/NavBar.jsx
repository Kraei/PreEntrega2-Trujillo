import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {

  //   const sections = ['Home', 'About', 'Contact', 'Login'];
  //   const menu = sections.map((section) => 
  //   <li key={section}>
  //       <a href='#'>{section}</a>
  //   </li>
  //  )
  return (
  <>
    <div>
        <h1>Soulmate desde el navBar</h1>
        {/* <ul className ='menu'>{menu}</ul> */}
        <ul>
        <li><Link to={'/'}>
          Home</Link></li>
          
        <li><Link to={'/catalogue'}>Productos</Link></li>
        <li><Link to={'/ItemListContainer'}>ItemListContainer</Link></li>
        <li><Link to={`/category/jewelery`}>Categorias</Link></li>
        <CartWidget />
        </ul>
   </div>
  </>
  )
}

export default NavBar