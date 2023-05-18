import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
    <h1>Tienda de Vinos</h1>
    <ul>
        <button>Tinto</button>
        <button>Blanco</button>
        <button>Rosado</button>
    </ul>
    <CartWidget />
    </div>
  )
}

export default NavBar