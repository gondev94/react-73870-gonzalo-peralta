import { createContext, useState } from "react";

//creamos el contexto
export const CartContext = createContext()

//creamos el proveedor

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    // las funciones para modificar el carrito:

    // agregar items
        const addItem = (item, qty) => {
            //agregar y modificar el estado del carrito manteniendo los datos sin pisarlos
            setCart([...cart, {...item, quantity:qty}])
        }
    // borre todo el carrito
        const clear = () => {
            setCart([])
        }
    // elimine un item del carrito
        const removeItem = (id) => {
            setCart(cart.filter(prod => prod.id !== id))
        }
    // total a pagar

    // total de items en el carrito
        const cartQuantity = () =>{
            return cart.reduce((acc, prod) => acc += prod.quantity, 0)
        }
    //devolver tru o false si esta o no en el carrito
        const isInCart = (id) => {
            return cart.some((prod) => prod.id === id)
        }



    return (
        <CartContext.Provider value={{cart, clear, addItem, removeItem, cartQuantity, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}