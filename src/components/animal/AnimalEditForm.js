import React, { useState, useEffect } from "react"
import AnimalManager from "../../modules/AnimalManager"
import EmployeeManager from "../../modules/EmployeeManager"
import "./AnimalForm.css"

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", color: "" });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      color: animal.color,
      employeeId: parseInt(animal.employeeId)
    };

    AnimalManager.update(editedAnimal)
      .then(() => props.history.push("/animals"))
  }

  useEffect(() => {
    AnimalManager.get(props.match.params.animalId)
      .then(animal => {
        setAnimal(animal);
      })
      EmployeeManager.getAll(employees).then(employees => {
          setEmployees(employees);
          setIsLoading(false);
      })
  }, []);


  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="color"
              value={animal.color}
            />
            <label htmlFor="color">Color</label>

            <select
                            className="form-control"
                            id="employeeId"
                            value={animal.employeeId}
                            onChange={handleFieldChange}
                        >
                            {employees.map(employee =>
                                <option key={employee.id} value={employee.id}>
                                    {employee.name}
                                </option>
                            )}
                        </select>
                        <label htmlFor="employeeId">Designated Employee:</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default AnimalEditForm