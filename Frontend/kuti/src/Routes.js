import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import Login from "./Login/Login";
import Jweleries from "./Jweleries/JweleriesList";
import SareeList from './Sarees/SareeList';
import LahengaList from './Lahengas/LahengaList'
import SareeDetailList from "./Sarees/SareeDetailList";
import LoginHelp from "./Login/LoginHelp";
import SignUpFrom from './Customers/SignUpForm';
import SellerSignUpForm from "./Sellers/SignUpForm";
import DashboardList from "./sellerDashboard/DashboardList";
import AddItemForm from "./Sellers/AddItemForm";

// import AboutUs from "./AboutUs";
// import PaymentSuccessful from "./PaymentSuccess";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function SiteRoutes ({ showCustomerRegistration, signupSeller }) {
  return (
      <div className="pt-0">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jweleries" element={<Jweleries />}></Route>
          <Route path="/sarees" element={<SareeList />}></Route>
          <Route path="/lahengas" element={<LahengaList />}></Route>
          <Route path="/sarees/:id" element={<SareeDetailList />}></Route>
          <Route path="/login" element={<Login showCustomerRegistration = {showCustomerRegistration}/>}></Route>
          <Route path="/login-help" element={<LoginHelp />}></Route>
          <Route path="/register" element={<SignUpFrom />}></Route>
          <Route path="/seller-registration" element={<SellerSignUpForm signupSeller = {signupSeller}/>}></Route>
          <Route path="/seller-dashboard" element={<DashboardList />}></Route>
          <Route path="/add-item" element={<AddItemForm />}></Route>

          {/* <Route exact path="/people">
            <PeopleList />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/login">
            <Login loginUser = {loginUser}/>
          </Route>
          <Route exact path="/users/:username">
            <UserInfo/>
          </Route>
          <Route exact path="/signup">
            <SignUp signup = {signup}/>
          </Route>
          <Route exact path="/about">
            <AboutUs/>
          </Route>
          <Route exact path="/payment/success">
            <PaymentSuccessful/>
          </Route> */}
        </Routes>
      </div>
  );
}

export default SiteRoutes;
