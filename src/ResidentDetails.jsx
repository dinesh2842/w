import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ResidentDetails = ({ residentUrl }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    Axios.get(residentUrl)
      .then(response => {
        setResident(response.data);
      })
      .catch(error => {
        console.error('Error fetching resident details:', error);
      });
  }, [residentUrl]);

  return resident ? (
    <div>
      {resident.name && <p><strong>Name:</strong> {resident.name}</p>}
      {resident.height && <p><strong>Height:</strong> {resident.height}</p>}
      {resident.mass && <p><strong>Mass:</strong> {resident.mass}</p>}
      {resident.gender && <p><strong>Gender:</strong> {resident.gender}</p>}
      <hr /> 
    </div>
  ) : (
    <p></p>
  );
};

export default ResidentDetails;
