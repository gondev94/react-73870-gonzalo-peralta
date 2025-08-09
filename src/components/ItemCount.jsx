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
        console.log('me ejecuto siempre')
    })

    // se ejecuta solo una vez
    useEffect(()=>{
        console.log('me ejectuo una sola vez')
    },[])

    //
    useEffect(()=>{
        console.log('me ejecuta carga el componente y siempre que commpra cambie', compra)
    },[compra])


    return (
        <div className='d-flex justify-content-center flex-column'>
            <div>
            <button className='btn btn-danger' onClick={restar}>restar</button>
            <span className='btn'>{count}</span>
            <button className='btn btn-success' onClick={sumar}>sumar</button>
            </div>
            <button className='btn btn-primary' disabled={count === 0} onClick={comprar}>comprar</button>
        </div>
    )
}

export default ItemCount