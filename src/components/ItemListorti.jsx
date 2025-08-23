import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
    return (
        <div className='row' style={{justifyContent:'center',}} >
            {data.map((prod)=> <Item key={prod.id} className='col d-flex' prod={prod}/> )}
        </div>
    )
}

export default ItemList