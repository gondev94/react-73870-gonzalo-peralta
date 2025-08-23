import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Item = ({prod}) => {
    console.log(prod)
    return (
    <Card style={{ width: '18rem', margin: 10, alignItems:'center', display:'flex',}} >
      <Card.Img variant="top" src={prod.img}/>
      <Card.Body className='d-flex flex-column' >
        <Card.Title style={{textAlign:'center'}}>{prod.name}</Card.Title>
        <div className="flex-grow-1">
        <Card.Text className='text-center'>
           {prod.description}
        </Card.Text>
        </div>
        <div>
           <Card.Text className="text-center fw-bold m-4" >
          €{prod.price},00
        </Card.Text>
        </div>
        <div className="mt-auto d-flex justify-content-center">

        {/* es una forma de hacerlo */}
        <Link className='btn btn-primary' to={'/item/'+prod.id}>Ver más</Link> 
        {/* <Link className='btn btn-primary' to={`/item/${prod.id}`}>Ver más</Link> */}
        
        </div>
      </Card.Body>
    </Card>
    )
}

export default Item

