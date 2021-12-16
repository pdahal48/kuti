import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API } from '../API';
import {Row, Col} from 'react-bootstrap';
import SareeList from './SareeList';
import SareeDetail from './SareeDetail';
import SareeSpecs from './SareeSpecs';

const SareeDetailList = () => {
    const [saree, setSaree] = useState([]);
    // const [sareeImages, setSareeImages] = useState([])
    const { id } = useParams();

    useEffect(() => {
        async function getSareeDetail() {
            const result = await API.getSaree(id);
            console.log(result)
            setSaree(result);
        }
        getSareeDetail();
    }, [id])

    return (
        <div className="mt-3">
           <Row>
               <Col>
               {/* {console.log(saree.images)} */}
                    <h3>This is where the product images will be</h3>
               </Col>
               <Col>
                    <SareeDetail 
                        key = {saree.id}
                        name = {saree.name}
                        price = {saree.price}
                    />
               </Col>
           </Row>
           <Row className="container">
           <Col className="col-6">
                <SareeSpecs 
                    key = {saree.id}
                    name = {saree.name}
                    price = {saree.price}
                />
            </Col>
           </Row>
           <Row>
               <h2> Similar Products</h2>
               <SareeList />
           </Row>
        </div>
    )
}

export default SareeDetailList;