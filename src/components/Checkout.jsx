import React, { useContext, useState} from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'


const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal} = useContext(CartContext)
    const buyerData = (e) =>{
        setBuyer(
            {
            ...buyer,
            [e.target.name] : e.target.value
            }
        )
    }
   

    const finalizarCompra = (e) => {
        //hacer que no recargue la pagina
        e.preventDefault()
        let order = {
            comprador:buyer,
            compras:cart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(db, 'orders')
        //agrego el doc
        addDoc(ventas, order)
        .then((res)=>{
            setOrderId(res.id)
            clearImmediate()
        })
        .catch((error)=> console.log(error))
    }
    
    return (
        <>
        {
        orderId
        ?<div>
            <h2>Generaste la orden de compra</h2>
            <p>La referencia es: {orderId}</p>
            <Link className='btn btn-dark' to='/'>Volver a comprar</Link>
        </div>
        :
                <div>
            <h1>Complete con sus datos</h1>
            <form onSubmit={finalizarCompra}>
                <input className='form-control' name='name' placeholder='Ingrese su nombre' type="text" onChange={buyerData} />
                <input className='form-control' name='lastname' placeholder='Ingrese su apellido' type="text" onChange={buyerData}/>
                <input className='form-control' name='address' placeholder='Ingrese su domicilio' type="text" onChange={buyerData} />
                <input className='form-control' name='email' placeholder='Ingrese su correo' type="text" onChange={buyerData} />
                <input className='form-control' name='second-email' placeholder='Repita su correo' type="text" onChange={(e)=> setValidMail(e.target.value)} />
                <button className='btn btn-success' type='submit'>Enviar</button>
            </form>
        </div>
        }
        </>
    )
}

export default Checkout