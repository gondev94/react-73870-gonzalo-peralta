import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div style={{padding:'2rem'}}>
        <h2>Tu carrito está vacío</h2>
        <h4>Te invitamos a revisar los sabores que tenemos para tí</h4>
        <Link className='btn btn-dark' to='/'>Ir a comprar </Link>
    </div>
  )
}

export default EmptyCart