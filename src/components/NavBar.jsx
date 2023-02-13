import React, {useState} from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {

    const sections = ['Home', 'About', 'Contact', 'Login'];
    const menu = sections.map((section) => 
    <li key={section}>
        <a href='#'>{section}</a>
    </li>
   )
  return (
  <>
    <div>
        <h1>Soulmate desde el navBar</h1>
        <ul className ='menu'>{menu}</ul>
        <CartWidget />
    </div>
  </>
  )
}

export default NavBar