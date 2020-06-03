import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = (props) => {
  return (
    <div className="Employee-card">
      <div className="card-content">
      <picture>
          <img src={props.employee.images} alt="Employee"/>
        </picture>
        <h2>
          Name: <span className="card-employeename">{props.employee.name}</span>
        </h2>
        <h4>Role: {props.employee.role}</h4>
        <button onClick={() => { props.deleteEmployee(props.employee.id) }} id="delete">Delete</button>
        <button type="button"
        onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>Details</button>
      </div>
    </div>
  );
};

export default EmployeeCard;