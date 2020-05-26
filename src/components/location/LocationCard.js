import React from "react";
import "./LocationCard.css";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-locationname">Doodles</span>
        </h3>
        <p>Breed: Poodle</p>
      </div>
    </div>
  );
};

export default LocationCard;