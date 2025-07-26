import React from 'react'

const ItemDetail = ({detalle}) => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
            <h1 className='m-4'>Detalle de: {detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} />
            <p className='m-4'>{detalle.description}</p>
            <p>Stock: {detalle.stock}</p>
            <p>Precio: €{detalle.price}</p>
        </div>
    )
}

export default ItemDetail