import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./Add";

const App = () => {
    const style = {
        backgroundColor: "wheat",
    };
    prompt("what is teh name of the so called in the meantime");
    return (
        <div className="main" style={style}>
            <div>This is the main element</div>
            <Router>
                <Route path="/add" component={Add} />
            </Router>
        </div>
    );
};

export default App;
