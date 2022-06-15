import React from "react";
import { Characters } from "../models/Characters";
import Card from "../components/Card";
const Lotes = () => {
  const saiyans = Characters.filter(
    (character) => character.species === "Saiyan"
  );

  return (
    <div className="container mt-3">
      <h1>Apartamentos</h1>
      <hr />
      <div className="row">
        {saiyans.map((saiyan) => (
          <Card key={saiyan.id} {...saiyan} />
        ))}
      </div>
    </div>
  );
};

export default Lotes;
