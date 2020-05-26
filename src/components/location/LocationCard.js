import React from "react";
import "./LocationCard.css";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Location Name: Cat Kennel <span className="card-locationname"></span>
        </h3>
        <p>Address: Cat Kennel Lane </p>
      </div>
    </div>
  );
};

export default LocationCard;