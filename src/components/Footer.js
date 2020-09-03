import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <Navbar className="mt-auto justify-content-center" dark color="dark">

            <Nav className="nav justify-content-center">

                <NavItem>
                    <NavLink className="text-white" href="mailto:segh@fastmail.com" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="text-white" href="https://github.com/SEGH" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="text-white" href="https://www.linkedin.com/in/susan-ella-grace-holland/"
                        target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </NavLink>
                </NavItem>

            </Nav>

        </Navbar>
    );
}
