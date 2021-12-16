import React from 'react';
import { Button } from 'react-bootstrap';

const SareeDetail = ({ name, price }) => {
    return (
        <div>
            <h1>{ name }</h1>
            <div>Estimated Delivery Date: {'Dec. 20th, 2021'}</div>
            <div>Price: ${price}</div>
            <Button className="btn-warning">Add to Cart</Button>
        </div>
    )
}

export default SareeDetail;