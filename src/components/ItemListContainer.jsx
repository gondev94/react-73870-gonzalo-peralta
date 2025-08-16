import { useEffect, useState } from "react"
import { getProduct } from "../mock/AsyncService"
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({saludo}) => {
    //declaramos el estado donde vamos a guardar los productos
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    //declaramos el useEffect para que se ejecute una sola vez, por eso ponemos el array de dependencias vacio []
    const{category}= useParams()

    //firebase
    useEffect(()=>{
        setLoading(true)
        //referencia de mi coleccion de base de datos
        const productsCollection = category ? query(collection(db, 'productos'), where('category', '==', category)) : collection(db, 'productos')
        //pedir los documentos
        getDocs(productsCollection)
        //tratamos la promesa
        .then((res)=>{
            //limpiamos y creamos nuestro array de datos
            const list = res.docs.map((doc) => {
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])



    //promesa
    // useEffect(()=>{
    //     //llamar a la función que retorna una promesa
    //     setLoading(true)
    //     getProduct()
    //     //tratar la promesa
    //     .then((res)=> {
    //         if(category){
    //             setData(res.filter((prod)=> prod.category === category))
    //         }else{
    //             setData(res)
    //         }
    //     } ) //guardamos la respuesta para poder utilizar

    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false)) //cambiar el loading a false cuando termina la promesa
    // },[category])


console.log(data,'data')
    return (
        <>
        {loading
        ? <LoaderComponent/>
        : <div>
            <h1>{saludo}</h1>
            <ItemList data={data}/>
        </div>
        }
        </>
    )
}

export default ItemListContainer