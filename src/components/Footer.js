import React from "react";

export default function Footer() {
    return (
        <footer className="navbar mt-auto navbar-dark bg-dark justify-content-center">

        <ul className="nav justify-content-center">

            <li className="nav-item">
                <a className="nav-link text-white" href="mailto:segh@fastmail.com" target="_blank">
                    <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link text-white" href="https://github.com/SEGH" target="_blank">
                    <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link text-white" href="https://www.linkedin.com/in/susan-ella-grace-holland/"
                    target="_blank">
                    <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                </a>
            </li>

        </ul>

    </footer>
    );
}
