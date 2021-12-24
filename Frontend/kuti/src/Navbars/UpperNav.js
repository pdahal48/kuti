import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import UserContext from "./Users/UserContext";
import { Nav, Navbar, Form, FormControl, Row, Col, Container, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTshirt, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Styles/UpperNav.css'
import Login from "../Login/Login";

const element = <FontAwesomeIcon icon={faTshirt} size="2x"/>
const login = <FontAwesomeIcon icon={faUser} size="1x"/>
const cart = <FontAwesomeIcon icon={faShoppingCart} size="1x"/>

/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

function UpperNav({ showLogin }) {

  function loggedInNav() {
    return (
      <div className="container-fluid">
        <Nav >
          <Nav>
            <NavLink className="nav-link" to="/people">
              Saree
            </NavLink>
            <NavLink className="nav-link" to="/profile">
              Lahenga
            </NavLink>
  
            <NavLink className="nav-link" to="/shelters">
              Used
            </NavLink>
            </Nav>
            <Nav className="nav align-right">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link" to="/signup">
                Sign Up
              </NavLink>
            </Nav>
          </Nav>
        </div>
    );
  }

  return (
    <div>
        <Container>
            <Row classname="justify-content-center">
                <Navbar>
                    <Navbar.Collapse id="navbarScroll">
                    <Col className = "col-2">
                        <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="mx-1"
                            aria-label="Search"
                            />
                        </Form>
                        </Col>
                        <Col className="col-8 text-center">
                                <Navbar.Brand href="/"><img src="https://medias.utsavfashion.com/skin/frontend/ultimo/default/images/utsavfashion-logo.png"></img></Navbar.Brand>
                            </Col>
                            <Col onClick={showLogin} className="login-logo col-1 text-center text-dark">
                                {login}<br></br>
                                login
                            </Col>
                            <Col className="col-1">
                                {cart} <br></br>
                                cart
                            </Col>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
        </Container>
    </div>
   
);
}

export default UpperNav;
