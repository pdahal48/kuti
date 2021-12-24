import React, { useState } from 'react'
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbars/Navbar';
import { Modal } from 'react-bootstrap';
import UpperNav from './Navbars/UpperNav.js'
import Login from './Login/Login';
import SignUpForm from './Customers/SignUpForm';
import jwt from 'jsonwebtoken'
import './App.css';
import { Row, Col } from 'react-bootstrap';

function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [showCustomerRegistration, setshowCustRegistration] = useState(false);

  const handleModalsClose = () =>  {
    setshowCustRegistration(false)
    setShowLogin(false);
  }

  const handleLoginShow = () => {
    setshowCustRegistration(false)
    setShowLogin(true);
  }

  const handleRegistrationShow = (e) => {
    e.preventDefault();
    console.log(`Show registration`);
    // setShowLogin(false);
    // setshowCustRegistration(true)
  }

  return (
    <div className="App">
        <BrowserRouter>
          <div className="navbars">
            <UpperNav 
              showLogin = {handleLoginShow}
            />
            <Navbar />
          </div>
          <Routes 
            showCustomerRegistration = {handleRegistrationShow}
          />
          <Modal show={showLogin} onHide={handleModalsClose} className = "mt-2 pt-5">                        
            <Login />
          </Modal>
          <Modal show={showCustomerRegistration} onHide={handleModalsClose} className = "mt-2 pt-5">                        
            <SignUpForm />
          </Modal>
        </BrowserRouter>

        <footer className="font-small blue mb-5">
          <div className="footer-copyright text-center py-3">© 2021 Copyright:
            <a href="/"> SareePalace.com</a> <br></br>
            <a href="/about"> About us</a>
          </div>
        </footer>



    </div> 
  );
}

export default App;
