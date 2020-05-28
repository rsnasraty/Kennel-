import React from "react";
import "./AnimalCard.css";

const AnimalCard = (props) => {
  return (
    <div className="Animal-card">
      <div className="card-content">
        <picture>
          <img src={props.animal.images} alt="Cat" />
        </picture>
        <h2>
          Name: <span className="card-petname">{props.animal.name}</span>
        </h2>
        <h4> Color: {props.animal.color} </h4>
        <button onClick={() => { props.deleteAnimal(props.animal.id) }} id="delete">Delete</button>
    </div>
    </div>
  );
};

export default AnimalCard;