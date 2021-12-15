import React from "react";
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import SareeList from "./Sarees/SareeList";
import LahengaList from "./Lahengas/LahengaList";
import Jweleries from "./Jweleries/JweleriesList";
import './Home.css'

const Home = () => {
    return (
      <>
      <Row>
        <Carousel className="mt-2">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"https://kalkifashion.com.imgeng.in/media/magestore/bannerslider/images/diwali-collection-desktop-02-oct-21.jpg"}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"https://kalkifashion.com.imgeng.in/media/magestore/bannerslider/images/desktop-rooh-collection-15-9-21.jpg"}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"https://kalkifashion.com.imgeng.in/media/magestore/bannerslider/images/desktop-banner-karwa-chauth-22-9-21.jpg"}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <Col className="text-center mt-4">
          <span className="display-5">DASHAIN CLOTHINGS</span>
        </Col>
      </Row>
      <Row> 
        <Col className="text-center mt-2">
          <SareeList/>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <span className="display-5"> TRENDING JWELERIES </span>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Jweleries />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-2">
          <span className="display-5"> SHOP BY PRICE </span>
        </Col>
      </Row>
      <div className="justify-content-center container mt-2">
      <Row className="justify-content-center">
        <Col className="col-3 price-col">
          <img src="https://kalkifashion.com.imgeng.in/media/wysiwyg/undre$300-salwar-kameez-13-12-21.webp" />
        </Col>
        <Col className="col-3 price-col">
          <img src="https://kalkifashion.com.imgeng.in/media/wysiwyg/undre$200-sarees-13-12-21.webp" />
        </Col> 
        <Col className="col-3 price-col">
          <img src="https://kalkifashion.com.imgeng.in/media/wysiwyg/undre$300-bridesmaid-13-12-21.webp" />
        </Col> 
        <Col className="col-3 price-col">
          <img src="https://kalkifashion.com.imgeng.in/media/wysiwyg/undre$500-lehengas-13-12-21.webp" />
        </Col>
      </Row>
      </div>

      <Row>
        <Col className="text-center mt-4">
          <span className="display-5"> INSPIRED BY YOU </span>
        </Col>
      </Row>
      <Row>
        <LahengaList/>
      </Row>
      </>
    )
}

export default Home;

