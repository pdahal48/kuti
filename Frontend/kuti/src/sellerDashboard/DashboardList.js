import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SoldItemsChart from './SoldItemsChart';
import SoldItemsGraph from './SoldItemsGraph';
import SellerEarnings from './SellerEarnings';
import SoldItemsTable from './SoldItemsTable';
import AllItemsTable from './AllItemsTable';
import './Styles/DashboardList.css'

const DashboardList = () => {
    return (
        <div className="mt-3">
            <h2 className="text-center">Seller Dashboard</h2>
                <Row className="pie_line">
                <Col className="col-3 pie">
                    <SoldItemsChart/>
                </Col>
                <Col className="col-6">
                    <SoldItemsGraph />
                </Col>
            </Row>
            <Row className="Container mt-3">
                <Col>
                    <SellerEarnings />
                </Col>
                <Col>
                    <SoldItemsTable />
                </Col>
            </Row>
            <Row className="Container mt-3">
                <Col>
                    <AllItemsTable />
                </Col>
            </Row>
        </div>
    )
}

export default DashboardList;