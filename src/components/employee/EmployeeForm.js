import React, { useState } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'

const EmployeeForm = props => {
  const [employees, setEmployees] = useState({ name: "", role: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employees };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployees(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewEmployee = evt => {
    evt.preventDefault();
    if (employees.name === "" || employees.role === "") {
      window.alert("Please input employee's name and role");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      EmployeeManager.post(employees)
        .then(() => props.history.push("/employees"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Employee name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="role"
              placeholder="Role"
            />
            <label htmlFor="role">Role</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm