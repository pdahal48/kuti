import React, { useState } from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';

const SareeSpecs = ({name, brand, color, material, occassion, condition, seller}) => {

    const [showPhone, setShowPhone] = useState(false)
    const [showEmail, setShowEmail] = useState(false)
    

    const handlePhoneDetail = () => {
        setShowPhone(true)
    }

    const handleEmailDetail = () => {
        setShowEmail(true)
    }

    return (
    <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="specs" title="Product Specifications">
                <Row>
                    <Col className="text-start col-6">
                        <p><b>Name:</b> {name} </p>
                        <p><b>Material:</b> {material}</p> 
                    </Col>
                    <Col className="col-6 text-start">
                        <p><b>Color:</b> {color}</p>
                        <p><b>Condition:</b> {condition === 'used' ? 'Used' : 'New'}</p>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="policy" title="Return Policy">
            <Row>
                <Col className="text-start">
                    <p>
                        Return policy depends on the seller. If you have any questions, please contact
                        the seller. 
                    </p>
                    <p>
                        <b>Returns accepted within</b>: {'30 days'}
                    </p>
                        
                </Col>
            </Row>
            </Tab>
            <Tab eventKey="contact" title="Seller information">
            <Row>
                <Col className="text-start">
                    <Row>
                        <Col className="col-4">
                            <p>Business Name: </p>
                        </Col>
                        <Col className="col-8 justify-content-start">
                            <b>{seller.business_name}</b>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-4">
                            <p> Business Address: </p>
                        </Col>
                        <Col className="col-8 justify-content-start">
                            {seller.business_address} <br></br>
                            {seller.business_city}, {seller.business_state} {seller.business_zip_code}
                        </Col>
                    </Row>
                    <Row>
                    <Col className="col-4">
                            Phone Number: 
                        </Col>

                        <Col className="col-8 justify-content-start">
                            <p> 
                                { 
                                showPhone
                                    ? ' 614-111-0000'
                                    : <button 
                                            className="btn btn-sm btn-secondary"
                                            onClick = {handlePhoneDetail}
                                        > Show Phone Number
                                        </button>
                                }
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-4">
                                Email: 
                        </Col>
                        <Col className="col-8 justify-content-start">
                            <p>
                                {
                                    showEmail
                                        ? ' rsb@gmail.com'
                                        : <button 
                                                className="btn btn-sm btn-secondary"
                                                onClick = {handleEmailDetail}
                                            > Show Email
                                            </button>
                                }
                            </p>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
            </Tab>
        </Tabs>
    </div>
    )
}

export default SareeSpecs;