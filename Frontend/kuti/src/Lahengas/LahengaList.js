import React, { useState, useEffect } from 'react'
import { API } from '../API'
import ProductCard from '../ProductCard';

//Controls State for the Lahenga list. 
//Each item in the list is sent to Product card for render for /jweleries page

const Jweleries = () => {
    const [lahengas, setLahengas] = useState(new Set())

    useEffect(() => {
        async function getLahengas(name) {
            const lahengas = await API.getLahengas(name)
            setLahengas(lahengas)
        }
        getLahengas()
    }, [])

    return (
        <div className="mt-2">
          {lahengas.length
              ? (
                  <div className="card-wrapper">
                    {lahengas.map(l => {
                        return (
                            <ProductCard
                            key={l.id}
                            src={l.src}
                            name={l.name}
                            price = {l.price}
                            onSale={l.sale}
                            sale_price={l.sale_price}
                            isUsed={l.used}
                            id={l.id}
                        />
                        )
                    })}
                  </div>
              ) : (
                  <p className="lead">Sorry, no results were found!</p>
              )}
        </div>
    );
}

export default Jweleries;