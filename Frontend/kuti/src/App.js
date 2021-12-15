import React, {useState, useEffect} from 'react'
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbars/Navbar';
// import { CalAPI as API } from './Api'
// import useLocalStorage from './Hooks'
// import UserContext from './Users/UserContext';
import UpperNav from './Navbars/UpperNav.js'
import jwt from 'jsonwebtoken'
import './App.css';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div className="navbars">
            <UpperNav />
            <Navbar />
          </div>
          <Routes/>
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
