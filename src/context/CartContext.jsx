import { createContext, useState } from 'react'

// creamos el contexto

export const CartContext = createContext()

// creamos el provedor

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    //funciones para modificar el carrito

    //agregar items
    const addItem = (item, qty)=>{
        console.log(item, qty)
        setCart([...cart, {...item, quantity:qty}])
    }

    //borre todo el carrito
    const clear = () => {
        setCart([])
    }
    //elimine un item

    const removeItem = (id) => {
        setCart (cart.filter((prod) => prod.id !== id))
    }
    //diga el total a pagar

    //diga el total de items en el carrito (cartwidget)
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity,0)
    }

//devolver true o false si el item esta en el carrito
    const isIncart = () => {
        return cart.some((prod) => prod.id ===id)
    }

    return (
        <CartContext.Provider value={{cart, clear, addItem, cartQuantity}}>

            {/* Aquí irían los componentes que necesitan acceso al contexto */}

                {children}
        </CartContext.Provider>
    )

}