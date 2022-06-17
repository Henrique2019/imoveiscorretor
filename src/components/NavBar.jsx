import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ACTIONS } from "../constants";
import { AuthContext } from "../context/AuthContext";
import logo from './Header/img/casa.svg'   
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
    navigate("/home");
  };

  return (
    <>
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <div>
          <img className="logo" src={logo} alt="" width='115px' height='76px' style={{ marginLefth: '3rem' }} />
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/characters"
              >
                <Nav.Link href="/characters">
                Portfólio
                </Nav.Link>                
              </NavLink> 

            <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/saiyans"
              >
                <Nav.Link href="/saiyans">Apartamentos</Nav.Link>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/humans"
              >
                <Nav.Link href="/humans">Casas</Nav.Link>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/Lotes"
              >
                <Nav.Link href="/Lotes">Loteamentos</Nav.Link>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/search"
              >
                <Nav.Link href="/search">Search</Nav.Link>
              </NavLink>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#">
            <div className="d-flex">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
};

export default NavBar;
