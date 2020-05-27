import React from "react";
import "./AnimalCard.css";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h2>
          Name: <span className="card-petname">{props.animal.name}</span>
        </h2>
        <h4> Breed: {props.animal.breed} </h4>
      </div>
    </div>
  );
};

export default AnimalCard;