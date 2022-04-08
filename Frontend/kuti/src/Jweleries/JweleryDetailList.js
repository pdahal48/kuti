import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API } from '../API';
import {Row, Col, Container} from 'react-bootstrap';
import SareeList from '../Sarees/SareeList';
import SareeDetail from '../Sarees/SareeDetail';
import SareeSpecs from '../Sarees/SareeSpecs';
import SareeDetailPhotos from '../Sarees/SareeDetailPhotos';

const JweleryDetailList = ({ addCartItems }) => {
    const [jwelery, setJwelery] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getJweleryDetails() {
            const result = await API.getJwelery(id);
            setJwelery(result);
        }
        getJweleryDetails();
    }, [id])

    return (
        <div className="mt-3">
        <Container>
        <Row className="justify-content-center">
        <Col className="col-6 justify-content-end" 
            style={{
                display: "flex",
                padding:'0px',
                margin:"0px"
            }}
        >
        {(jwelery.image) &&
            <SareeDetailPhotos 
                images = {jwelery.image}
            />
        }
        </Col>
        <Col className="col-6 justify-content-start" 
            style={{
                display: "flex",
            }}
        >
        <SareeDetail 
            key = {jwelery.id}
            item = {jwelery}
            category = "Jwelery"
            name = {jwelery.name}
            desc = {jwelery.description}
            price = {jwelery.price}
            length = {jwelery.length}
            size = {jwelery.size}
            addCartItems = {addCartItems}
        />
        </Col>
        </Row>
        </Container>
           <Container>
           <Row className="container justify-content-start mt-3">
           <Col className="col-6">
            {jwelery.seller && 
                <SareeSpecs 
                    key = {jwelery.id}
                    name = {jwelery.name}
                    color = {jwelery.color}
                    material = {jwelery.material}
                    condition = {jwelery.condition}
                    seller = {jwelery.seller}
                />
            }
            </Col>
           </Row>
           </Container>
           <Row className="mt-4">
               <h2> Similar Products</h2>
               <SareeList />
           </Row>
        </div>
    )
}

export default JweleryDetailList;