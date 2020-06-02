import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList"; 
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'
import Login from "./auth/Login";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  return (
    <React.Fragment>
    <Route path="/login" component={Login} />
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route exact path="/animals" render={props => {
  if (isAuthenticated()) {
    return <AnimalList {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />

      <Route path="/animals/:animalId(\d+)" 
      render={(props) => {
      return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
      {...props}
      />
      }}  
      />

    <Route path="/animals/new" 
    render={(props) => {
    return <AnimalForm {...props} 
    />
    }}  
    />

       <Route
        path="/employees"
        render={props => {
          return <EmployeeList {...props}/>;
        }}
      />

<Route path="/employees/new" render={(props) => {
  return <EmployeeForm {...props} />
}} />
       <Route
        path="/location"
        render={props => {
          return <LocationList {...props}/>;
        }}
      />

<Route path="/location/new" render={(props) => {
  return <LocationForm {...props} />
}} />
       <Route
        path="/owners"
        render={props => {
          return <OwnerList {...props}/>;
        }}
      />

<Route path="/owners/new" render={(props) => {
  return <OwnerForm {...props} />
}} />
    </React.Fragment>
  );
};

export default ApplicationViews;