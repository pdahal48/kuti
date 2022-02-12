import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import CustomersContext from "../Customers/CustomersContext";
import { Navbar, Form, FormControl, Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStoreAlt, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './Styles/UpperNav.css'
const login = <FontAwesomeIcon icon={faUser} size="1x"/>
const cart = <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} size="1x"/>
const SellerLogin = <FontAwesomeIcon icon={faStoreAlt} size="1x"/>

/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

function UpperNav({ showLogin, showSellerLogin, showCustomerRegistration, logout }) {

  const { currentUser } = useContext(CustomersContext);

  function loggedInNav() {
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
                <Col onClick={logout} className="login-logo col-1 text-center text-dark">
                  {logoutIcon}<br></br>
                  logout
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
  )};

  function loggedOutNav() {
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
                              <Col onClick={showSellerLogin} className="login-logo col-1 text-center text-dark">
                                  {SellerLogin} <br></br>
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
    )
  }
  return (
    currentUser ? loggedInNav() : loggedOutNav()
  )
}

export default UpperNav;
