import React,{useEffect, useState} from 'react'

const ItemCount = () => {

    const [count,setCount] = useState(0)

    const [compra, setCompra] = useState(false)

    const sumar = () => {
        setCount(count +1)
    }
    const restar = () => {
        setCount(count -1)
    }

    const comprarProduct = () => {
        setCompra(!compra)
    }

    console.log('soy ItemCount')

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
        <div>
            <button className='btn btn-danger' onClick={restar}>restar</button>
            <span className='btn'>{count}</span>
            <button className='btn btn-success' onClick={sumar}>sumar</button>
            <button className='btn btn-primary' onClick={comprarProduct}>comprar</button>
        </div>
    )
}

export default ItemCount