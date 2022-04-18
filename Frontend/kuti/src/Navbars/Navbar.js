import react from "react";
import { NavLink } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

function Navbar() {

  const pageLocation = useLocation();
  const showNav =  pageLocation.pathname === '/seller-dashboard' || pageLocation.pathname === '/add-item';

  return (
    <div className="container-fluid"  style ={{backgroundColor: "white"}}>
      {!showNav
        ? <>
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
          </>
          : <div> </div>
      }
    </div>
  );
}

export default Navbar;
