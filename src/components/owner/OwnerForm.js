import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'

const OwnerForm = props => {
  const [owners, setOwners] = useState({ name: "", email: "", phoneNumber: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owners };
    stateToChange[evt.target.id] = evt.target.value;
    setOwners(stateToChange);
  };


  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owners.name === "" || owners.email === "" || owners.phoneNumber === "") {
      window.alert("Please input the Owner's name, email, and phone number");
    } else {
      setIsLoading(true);
      OwnerManager.post(owners)
        .then(() => props.history.push("/owner"));
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
              placeholder="Owner name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="email"
              placeholder="Email"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phoneNumber"
              placeholder="Phone Number"
            />
            <label htmlFor="phoneNumber">Phone Number</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm