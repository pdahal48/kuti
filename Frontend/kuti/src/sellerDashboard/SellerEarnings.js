import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Styles/SellerEarnings.css'

const SellerEarnings = () => {
    return (
        <div className="mt-3 seller_earnings">
            <Row>
                <Col>
                    <span className="earnings-title">Earnings</span>
                </Col>
            </Row>
            <Row>
                <Col className="earnings-text my-5 col-5">
                    <div>
                        This Months Earning:    
                    </div>
                    <div className="earnings_amount">
                        $5000
                    </div>
                </Col>
                <Col className="percentIncrease col-6">
                    <div className="circle-text">
                        10% Increase
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SellerEarnings;