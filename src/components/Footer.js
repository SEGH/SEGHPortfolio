import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div id="footer" className="mt-auto">
            <Navbar className="justify-content-center pt-3 pb-3" dark color="dark">

                <Nav className="nav justify-content-center">

                    <NavItem className="text-center">
                        <NavLink className="text-white pb-0" href="mailto:SEG.Holland@gmail.com" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </NavLink>
                        <p className="mb-0 ml-n4">SEG.Holland@gmail.com</p>
                    </NavItem>

                    <NavItem className="text-center">
                        <NavLink className="text-white pb-0" href="https://github.com/SEGH" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </NavLink>
                        <p className="mb-0">GitHub</p>
                    </NavItem>

                    <NavItem className="text-center">
                        <NavLink className="text-white pb-0" href="https://www.linkedin.com/in/susan-ella-grace-holland/"
                            target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </NavLink>
                        <p className="mb-0">LinkedIn</p>
                    </NavItem>

                </Nav>

            </Navbar>
        </div>
    );
}
