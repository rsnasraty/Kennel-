import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-petname">Doodles</span>
        </h3>
        <p>Breed: Poodle</p>
      </div>
    </div>
  );
};

export default EmployeeCard;