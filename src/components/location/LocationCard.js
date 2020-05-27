import React from "react";
import "./LocationCard.css";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>
          Name: <span className="card-locationname">{props.location.name}</span>
        </h2>
        <p>Address: {props.location.address}</p>
      </div>
    </div>
  );
};

export default LocationCard;