import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "/workspaces/stanxlin-starwars-blog/src/img/starwars.png";

const PersonCard = ({ person }) => {
    const { actions } = useContext(Context);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleAddFavorite = () => {
        actions.addFavorites(person.name, person.uid, 'character');
        setDropdownOpen(true);
    };

    return (
        <div className="card" style={{ display: 'inline-block', margin: '0 10px' }}>
            <div className="card-body">
                <img src={starwars} alt="Star Wars"></img>
                <h5 className="card-title">{person.name}</h5>
                <Link to={`/personDetails/${person.uid}`} className="btn btn-outline-primary">Learn More!</Link>  
                <button type="button" className="btn btn-outline-warning" style={{marginLeft: '20px'}} onClick={handleAddFavorite}>♡</button>
            </div>
        </div>
    );
};

export default PersonCard;