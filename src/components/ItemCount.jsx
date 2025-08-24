import React,{useEffect, useState} from 'react'

const ItemCount = ({stock, onAdd}) => {

    const [count,setCount] = useState(0)

    const [compra, setCompra] = useState(false)

    const sumar = () => {
        if(count < stock)
        setCount(count +1)
    }
    const restar = () => {
        if(count > 0)
        setCount(count -1)
    }

    const comprar = () => {
        onAdd(count)
    }

    // ejemplo de useeffect

    // se va a ejecvutar siempre que se monte y actualice el componente
    useEffect(()=>{
        
    })

    // se ejecuta solo una vez
    useEffect(()=>{
       
    },[])

    //
    useEffect(()=>{
        console.log('me ejecuta carga el componente y siempre que commpra cambie', compra)
    },[compra])


    return (
        <>
        {stock > 0

        ?<div className='d-flex justify-content-center flex-column'>
            <div>
            <button className='btn btn-danger' onClick={restar}>-</button>
            <span className='btn'>{count}</span>
            <button className='btn btn-success' onClick={sumar}>+</button>
            </div>
            <button className='btn btn-primary' disabled={count === 0 || stock === 0} onClick={comprar}>comprar</button>
        </div>
        : <p style={{fontSize:'2rem'}}>Lo sentimos no hay stock disponible</p>}
        </>
    )
}

export default ItemCount