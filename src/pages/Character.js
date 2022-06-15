import React from "react";
import { Navigate, useParams, useNavigate } from "react-router";
import { Characters } from "../models/Characters";
const Character = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const characterSelected = Characters.find((character) => character.id === id);
  if (!characterSelected) {
    return <Navigate to="/" />;
  }
  const { species, name, description, description2, } = characterSelected;
  const path = `/assets/${species[0].toLowerCase()}-${id}.png`;
  return (
    { characterSelected } && (
      <>
        <div className="container mx-auto my-5 row ">
          <div className="col-12 col-md-6">
            <img className="img-fluid d-block mx-auto" src={path} alt={id} />
          </div>
          <div className="col-12 col-md-5 d-block my-auto">
            <h1 className="mt-3 text-center">{name}</h1>
            <p>{description}</p>
            <h6>{description2}</h6>
            <button
              className="btn btn-outline-warning col-12"
              onClick={handleBack}
            >
              Volte
            </button>
       
            <h5 style={{marginTop:"20px"}}>Gostou? clique no botão do whatsapp para atendimento exclusivo.</h5>
           
          </div>
          
        </div>
        
        
        
          
        </>
        )
        );
};
        export default Character;
