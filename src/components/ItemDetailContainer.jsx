import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})

    useEffect(()=>{
        getOneProduct('02')
        .then((res)=>setDetalle(res))
        .catch((error)=> console.log(error))
    },[])
    return(
        <>
        <ItemDetail detalle={detalle} />
        </>
    )
}

export default ItemDetailContainer