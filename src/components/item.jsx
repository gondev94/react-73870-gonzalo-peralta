import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Item = ({prod}) => {
    console.log(prod)
    return (
    <Card style={{ width: '18rem', margin: 10 }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          €{prod.price},00
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    )
}

export default Item

