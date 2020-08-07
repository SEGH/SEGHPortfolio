import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <header class="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link to="/" class="navbar-brand">Susan Holland</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link to="/" class={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="portfolio" class={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="contact" class={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}
