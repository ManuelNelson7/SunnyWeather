import React from "react";
import Btn from "../components/Btn";

const Home = () => {

    return (
        <body>
            <div className="container">
                <div className="img-div">
                    <img className='logo' src="/icons/day.svg" alt="Sunny svg logo" />
                </div>
                <div className="text">
                    <h1><span id='sunny'>Sunny</span> Weather</h1>
                    <p>Obten ahora el clima de cualquier ciudad. Rápido y sin límites</p>
                    <Btn path='/weather' text='Comenzar' />
                </div>
            </div>
            
        </body>
    )
}

export default Home
