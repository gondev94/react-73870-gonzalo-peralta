import { BsCart4 } from "react-icons/bs";
//importo el hook para usar el contexto
import { useContext } from "react";
//importo el contexto
import { CartContext } from "../context/CartContext";
import Badge from 'react-bootstrap/Badge';


const CartWidgetIcon = () => {
    console.log('soy el cartwidget')

const {cartQuantity}=useContext(CartContext);


    return(
        <>
        <BsCart4 fontSize={'1.8rem'} />
        <Badge bg="danger" >{cartQuantity()}</Badge>
        </>
    )
}

export default CartWidgetIcon