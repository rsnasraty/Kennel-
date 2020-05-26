import React from "react";
import AnimalCard from "./animal/AnimalCard";
import LocationCard from "./location/LocationCard";
import OwnerCard from "./owner/OwnerCard";
import EmployeeCard from "./employee/EmployeeCard";
import "./Kennel.css";

const Kennel = () => {
  return (
    <div>
      <h2>
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h2>
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <div className="container-cards">
      <AnimalCard />
      <AnimalCard />
      <AnimalCard />
      <LocationCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <OwnerCard />
      </div>
    </div>
  );
};

export default Kennel;