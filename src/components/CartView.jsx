import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
  const {cart, clear, removeItem, cartTotal} = useContext(CartContext)
  const preConfirm = () => {
    Swal.fire({
      title: '¿Estás seguro de vaciar el carrito?',
      showDenyButton: true,
      denyButtonText: 'No', 
      confirmButtonText: 'Si'
    }).then((result)=>{
      if(result.isConfirmed){
        clear()
      } else if(result.isDenied){
        Swal.fire('No se vació el carrito', '', 'info')
      } 
    })
  }

  
    return (
    <div>
      <h1 className="text-center">Tu carrito</h1>
      <div>
        {cart.map((compra) => (
          <div key={compra.id} className="row align-items-center text-center p-3 border-bottom">
            <div className="col-12 col-md-3">
              <img src={compra.img} alt={compra.name} className="img-fluid" />
            </div>
            <div className="col-6 col-md">
              <span>Producto: {compra.name}</span>
            </div>
            <div className="col-6 col-md">
              <span>Valor: € {compra.price}</span>
            </div>
            <div className="col-6 col-md">
              <span>Unidades: {compra.quantity}</span>
            </div>
            <div className="col-6 col-md">
              <span>Precio final: €{compra.price * compra.quantity},00</span>
            </div>
            <div className="col-12 col-md-auto">
              <button className="btn btn-danger mt-2 mt-md-0" onClick={() => removeItem(compra.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <span className="fw-bold fs-2">Total a pagar: €{cartTotal()},00</span>
      </div>
      <div className="text-center p-4 d-flex flex-column flex-md-row justify-content-center gap-3">
        <button className="btn btn-danger" onClick={preConfirm}>Borrar Carrito</button>
        <Link className="btn btn-success" to="/checkout"> Terminar Compra </Link>
      </div>
    </div>
  )
}

export default CartView