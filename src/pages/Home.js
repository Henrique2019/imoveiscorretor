import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ACTIONS } from "../constants";
import { useNavigate } from "react-router";
import '../css/index.css'
import '../components/Header/index.css'
import logo1 from '../components/Header/img/casa.svg'
const Home = () => {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: ACTIONS.LOGIN });
    navigate("/characters");
  };
  return (
    <div className="container mt-5 text-center d-flex flex-column justify-content-center">
     <img className="logo1" id='logo' src={logo1}  />
      <button onClick={handleClick} className=" my-5 btn btn-primary">
        Start
      </button>
    </div>
  );
};

export default Home;
