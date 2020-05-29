import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", color: "", images: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          color: animal.color,
          images: animal.images
        });
      });
  }, [props.animalId]);

  return (
    <div className="Animal-card">
      <div className="card-content">
      <picture>
          <img src={animal.images} alt="Cat" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Color: {animal.color}</p>
      </div>
    </div>
  );
}

export default AnimalDetail;