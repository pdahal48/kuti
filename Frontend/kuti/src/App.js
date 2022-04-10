import React, { useState, useEffect } from 'react'
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbars/Navbar';
import { Modal } from 'react-bootstrap';
import UpperNav from './Navbars/UpperNav.js'
import Login from './Login/Login';
import SellerLogin from './Login/SellerLogin';
import SignUpForm from './Customers/SignUpForm';
import useLocalStorage from './Hooks/LocalStorage'
import jwt from 'jsonwebtoken'
import LoadingSpinner from "./LoadingSpinner";
import { API } from './API';
import CustomersContext from './Customers/CustomersContext';
import { FooterContainer } from './Footer/containers/footer';
import './App.css';
var _ = require('lodash');

export const TOKEN_STORAGE_ID = "user-token";

function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [showCustomerRegistration, setshowCustRegistration] = useState(false);
  const [showSellerLogin, setShowSellerLogin] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currUserToken, setCurrUserToken] = useLocalStorage(TOKEN_STORAGE_ID);

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("Cart") || "[]");
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  const cartItemCount = JSON.parse(localStorage.getItem("cartItemCount") || "0");
  let [cartItemsCount, setCartItemsCount] = useState(cartItemCount);

  const addCartItems = (product) => {
    const productIdx = _.findIndex(cartItems, product);
    if (productIdx >= 0) {
      if (Number(cartItems[productIdx].qty)) {
        cartItems[productIdx].qty++;
      } else {
        cartItems[productIdx].qty = 1;
      }
    } else {
      setCartItems([...cartItems, product]);
    }
    setCartItemsCount(cartItemsCount += 1)
  }

  const removeCartItems = (product) => {
    const productIdx = _.findIndex(cartItems, product);
    if (productIdx >= 0) {
      if (Number(cartItems[productIdx].qty)) {
        cartItems[productIdx].qty--;
      } 
    }
    setCartItemsCount(cartItemsCount -= 1)
  }

  const handleModalsClose = () =>  {
    setshowCustRegistration(false);
    setShowLogin(false);
    setShowSellerLogin(false);
  }

  const handleSellerRegistrationShow = () => {
    setShowLogin(false);
    setShowSellerLogin(false);
    setshowCustRegistration(false);
  }

  const handleLoginShow = () => {
    setshowCustRegistration(false);
    setShowSellerLogin(false);
    setShowLogin(true);
  }

  const handleSellerLoginShow = () => {
    setshowCustRegistration(false);
    setShowSellerLogin(true);
    setShowLogin(true);
  }

  const handleRegistrationShow = (e) => {
    e.preventDefault();
    setShowLogin(false);
    setShowSellerLogin(false);
    setshowCustRegistration(true)
  }

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", currUserToken);
    async function getCurrentUser() {
      if (currUserToken) {
        try {
          let { username } = jwt.decode(currUserToken);

          // put the currUserToken on the Api class so it can use it to call the API.
          API.token = currUserToken;
          let currentUser = await API.get(username);
          setCurrentUser(currentUser);
          setShowLogin(false);
          
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    /* set infoLoaded to false while async getCurrentUser runs; once the
    * data is fetched (or even if an error happens!), this will be set back
    * to false to control the spinner.
    */
    setInfoLoaded(false);
    getCurrentUser();
  }, [currUserToken]);

  useEffect(function loadCartItems() {
    async function getCartDetails() {
      localStorage.setItem("Cart", JSON.stringify(cartItems));
      localStorage.setItem("cartItemCount", JSON.stringify(cartItemsCount));
    }
    getCartDetails();
  }, [cartItems, cartItemCount]);

  async function signupCustomer(signupData) {
    try {
      let res = await API.signup(signupData);
      if (res.token) {
        setCurrUserToken(res.token);
        handleModalsClose();
        return {success: true}
      } else {
        return {Error: res.error[0]}
      }
    } catch (e) {
      console.error("signup failed", e);
      return { success: false, e };
    }
  }

  async function signupSeller(signupData) {
    try {
      let res = await API.signupSeller(signupData);
      if (res.token) {
        setCurrUserToken(res.token);
        handleModalsClose();
        return {success: true}
      } else {
        return {Error: res.error[0]}
      }
    } catch (e) {
      console.error("signup failed", e);
      return { success: false, e };
    }
  }

  async function loginCustomer(data) {
    try {
      let token = await API.login(data);
      setCurrUserToken(token);
      handleModalsClose()
      return {success: true}
    } catch (errors) {
      return {success: false, errors}
    }
  }

  async function loginSeller(data) {
    try {
      let token = await API.loginSeller(data);
      setCurrUserToken(token);
      handleModalsClose()
      return {success: true}
    } catch (errors) {
      return {success: false, errors}
    }
  }

  function logout() {
    setCurrentUser(null);
    setCurrUserToken(null);
  }

  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <div className="App">
        <BrowserRouter>
          <div className="navbars">
            <CustomersContext.Provider 
              value={{ setCurrentUser, currentUser, removeCartItems, cartItems, cartItemsCount }}
            >
              <UpperNav 
                showLogin = {handleLoginShow}
                showSellerLogin = {handleSellerLoginShow}
                logout = {logout}
                cartTotalItems = {cartItemsCount}
              />
              <Navbar />
          <Routes 
            showCustomerRegistration = {handleRegistrationShow}
            signupSeller = {signupSeller}
            cartItems = {cartItems}
            removeCartItems = {removeCartItems}
            addCartItems = {addCartItems}
          />
          </CustomersContext.Provider>
          </div>
          <Modal show={showLogin} onHide={handleModalsClose} className = "mt-2 pt-5">                      
            <Login 
              showCustomerRegistration = {handleRegistrationShow}
              loginCustomer={loginCustomer}
            />
          </Modal>
          <Modal show={showSellerLogin} onHide={handleModalsClose} className = "mt-2 pt-5">                      
            <SellerLogin 
              showSellerRegistration = {handleSellerRegistrationShow}
              loginSeller={loginSeller}
            />
          </Modal>
          <Modal show={showCustomerRegistration} onHide={handleModalsClose} className = "mt-2 pt-5">                        
            <SignUpForm 
              handleModalsClose = {handleModalsClose}
              signupCustomer={signupCustomer}
            />
          </Modal>
          <FooterContainer />
        </BrowserRouter>
    </div> 
  );
}

export default App;
