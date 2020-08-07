import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";

function App() {
    return (
        <Router>
            <Navbar />
            <main className="container-md">
                <Route exact path="/" component={About} />
            </main>
        </Router>
    );
}

export default App;