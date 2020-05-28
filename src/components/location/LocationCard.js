import React from "react";
import "./LocationCard.css";

const LocationCard = (props) => {
  return (
    <div className="Location-card">
      <div className="card-content">
      <picture>
          <img src={props.location.images} alt="Palace Garden"/>
        </picture>
        <h2>
          Name: <span className="card-locationname">{props.location.name}</span>
        </h2>
        <p>Address: {props.location.address}</p>
        <button onClick={() => { props.deleteLocation(props.location.id) }} id="delete">Delete</button>
      </div>
    </div>
  );
};

export default LocationCard;