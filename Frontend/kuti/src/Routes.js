import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from "./Login/Login";
import Jweleries from "./Jweleries/JweleriesList";
import JweleryDetailList from "./Jweleries/JweleryDetailList";
import SareeList from './Sarees/SareeList';
import SareeDetailList from "./Sarees/SareeDetailList";
import LahengaList from './Lahengas/LahengaList'
import LahengaDetailList from "./Lahengas/LahengaDetailList";
import LoginHelp from "./Login/LoginHelp";
import SignUpFrom from './Customers/SignUpForm';
import SellerSignUpForm from "./Sellers/SignUpForm";
import DashboardList from "./sellerDashboard/DashboardList";
import AddItemForm from "./Sellers/AddItemForm";
import CustomersContext from "./Customers/CustomersContext";
import AboutPage from "./Kuti-Info/AboutPage";
import Contactus from "./Kuti-Info/Contactus";
import UnderConstructionPage from "./UnderConstruction";
import SideNav from './SideNavbar/SideNav';

// import AboutUs from "./AboutUs";
// import PaymentSuccessful from "./PaymentSuccess";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function SiteRoutes ({ showCustomerRegistration, signupSeller, logout, addCartItems }) {
  const { currentUser } = useContext(CustomersContext);

  return (
    <div className="pt-0">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/jweleries" element={<Jweleries />}></Route>
        <Route path="/jweleries/:id" element={<JweleryDetailList addCartItems={addCartItems}/>}></Route>
        <Route path="/sarees" element={<SareeList />}></Route>
        <Route path="/sarees/:id" element={<SareeDetailList addCartItems={addCartItems} />}></Route>
        <Route path="/lahengas" element={<LahengaList />}></Route>
        <Route path="/lahengas/:id" element={<LahengaDetailList addCartItems={addCartItems} />}></Route>
        <Route path="/login" element={<Login showCustomerRegistration = {showCustomerRegistration}/>}></Route>
        <Route path="/login-help" element={<LoginHelp />}></Route>
        <Route path="/register" element={<SignUpFrom />}></Route>
        <Route path="/seller-registration" element={<SellerSignUpForm signupSeller={signupSeller}/>}></Route>
        <Route path="/seller-dashboard" element={<DashboardList />}></Route>
        <Route path="/add-item" element={<AddItemForm currentUser={currentUser} />}></Route>
        <Route path="/about-kuti" element={<AboutPage />}></Route>
        <Route path="/contact" element={<Contactus />}></Route>
        <Route path="/help-videos" element={<UnderConstructionPage />}></Route>
        <Route path="/sideNav" element={<SideNav  logoutFunc={logout} />}></Route>
      </Routes>
    </div>
  );
}

export default SiteRoutes;
