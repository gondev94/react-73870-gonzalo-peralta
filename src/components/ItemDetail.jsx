import React from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({detalle}) => {
const {addItem} = useContext(CartContext)
    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} de productos`)
        addItem(detalle, cantidad)
    }
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
            <h1 style={{fontSize:'3.5rem'}} className='m-4'>Detalle de: {detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} />
            <p style={{fontSize:'1.7rem'}} className='m-4 fw-bold'>{detalle.description}</p>
            <p style={{fontSize:'1.3rem'}}className='fw-bold'>Stock: {detalle.stock} unidades</p>
            <p style={{fontSize:'1.3rem'}} className='fw-bold'>Precio: €{detalle.price}</p>
            <ItemCount stock={detalle.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail