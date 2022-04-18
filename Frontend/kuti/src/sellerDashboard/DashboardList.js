import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SoldItemsChart from './SoldItemsChart';
import SoldItemsGraph from './SoldItemsGraph';
import SellerEarnings from './SellerEarnings';
import SoldItemsTable from './SoldItemsTable';
import AllItemsTable from './AllItemsTable';
import SideNav from '../SideNavbar/SideNav';

const DashboardList = () => {
    return (
        <Row >
            <Col className='col-2'>
                <SideNav />
            </Col>
            <Col className='mt-2'>
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
        </Col>
        </Row>
    )
}

export default DashboardList;