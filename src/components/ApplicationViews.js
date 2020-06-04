import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals.js";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationForm from "./location/LocationForm";
import OwnerForm from "./owner/OwnerForm";
import Login from "./auth/Login";

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />

      <Route
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />

      <Route
        exact
        path="/animals"
        render={props => {
          if (hasUser) {
            return <AnimalList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route
        exact
        path="/animals/:animalId(\d+)"
        render={props => {
          if (hasUser) {
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route
        path="/animals/new"
        render={props => {
          return <AnimalForm {...props} />;
        }}
      />

      <Route
        path="/animals/:animalId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route
        exact
        path="/employees"
        render={props => {
          return <EmployeeList {...props} />;
        }}
      />

      <Route
        path="/employees/:employeeId(\d+)/details"
        render={props => {
          return <EmployeeWithAnimals {...props} />;
        }}
      />

      <Route
        path="/employees/new"
        render={props => {
          return <EmployeeForm {...props} />;
        }}
      />
      <Route
        path="/location"
        render={props => {
          return <LocationList {...props} />;
        }}
      />

      <Route
        path="/location/new"
        render={props => {
          return <LocationForm {...props} />;
        }}
      />
      <Route
        path="/owners"
        render={props => {
          return <OwnerList {...props} />;
        }}
      />

      <Route
        path="/owners/new"
        render={props => {
          return <OwnerForm {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
