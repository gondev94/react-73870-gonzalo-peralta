import React from 'react'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const ItemDetail = ({detalle}) => {
const {addItem, itemQuantity} = useContext(CartContext)
const [purchase, setPurchase] = useState(false)

    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} de productos`)
        addItem(detalle, cantidad)
        setPurchase(true)
        Swal.fire({
            position: 'center',
            title: `Agregaste ${cantidad} ${detalle.name} al carrito`,
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1000
        })

    }
    const stockActualizado = detalle.stock - itemQuantity(detalle.id)
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
            <h1 style={{fontSize:'3.5rem'}} className='m-4'>Detalle de: {detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} />
            <p style={{fontSize:'1.7rem'}} className='m-4 fw-bold'>{detalle.description}</p>
            <p style={{fontSize:'1.3rem'}}className='fw-bold'>Stock: {stockActualizado} unidades disponibles</p>
            <p style={{fontSize:'1.3rem'}} className='fw-bold'>Precio: €{detalle.price}</p>
            {purchase 
            ?  <div style={{width:'80%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
               <Link className='btn btn-dark' to='/'>Seguir Comprando</Link>
               <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
               
               </div>
            : <ItemCount stock={stockActualizado} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail