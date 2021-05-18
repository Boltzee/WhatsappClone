import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <div className="app_body">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
};

export default App;
