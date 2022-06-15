import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ACTIONS } from "../constants";
import { AuthContext } from "../context/AuthContext";
import logo from './Header/img/casa.svg'

const NavBar = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
    navigate("/home");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-info">
      <div className="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div>
          <img className="logo" src={logo} alt="" width='115px' height='76px' style={{ marginRight: 143 }} />
        </div>
        <div className="collapse navbar-collapse  " id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/characters"
              >
                Portfólio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/saiyans"
              >
                Apartamentos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/humans"
              >
                Casas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/Lotes"
              >
                Loteamentos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/search"
              >
                Search
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
