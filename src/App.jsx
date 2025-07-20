import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
 console.log('soy app')
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <ItemListContainer saludo='Bienvenidos a mi tienda de café!'/> 
    <ItemCount/>
    <ItemDetailContainer />
    

    </>
  )
}

export default App
