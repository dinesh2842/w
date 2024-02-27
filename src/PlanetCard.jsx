
import React from 'react';
import ResidentDetails from './ResidentDetails';

const PlanetCard = ({ planet, onToggleResidentDetails }) => {
  // Check if planet object is valid
  if (!planet || !planet.name) {
    return null; // Render nothing if planet is invalid or missing name
  }

  return (
    <div className="planet-card" onClick={() => onToggleResidentDetails(planet)}>
      <h2>{planet.name}</h2>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Rotation Period:</strong> {planet.rotation_period}</p>
      <p><strong>Orbital Period:</strong> {planet.orbital_period}</p>
      <p><strong>Diameter:</strong> {planet.diameter}</p>
      <p><strong>Gravity:</strong> {planet.gravity}</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
     
      {planet.showResidents && (
        <>
          <br />
          <p><strong>Residents:</strong></p>
          <ul>
            {planet.residents.map((residentUrl, index) => (
              <li key={index}>
                <ResidentDetails residentUrl={residentUrl} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>

  );
};

export default PlanetCard;
