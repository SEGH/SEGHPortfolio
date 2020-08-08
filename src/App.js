import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./components/Header";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import "./assets/style.css";

function App() {
    return (
        <Router>
            <Header />
            <Container fluid="md">
                <Route exact path="/" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
            </Container>
            <Footer />
        </Router>
    );
}

export default App;
