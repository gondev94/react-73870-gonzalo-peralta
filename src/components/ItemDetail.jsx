import React from 'react'

const ItemDetail = ({detalle}) => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
            <h1 style={{fontSize:'3.5rem'}} className='m-4'>Detalle de: {detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} />
            <p style={{fontSize:'1.7rem'}} className='m-4 fw-bold'>{detalle.description}</p>
            <p style={{fontSize:'1.3rem'}}className='fw-bold'>Stock: {detalle.stock} unidades</p>
            <p style={{fontSize:'1.3rem'}} className='fw-bold'>Precio: €{detalle.price}</p>
        </div>
    )
}

export default ItemDetail