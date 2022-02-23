import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import './Styles/SareeDetailPhotos.css'

const SareeDetailPhotos = ({ images=[] }) => {
    const[mainImg, setMainImg] = useState([]);
        
    useEffect(() => {
        setMainImg(images[0].src)
    }, [])

    const handleClick = (e) => {
        if (e.target.src) {
            setMainImg(e.target.src)
        }
    }

    return (
        <div>
        <Row>
        <Col className="col-3">
            <div className="img-container">
                {images.map(i => (
                    <div onClick = {handleClick}> 
                        <img className = "secondary-img" src={i.src} />
                    </div>
                ))}
            </div>
        </Col>
        <Col className="col-9">
            <img className= "main-img" src={mainImg}/>
        </Col>
        </Row>
        </div>
    )
}

export default SareeDetailPhotos;