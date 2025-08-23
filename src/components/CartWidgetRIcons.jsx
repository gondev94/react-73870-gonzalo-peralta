import { BsCart4 } from "react-icons/bs";
//importo el hook para usar el contexto
import { useContext } from "react";
import Badge from 'react-bootstrap/Badge';
//importo el contexto
import { CartContext } from "../context/CartContext";


const CartWidgetIcon = () => {
const {cartQuantity} = useContext(CartContext)

    return(
        <>
        <BsCart4 fontSize={'1.8rem'} />
        <Badge bg="danger">{cartQuantity()}</Badge>
        </>
    )
}

export default CartWidgetIcon