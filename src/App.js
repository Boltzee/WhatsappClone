/* eslint-disable no-unused-vars */

//WhatsApp
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

const App = () => {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="App">
            {!user ? (
                <Login />
            ) : (
                <div className="app_body">
                    <Router>
                        <Sidebar />
                        <Switch>
                            <Route path="/rooms/:roomId">
                                <Chat />
                            </Route>
                            <Route path="/">
                                <Chat />
                            </Route>
                            {/* <Route path="/" component={Chat} /> */}
                        </Switch>
                    </Router>
                </div>
            )}
        </div>
    );
};

export default App;
