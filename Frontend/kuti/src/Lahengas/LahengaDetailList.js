import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API } from '../API';
import {Row, Col, Container} from 'react-bootstrap';
import SareeList from '../Sarees/SareeList';
import SareeDetail from '../Sarees/SareeDetail';
import SareeSpecs from '../Sarees/SareeSpecs';
import SareeDetailPhotos from '../Sarees/SareeDetailPhotos';

const LahengaDetailList = () => {
    const [lahenga, setLahenga] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getLahengaDetails() {
            const result = await API.getLahenga(id);
            setLahenga(result);
        }
        getLahengaDetails();
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
            {console.log(lahenga)}
        {(lahenga.image) &&
            <SareeDetailPhotos 
                images = {lahenga.image}
            />
        }
        </Col>
        <Col className="col-6 justify-content-start" 
            style={{
                display: "flex",
            }}
        >
        <SareeDetail 
            key = {lahenga.id}
            name = {lahenga.name}
            desc = {lahenga.description}
            price = {lahenga.price}
        />
        </Col>
        </Row>
        </Container>
           <Container>
           <Row className="container justify-content-start mt-3">
           <Col className="col-6">
            {lahenga.seller && 
                <SareeSpecs 
                    key = {lahenga.id}
                    name = {lahenga.name}
                    brand = {lahenga.brand}
                    color = {lahenga.color}
                    material = {lahenga.material}
                    occassion = {lahenga.occassion}
                    condition = {lahenga.condition}
                    seller = {lahenga.seller}
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

export default LahengaDetailList;