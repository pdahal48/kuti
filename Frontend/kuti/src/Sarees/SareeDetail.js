import React from 'react';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment'
import './Styles/SareeDetail.css'

const SareeDetail = ({ name, price, desc }) => {
    const delDate = new Date();

    return (
        <div>
            <h3>{ desc }</h3>
            <div className="del-date">Estimated Delivery Date: 
                <Moment 
                    add={{days: 5}}
                    format=" MMMM DD, YYYY"
                />
            </div>
            <div className="item-price">Price: ${price}</div>
            <Button className="btn-primary">Add to Cart</Button>
        </div>
    )
}

export default SareeDetail;