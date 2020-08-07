import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
        </Router>
    );
}

export default App;