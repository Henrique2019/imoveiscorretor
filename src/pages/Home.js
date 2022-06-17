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
    <>
    <div>
     <img id='logo' src={logo1} height="100" width="301"/>
      
    </div>
    <button onClick={handleClick} className=" my-5 btn btn-primary">
        Ver Portfólio
      </button>
      </>
  );
};

export default Home;
