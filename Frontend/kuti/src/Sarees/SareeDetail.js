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
            <Row>
                <Col className="col-5">
                    <Row>
                        <Col className="col-4">
                            <img 
                                src="data:image/png;base64,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"
                            />
                        </Col>
                        <Col className="col-8 mt-3 text-start">
                            <h5>Assured Quality</h5>
                        </Col>
                    </Row>
                <Row>
                    <Col className="col-4 pt-3 pb-1">
                        <img 
                            className="Returns-logo"
                            src="data:image/png;base64,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"
                        />
                    </Col>
                    <Col className="col-8 mt-5 text-start">
                        <h5>Easy Returns</h5>
                    </Col>
                </Row>
                </Col>
                <Col className="col-7">
                <Row>
                    <Col className="col-3">
                        <img 
                            src="data:image/png;base64,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"
                        />
                    </Col>
                    <Col className="col-9 mt-3 text-start me-auto">
                        <h5>100% Purchase Protection</h5>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-3 pt-3 pb-1">
                        <img 
                            src="data:image/png;base64,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"
                        />
                    </Col>
                    <Col className="col-9 mt-5 text-start">
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