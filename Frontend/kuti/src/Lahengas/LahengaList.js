import React, { useState, useEffect } from 'react'
import { API } from '../API'
import ProductCard from '../ProductCard';
import { Card, Button, Row, Col } from 'react-bootstrap';

//Controls State for the Jwelery list. 
//Each item in the list is sent to JweleryCard for render for /jweleries page

const Jweleries = () => {
    const [lahengas, setLahengas] = useState([])

    useEffect(() => {
        async function getLahengas(name) {
            const lahengas = await API.getLahengas(name)
            console.log(lahengas)
            setLahengas(lahengas)
        }
        getLahengas()
    }, [])

    return (
        <div className="mt-2">
          {lahengas.length
              ? (
                  <div className="card-wrapper">
                    {lahengas.map(l => (
                        <ProductCard
                            key={l.id}
                            src={l.image}
                            name={l.name}
                            price = {l.price}
                            onSale={l.sale}
                            sale_price={l.sale_price}
                            isUsed={l.used}
                            id={l.id}
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