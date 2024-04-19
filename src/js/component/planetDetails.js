import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "/workspaces/stanxlin-starwars-blog/src/img/starwars.png";

function PlanetDetails() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();


  useEffect(() => {
    actions.getPlanetDetail(id);
  }, []);

  return (
    <div className="container mt-5 text-center">
      {true ? (
        <>
          <h1>{store.planetDetail.name}</h1>
          <img src={starwars} alt="Star Wars"></img>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column align-items-start">
              <p><strong>Diameter: </strong>{store.planetDetail.diameter}</p>
              <p><strong>Orbital Period: </strong>{store.planetDetail.orbital_period}</p>
              <p><strong>Rotation Period: </strong>{store.planetDetail.rotation_period}</p>
              <p><strong>Gravity: </strong>{store.planetDetail.gravity}</p>
              <p><strong>Population: </strong>{store.planetDetail.population}</p>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
  
  
}

export default PlanetDetails;