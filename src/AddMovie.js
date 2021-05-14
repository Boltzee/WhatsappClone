import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [movies, setMovies] = useContext(MovieContext);

    const nameHandler = (e) => {
        setName(e.target.value);
    };
    const priceHandler = (e) => {
        setPrice(e.target.value);
    };

    const formHandler = (e) => {
        e.preventDefault();
        setMovies((prev) => [...prev, { name, price }]);
    };

    return (
        <form onSubmit={formHandler}>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={nameHandler}
            />
            <input
                type="text"
                name="price"
                id="price"
                value={price}
                onChange={priceHandler}
            />
            <button>Submit!</button>
        </form>
    );
};

export default AddMovie;
