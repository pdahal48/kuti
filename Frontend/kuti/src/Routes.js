import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
// import Login from "./Users/Login";
// import SignUp from "./Users/SignUp";
import Jweleries from "./Jweleries/JweleriesList";
// import PrivateRoutes from "./PrivateRoutes";
import SareeList from './Sarees/SareeList';
import LahengaList from './Lahengas/LahengaList'
import SareeDetailList from "./Sarees/SareeDetailList";
// import AboutUs from "./AboutUs";
// import PaymentSuccessful from "./PaymentSuccess";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function SiteRoutes () {
  return (
      <div className="pt-0">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jweleries" element={<Jweleries />}></Route>
          <Route path="/sarees" element={<SareeList />}></Route>
          <Route path="/lahengas" element={<LahengaList />}></Route>
          <Route path="/sarees/:id" element={<SareeDetailList />}></Route>

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