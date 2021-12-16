import React, { useState } from 'react';
import { Tabs, Tab, Row, Col, Button } from 'react-bootstrap';

const SareeSpecs = ({name, brand, color, material, occassion, condition}) => {

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
                        <p><b>Brand:</b> {brand}</p>
                        <p><b>Color:</b> {color}</p>
                    </Col>
                    <Col className="col-text-start 6">
                        <p><b>Material:</b> {material}</p> 
                        <p><b>Occassion:</b> {occassion}</p> 
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
                    <p><b>Bussiness Name:</b> {'Reynoldsburg Saree business'}</p>
                    <p><b>Address:</b> {'123 E. Main st Reynoldsburg, Ohio 45011'}</p>
                    <p><b>Phone: {' '} </b> 
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
                    <p><b>Email:  {' '}</b> 
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
            </Tab>
        </Tabs>
    </div>
    )
}

export default SareeSpecs;