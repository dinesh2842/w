import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './GetAxios.css';
import PlanetCard from './PlanetCard';
import Pagination from './Pagination';



const baseUrl = "https://swapi.dev/api/planets/";

function GetAxios() {
  const [planets, setPlanets] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(baseUrl);
  }, []);

  const fetchData = (url) => {
    Axios.get(url)
      .then(response => {
        setPlanets(response.data.results.map(planet => ({ ...planet, showResidents: false })));
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const toggleResidentDetails = (index) => {
    setPlanets(prevPlanets => {
      return prevPlanets.map((planet, idx) => {
        if (idx === index) {
          return { ...planet, showResidents: !planet.showResidents };
        }
        return planet;
      });
    });
  };

  const handlePageChange = (url) => {
    if (url) {
      fetchData(url);
      setCurrentPage(currentPage + (url === nextPageUrl ? 1 : -1));
    }
  };

  return (
    <>
      <h1 style={{ color: 'white' }}>Star Wars Planets</h1>
      <div className="planet-container">
        {planets.map((planet, index) => (
          <PlanetCard
            key={index}
            planet={planet}
            onToggleResidentDetails={() => toggleResidentDetails(index)}
          />
        ))}
      </div>
      <Pagination
        prevPageUrl={prevPageUrl}
        nextPageUrl={nextPageUrl}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
}

export default GetAxios;
