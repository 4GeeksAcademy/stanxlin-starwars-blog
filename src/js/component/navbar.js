import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const removeFromFavorites = (uid) => {
        actions.removeFromFavorites(uid);
    };

    return (
        <nav className="navbar navbar-light bg-light mb-3 d-flex">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Home</span>
            </Link>
            <div style={{ display: 'flex', justifyContent: 'center', marginRight: '100px' }}>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded={store.favorites.length > 0}>
                        Favorites
                    </button>
                    <ul className={"dropdown-menu" + (store.favorites.length > 0 ? " show" : "")} style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {store.favorites?.map((favorite, index) => {
                            return (
                                <li key={index}>
                                    {favorite.type === 'character' && (
                                        <div>
                                            <Link to={`/personDetails/${favorite.uid}`}>
                                                {favorite.name}
                                            </Link>
                                            <i className="fas fa-trash" style={{ marginLeft: '10px' }} onClick={() => removeFromFavorites(favorite.uid)}></i>
                                        </div>
                                    )}
                                    {favorite.type === 'planets' && (
                                        <div>
                                            <Link to={`/planetDetails/${favorite.uid}`}>
                                                {favorite.name}
                                            </Link>
                                            <i className="fas fa-trash" style={{ marginLeft: '10px' }} onClick={() => removeFromFavorites(favorite.uid)}></i>
                                        </div>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
