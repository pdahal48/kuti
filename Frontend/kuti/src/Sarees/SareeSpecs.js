import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const SareeSpecs = () => {
    return (
    <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home">
                <h2>Hello Home</h2>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <h2>Hello Profile</h2>
            </Tab>
            <Tab eventKey="contact" title="Contact">
                <h2>Hello Contact</h2>
            </Tab>
        </Tabs>
    </div>
    )
}

export default SareeSpecs;