import React from 'react';
import { Button } from 'react-bootstrap';

const SareeDetail = ({ name, price, desc }) => {
    return (
        <div>
            <h3>{ desc }</h3>
            <div>Estimated Delivery Date: {'Dec. 20th, 2021'}</div>
            <div>Price: ${price}</div>
            <Button className="btn-warning">Add to Cart</Button>
        </div>
    )
}

export default SareeDetail;