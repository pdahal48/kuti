import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment'
import './Styles/SareeDetail.css'

const SareeDetail = ({ price, desc , stiched, blouseSize, category, waistSize, length, size, addCartItems, item }) => {
    return (
        <div>
            <Row>
                <Col className="text-start">
                    <h3>{ desc }</h3>
            </Col>
            </Row>
            <Row>
            
            <Col className="del-date text-start">Estimated Delivery Date: 
                <Moment 
                    add={{days: 5}}
                    format=" MMMM DD, YYYY"
                />
            </Col>
            </Row>
            <Row>
            <Col className="text-start">
                <div className="item-price">Price: ${price}</div>
            </Col>
            </Row>
            {category === "Saree" && 
                <Row>
                    <Col className="text-start mt-3">
                        <h6>Blouse: {stiched ? 'Stiched' : 'Unstiched'}</h6>
                        <h6>Blouse Size: {blouseSize}</h6>
                    </Col>
                </Row>
            }
            {category === "Lahenga" && 
                <Row>
                    <Col className="text-start mt-3">
                        <h6>Blouse Size: {blouseSize}</h6>
                        <h6>Waist Size: {waistSize}</h6>
                        <h6>Length: {length}</h6>
                    </Col>
                </Row>
            }
            {category === "Jwelery" && 
                <Row>
                    <Col className="text-start mt-3">
                        <h6>Size: {size}</h6>
                    </Col>
                </Row>
            }
            <Row>
                <Col className="mb-3 mt-1 text-start ms-3">
                    <Row className='addBtn col-3 mt-2 text-center'>
                        <Col className='col-3 minus'>
                            -
                        </Col>
                        <Col className='col-6 qty' onClick={() => addCartItems(item)}>
                            Add
                        </Col>
                        <Col className='col-3 plus'>
                            +
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr></hr>
            <Row className="mt-1">
                <Col className="col-5 mt-3">
                    <Row>
                        <Col className="col-2 ml-5">
                            <img 
                                className="Assurance-logo"
                                src="https://cdn-icons.flaticon.com/png/512/3002/premium/3002398.png?token=exp=1645578950~hmac=c7a42f40db3bc8568f9655e9ad52b8cd"
                            />
                        </Col>
                        <Col className="col-8 text-start Assurance-text">
                            <h5>Assured Quality</h5>
                        </Col>
                    </Row>
                <Row>
                    <Col className="col-2 mt-0 text-start">
                        <img 
                            className="Returns-logo"
                            src="https://t3.ftcdn.net/jpg/03/63/83/14/240_F_363831489_H2Dt9OzDydjB3rUJpXruItmsTsvvvjb2.jpg"
                        />
                    </Col>
                    <Col className="col-8 mt-3 text-start mx-2">
                        <h5>Easy Returns</h5>
                    </Col>
                </Row>
                </Col>
                <Col className="col-7">
                <Row>
                    <Col className="col-1 text-start">
                        <img 
                            className="Returns-logo"
                            src="https://t3.ftcdn.net/jpg/02/83/57/52/240_F_283575266_pEcCeYDiOjgXYKmWAw4GA6Hm1ymeCKQs.jpg"
                        />
                    </Col>
                    <Col className="col-9 mt-3 text-start mx-4">
                        <h5>100% Purchase Protection</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-1">
                        <img 
                            className="Exclusive-logo"
                            src="https://t4.ftcdn.net/jpg/03/69/02/75/240_F_369027569_Yrn77LUwYdV8o5zzsiqEr7Lvuj43RjYp.jpg"
                        />
                    </Col>
                    <Col className="col-9 mt-2 text-start Exclusive-text">
                        <h5>Exclusive Collections</h5>
                    </Col>
                </Row>
                </Col>
            </Row>
            <hr></hr>
        </div>
    )
}

export default SareeDetail;