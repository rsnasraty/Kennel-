import React from "react";
import "./OwnerCard.css";

const OwnerCard = (props) => {
  return (
    <div className="Owner-card">
      <div className="card-content">
      <picture>
          <img src={props.owner.images} alt="Owner"/>
        </picture>
        <h2>
          Name: <span className="card-ownername">{props.owner.name}</span>
        </h2>
        <h4>Email:{props.owner.email}</h4>
        <h4>Phone: {props.owner.phoneNumber}</h4>
        <button onClick={() => { props.deleteOwner(props.owner.id) }} id="delete">Delete</button>
      </div>
    </div>
  );
};

export default OwnerCard;