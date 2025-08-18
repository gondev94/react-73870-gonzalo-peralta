import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {
  const {cart, clear, removeItem, cartTotal} = useContext(CartContext)
  
    return (
    <div>
      <h1>Tu carrito</h1>
      <div>
      {cart.map((compra)=>(
        <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
          <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
          <span>{compra.name}</span>
          <span>{compra.price}</span>
          <span>€{compra.price}</span>
          <span>unidades: {compra.quantity}</span>
          <span>precio final: €{compra.price * compra.quantity},00</span>
          <button className='btn btn-danger'onClick={()=> removeItem(compra.id)}>X</button>
        </div>
      ))}
      </div>
      <span>Total a pagar: €{cartTotal()}, 00</span>
      <div>
        <button className='btn btn-danger' onClick={clear}>Borrar Carrito</button>
        <Link className='btn btn-success' to='/checkout'>Terminar Compra</Link>
      </div>
    </div>
  )
}

export default CartView