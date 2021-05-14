import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
const MoviesList = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            {/* {val} */}
            {movies.map((movie) => (
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </div>
    );
};

export default MoviesList;
