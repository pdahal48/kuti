import React, { useState, useEffect } from 'react'
import { API } from '../API'
import ProductCard from '../ProductCard';
import { Card, Button, Row, Col } from 'react-bootstrap';

//Controls State for the Jwelery list. 
//Each item in the list is sent to JweleryCard for render for /jweleries page

const Jweleries = () => {
    const [jweleries, setJweleries] = useState([])

    useEffect(() => {
        async function getJweleries(name) {
            const jweleries = await API.getJweleries(name)
            setJweleries(jweleries)
        }
        getJweleries()
    }, [])

    return (
        <div className="mt-2">
          {jweleries.length
              ? (
                  <div className="card-wrapper">
                    {jweleries.map(j => (
                        <ProductCard
                            key={j.id}
                            src={j.src}
                            name={j.name}
                            price = {j.price}
                            onSale={j.sale}
                            sale_price={j.sale_price}
                            isUsed={j.used}
                            id={j.id}
                            category={'jweleries'}
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