import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { Context } from "../store/appContext";
import starwars from "/workspaces/stanxlin-starwars-blog/src/img/starwars.png";


const PlanetCard = ({ planet }) => {
  const { actions } = useContext(Context);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAddFavorite = () => {
    actions.addFavorites(planet.name, planet.uid, 'planets');
    setDropdownOpen(true);
};


return (
  <div className="card" style={{ display: 'inline-block', margin: '0 10px' }}>
    <div className="card-body">
      <img src={starwars} alt="Star Wars"></img>
      <h5 className="card-title">{planet.name}</h5>
      <Link to={`/planetDetails/`+planet.uid} className="btn btn-outline-primary">Learn More!</Link>  
      <button type="button" className="btn btn-outline-warning" style={{marginLeft: '20px'}} onClick={handleAddFavorite}>♡</button>
    </div>
  </div>
);
}

  export default PlanetCard;