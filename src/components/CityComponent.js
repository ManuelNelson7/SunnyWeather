import React from 'react'
import '../styles/main.css'


const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <body>
      <div className="container-weather">

        <h2 className='City-label'>Obtén el clima de tu ciudad</h2>

        <form id='searchbox' onSubmit={fetchWeather}>
          <input className='citysearch'
            onChange={(e) => updateCity(e.target.value)}
            placeholder="Ciudad"
          />
          <button id='s-submit' type={"submit"}><i class="btn-search fas fa-search"></i></button>
        </form>
      </div>
    </body>
  );
};
export default CityComponent;
