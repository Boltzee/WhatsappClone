import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: "angry birds",
            price: 10,
            id: 1,
        },
        {
            name: "harry potter",
            price: 32,
            id: 2,
        },
        {
            name: "pacific rim",
            price: 53,
            id: 3,
        },
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};
