import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>
          Name: <span className="card-employeename">{props.employee.name}</span>
        </h2>
        <h4>Role: {props.employee.role}</h4>
      </div>
    </div>
  );
};

export default EmployeeCard;