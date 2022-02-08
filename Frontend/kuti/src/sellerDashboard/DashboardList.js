import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SoldItemsChart from './SoldItemsChart';
import SoldItemsGraph from './SoldItemsGraph';
import SellerEarnings from './SellerEarnings';
import SoldItemsTable from './SoldItemsTable';
import AllItemsTable from './AllItemsTable';

const DashboardList = () => {
    return (
        <div className="mt-4">
            {/* <h2 className="text-center">Seller Dashboard</h2> */}
            <Row className="justify-content-center">
                <Col className="col-5 mt-4">
                    <SoldItemsChart/>
                </Col>
                <Col className="col-6">
                    <SoldItemsGraph />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="col-5 my-5">
                    <SellerEarnings />
                </Col>
                <Col className="col-6 mt-4">
                    <SoldItemsTable />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="col-11">
                    <AllItemsTable />
                </Col>
            </Row>
        </div>
    )
}

export default DashboardList;