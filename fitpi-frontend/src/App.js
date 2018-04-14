import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-dazzle/lib/style/style.css";
import "react-vis/dist/style.css";
import "./App.css";

import Dashboard from "./components/Dashboard";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Dashboard />
            </div>
        );
    }
}

export default App;
