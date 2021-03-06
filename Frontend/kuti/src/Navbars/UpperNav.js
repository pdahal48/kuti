import React, { useContext } from "react";
import CustomersContext from "../Customers/CustomersContext";
import { Navbar, Form, FormControl, Row, Col, Container, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faSignOutAlt, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Link } from "react-router-dom";
import './Styles/UpperNav.css'

const login = <FontAwesomeIcon icon={faUser} size="2x"/>
const cart = <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} size="2x"/>
const dashboardIcon = <FontAwesomeIcon icon={faChartLine} size="2x"/>

/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

function UpperNav({ showLogin, logout, cartTotalItems }) {

  const { currentUser, cartItemsCount } = useContext(CustomersContext);
  const navigate = useNavigate()
  const showUpperNav = window.location.pathname === '/seller-dashboard' || window.location.pathname === '/add-item';

  function loggedInNav() {
    return (
      <div>
      {!showUpperNav ? 
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
                  <Link to="/">
                    {logoutIcon}<br></br>
                    logout
                  </Link>
                </Col>
                {currentUser.customer.is_seller
                ? <Col className="col-1 dashboard-icon" onClick = {() => navigate('/seller-dashboard')}>
                    {dashboardIcon} <br></br>
                    Dashboard
                    </Col>
                : <Col className="col-1">
                    {cart} <br></br>
                    cart
                  </Col>
                }
              </Navbar.Collapse>
            </Navbar>
          </Row>
        </Container>
    </div>
  : <div> </div>
}
  </div>
  )};

  function loggedOutNav() {
    return (
      <div>
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
                                <Button variant="white">
                                  {cartItemsCount > 0 
                                  ? <>
                                      {cart}
                                      <Badge pill bg='primary' className="align-top ms-1">
                                        {cartTotalItems}
                                      </Badge>
                                      <br />
                                      cart
                                    </>
                                  : <>
                                      {cart}
                                      <br />
                                      cart
                                    </>
                                  }
                                </Button>
                              </Col>
                      </Navbar.Collapse>
                  </Navbar>
              </Row>
          </Container>
      </div>
  {/* } */}
  </div>
    )
  }
  return (
    currentUser ? loggedInNav() : loggedOutNav()
  )
}

export default UpperNav;
