import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
import MoviesList from "./moviesList";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <MovieProvider>
                <div>
                    <Nav />
                    <MoviesList />
                    <Route path="/add" component={AddMovie} />
                </div>
            </MovieProvider>
        </Router>
    );
}

export default App;
