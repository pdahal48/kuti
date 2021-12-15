import React from 'react'
import { Card, Row, Col, Button, Stack } from 'react-bootstrap';
import './Product.css'

//Renders a simple Jwelery card with its name, price, description and material
const ProductCard = ({ name, material, price, src, description, id}) => {
  return (
    <div>
    <Card className="product-card">
        <Row className="justify-content-center">
            <Col className="col-10">
                <Card.Img variant="top" src={src} className="product-image"/>
            </Col>
        </Row>
    </Card>
        <Row>
            <Card.Text>{name}</Card.Text>
        </Row>
        <Row>
            <Card.Text className="price">${price}</Card.Text>
        </Row>
    </div>
  )
}

export default ProductCard;