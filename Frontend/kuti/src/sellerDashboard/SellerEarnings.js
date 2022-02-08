import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import './Styles/SellerEarnings.css'

const element = <FontAwesomeIcon icon={faArrowCircleUp} size="1x"/>

const SellerEarnings = () => {
    return (
        <Row className="mt-3 seller_earnings">
            <Row>
                <Col>
                    <span className="earnings-title"></span>
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
                        10% {element}
                    </div>
                </Col>
            </Row>
        </Row>
    )
}

export default SellerEarnings;