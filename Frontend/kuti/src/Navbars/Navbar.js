import react from "react";
import { NavLink } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTshirt } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faTshirt} size="2x"/>

/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site. When not,
 * shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

function Navbar() {
  function loggedInNav() {
    return (
      <div className="container-fluid">
        <Nav >
          <Nav>
            <NavLink className="nav-link" to="/sarees">
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

  function loggedOutNav() {
    return (
      <div className="container-fluid"  style ={{backgroundColor: "white"}}>
        <Nav>
        </Nav>
            <Nav className="justify-content-center">
              <NavLink className="nav-link text-dark" to="/sarees">
                Saree
              </NavLink>
              <NavLink className="nav-link text-dark" to="/lahengas">
                Lahenga
              </NavLink>
              <NavLink className="nav-link text-dark" to="/profile">
                Salwar Kameez
              </NavLink>
              <NavLink className="nav-link text-dark" to="/profile">
                Kurti
              </NavLink>
              <NavLink className="nav-link text-dark" to="/jweleries">
                Jwelery
              </NavLink>
              <NavLink className="nav-link text-dark" to="/profile">
                Discover
              </NavLink>
              <NavLink className="nav-link text-dark" to="/profile">
                Used
              </NavLink>
            </Nav>
              <Nav className="justify-content-end">
                {/* <NavLink className="nav-link text-dark" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link text-dark" to="/signup">
                  Sign Up
                </NavLink> */}
              </Nav>

        </div>
    );
  }

  return (
    <nav className="navbar navbar-expand-md pt-0 pb-0">
      {/* <a className="mx-3 navbar-brand text-secondary" href="/">
        {element}
      </a> */}
        {/* {currentUser ? loggedInNav() : loggedOutNav()} */}
        {loggedOutNav()}
    </nav>
  );
}

export default Navbar;
