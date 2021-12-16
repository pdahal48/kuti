import React, { useState, useEffect } from 'react'
import { API } from '../API'
import ProductCard from '../ProductCard';
import { Card, Button, Row, Col } from 'react-bootstrap';

//Controls State for the Jwelery list. 
//Each item in the list is sent to JweleryCard for render for /jweleries page

const Jweleries = () => {
    const [sarees, setSarees] = useState([])

    useEffect(() => {
        async function getJweleries(name) {
            const sarees = await API.getSarees(name)
            setSarees(sarees)
        }
        getJweleries()
    }, [])

    return (
        <div className="mt-2">
          {sarees.length
              ? (
                  <div className="card-wrapper">
                    {sarees.map(j => (
                        <ProductCard
                            key={j.id}
                            src={j.image}
                            name={j.name}
                            description = {j.description}
                            material={j.material}
                            price = {j.price}
                            onSale={j.sale}
                            sale_price={j.sale_price}
                            brand={j.brand}
                            color={j.color}
                            occassion={j.occassion}
                            size={j.size}
                            isUsed={j.used}
                            id={j.id}
                        />
                    ))}
                  </div>
              ) : (
                  <p className="lead">Sorry, no results were found!</p>
              )}
        </div>
    );
}


export default Jweleries;