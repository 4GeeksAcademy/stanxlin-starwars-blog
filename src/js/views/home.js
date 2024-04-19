import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PersonCard from "../component/personCard";
import PlanetCard from "../component/planetCard";



export const Home = () => {
	const { store } = useContext(Context);
  
	
	return (
    <div className="page-container">
      <div className="container mt-5">
        <h1 className="text-center mb-4">Star Wars Characters</h1>

        <div className="row" style={{ marginBottom: '50px' }}>
          <div className="person-card-container" style={{ overflowX: 'auto', display: 'flex' }}>
            {store.people && store.people.map((person, index) => (
              <div className="col-md-4 mb-4" key={index} style={{ flex: '0 0 auto' }}>
                <PersonCard person={person} />
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="planet-card-container" style={{ overflowX: 'auto', display: 'flex' }}>
            {store.planet && store.planet.map((planet, index) => (
              <div className="col-md-4 mb-4" key={index} style={{ flex: '0 0 auto' }}>
                <PlanetCard planet={planet} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  };
  