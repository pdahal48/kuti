import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API } from '../API';
import {Row, Col, Container} from 'react-bootstrap';
import SareeList from './SareeList';
import SareeDetail from './SareeDetail';
import SareeSpecs from './SareeSpecs';
import SareeDetailPhotos from './SareeDetailPhotos';

const SareeDetailList = () => {
    const [saree, setSaree] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getSareeDetail() {
            const result = await API.getSaree(id);
            setSaree(result);
        }
        getSareeDetail();
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
        {(saree.images) &&
            <SareeDetailPhotos 
                images = {saree.images}
            />
        }
        </Col>
        <Col className="col-6 justify-content-start" 
            style={{
                display: "flex",
            }}
        >
        <SareeDetail 
            key = {saree.id}
            category = "Saree"
            name = {saree.name}
            desc = {saree.description}
            price = {saree.price}
            stiched = {saree.stiched}
            blouseSize = {saree.blouse_size}
        />
        </Col>
        </Row>
        </Container>
           <Container>
           <Row className="container justify-content-start mt-3">
           <Col className="col-6">
            {saree.seller && 
                <SareeSpecs
                    key = {saree.id}
                    name = {saree.name}
                    color = {saree.color}
                    material = {saree.material}
                    condition = {saree.condition}
                    seller = {saree.seller}
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

export default SareeDetailList;