import React from 'react'
import '../styles/main.css'


const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <body>
      <div className="container-weather">

        <h2 className='City-label'>Find Weather of your city</h2>

        <form id='searchbox' onSubmit={fetchWeather}>
          <input className='citysearch'
            onChange={(e) => updateCity(e.target.value)}
            placeholder="City"
          />
          <button id='s-submit' type={"submit"}><i class="btn-search fas fa-search"></i></button>
        </form>
      </div>
    </body>
  );
};
export default CityComponent;
