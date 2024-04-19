import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "/workspaces/stanxlin-starwars-blog/src/img/starwars.png";

function PersonDetails() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getPersonDetail(id);
  }, []);

  return (
    <div className="container mt-5 text-center">
      {true ? (
        <>
          <h1>{store.personDetail.name}</h1>
          <img src={starwars} alt="Star Wars" style={{ marginBottom: '50px' }}></img>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column align-items-start">
              <p><strong>Height: </strong>{store.personDetail.gender}</p>
              <p><strong>Mass: </strong>{store.personDetail.hair_color}</p>
              <p><strong>Hair Color: </strong>{store.personDetail.eye_color}</p>
              <p><strong>Skin Color: </strong>{store.personDetail.height}</p>
              <p><strong>Eye Color: </strong>{store.personDetail.mass}</p>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default PersonDetails;
