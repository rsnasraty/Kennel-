import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-employeename">Zane</span>
        </h3>
        <p>Role: Kennel Attendent</p>
      </div>
    </div>
  );
};

export default EmployeeCard;