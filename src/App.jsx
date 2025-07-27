import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  console.log('soy app')
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer saludo='Bienvenidos a mi tienda de café!'/>}/>
          <Route path='/categories/:category'element={<ItemListContainer saludo='Estas en la categoria: '/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>


  )
}

export default App
