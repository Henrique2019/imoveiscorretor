import React from "react";
import { Navigate, useParams, useNavigate } from "react-router";
import { Characters } from "../models/Characters";
import Carousel from 'react-bootstrap/Carousel';

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
  const { species, name, description, description2, id2, id3,foto1} = characterSelected;
  const path = `/assets/${species[0].toLowerCase()}-${id}.png`;
  const path2 = `/assets/${species[0].toLowerCase()}-${id2}.png`;
  const path3 = `${foto1}`;
  return (
    { characterSelected } && (
      <>
        <div className="container mx-auto my-5 row ">
          <div className="col-12 col-md-6">
          <Carousel variant="dark">
              <Carousel.Item interval={2500}>
                
                <img
                  className="d-block w-100"
                  src={path} alt={id}
                />
                
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <img
                  className="d-block w-100"
                  src={path2} alt={id2}
                />
                
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <img
                  className="d-block w-100"
                  src={path3} alt={id3}
                />
                
              </Carousel.Item>
            </Carousel>
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
