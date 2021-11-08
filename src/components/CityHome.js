import React from 'react';
import { Link } from 'react-router-dom';

const CityComponent = (props) => {
    const { updateCity, fetchWeather } = props;
    return (
      <>
        <form id='searchbox' onSubmit={fetchWeather}>
          <input
            onChange={(e) => updateCity(e.target.value)}
            placeholder="City"
          />
          <button type={"submit"}>Search</button>
        </form>
      </>
    );
  };
  export default CityComponent;
