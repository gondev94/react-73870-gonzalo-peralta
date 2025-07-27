import { useEffect, useState } from "react"
import { getProduct } from "../mock/AsyncService"
import ItemList from './ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = ({saludo}) => {
    //declaramos el estado donde vamos a guardar los productos
    const [data, setData] = useState([])
    //declaramos el useEffect para que se ejecute una sola vez, por eso ponemos el array de dependencias vacio []
    const{category}= useParams()

    useEffect(()=>{
        //llamar a la función que retorna una promesa
        getProduct()
        //tratar la promesa
        .then((res)=> {
            if(category){
                setData(res.filter((prod)=> prod.category === category))
            }else{
                setData(res)
            }
        } ) //guardamos la respuesta para poder utilizar

        .catch((error)=> console.log(error))
    },[category])


console.log(data,'data')
    return (
        <div>
            <h1>{saludo}</h1>
            {/* no muy recomendale */}
            {/* {data.map((producto,index)=> <p key={index}> {producto.name} </p> */}
            {/* recomendale */}
            {/* {data.map((producto)=> <p key={producto.id}> {producto.name} </p>
        )} */}
        <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer