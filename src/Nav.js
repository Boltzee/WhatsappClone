import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
// import { db } from "./moviesList";

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div className="navbar">
            <h2>Kiran Tirunagiri</h2>
            <p>Number of movies : {movies.length}</p>
        </div>
    );
};

export default Nav;
