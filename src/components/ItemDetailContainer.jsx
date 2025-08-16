import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(false)
    const [invalid, setInvalid] = useState(null)
    // const params = useParams()
    const {id} = useParams()
    const navigate = useNavigate()

    //firebase
    useEffect(()=>{
        setCargando(true)
        const prodCollection = collection(db, 'productos')
        //creamos la referencia
        const DocRef = doc(prodCollection, id)

        getDoc(DocRef)
        .then((res)=>{
            if(res.data()){
                setDetalle({id:res.id, ...res.data()})
            }else{
                navigate('/notFound')
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))

    },[id])



    //promesa aparte
    // useEffect(()=>{
    //     setCargando(true)
    //     getOneProduct(id)
    //     .then((res)=>setDetalle(res))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setCargando(false))
    // },[])

    if(invalid){
        return(
            <div>
                <h2>El producto no existe</h2>
                <Link className='btn btn-dark' to='/'>Volver al inicio</Link>
            </div>
        )
    }
    return(
        <>
        {cargando ? <LoaderComponent/> : <ItemDetail detalle={detalle} />}
        </>
    )
}

export default ItemDetailContainer