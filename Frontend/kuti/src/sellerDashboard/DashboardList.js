import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SoldItemsChart from './SoldItemsChart';
import SoldItemsGraph from './SoldItemsGraph';
import SellerEarnings from './SellerEarnings';
import SoldItemsTable from './SoldItemsTable';
import AllItemsTable from './AllItemsTable';

const DashboardList = () => {
    return (
        <div className="mt-2">
            <h2 className="text-center">Seller Dashboard</h2>
            <Row className="mt-2">
                <Col className="col-6">
                    <SoldItemsChart />
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