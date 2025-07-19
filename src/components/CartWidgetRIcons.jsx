import { BsCart4 } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';


const CartWidgetIcon = () => {
    return(
        <>
        <BsCart4 fontSize={'1.8rem'} />
        <Badge bg="danger" >5</Badge>
        </>
    )
}

export default CartWidgetIcon