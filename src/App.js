import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./components/Header";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/Footer";
import { greenLight as svgBackground } from "./assets/greenLight.svg";
import greenLight from "./assets/greenLight.webp";

function App() {
    
    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = greenLight;

        imageLoader.onload = () => {
            console.log("source")
            document.body.style.backgroundImage = `url(${imageLoader.src})`;
        }
    }, []);
    
    return (
        <Router>
            <Header />
            <Container fluid="md" className="mt-5 pt-5">
                <Route exact path="/" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
            </Container>
            <Footer />
        </Router >
    );
}

export default App;
