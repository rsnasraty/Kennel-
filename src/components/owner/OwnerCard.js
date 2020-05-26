import React from "react";
import "./OwnerCard.css";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-ownername">Roxanne</span>
        </h3>
        <p>Contact Info: Roxanne@kennel.com</p>
      </div>
    </div>
  );
};

export default OwnerCard;