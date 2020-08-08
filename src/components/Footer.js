import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

export default function Footer() {
    return (
        <Navbar className="mt-auto justify-content-center" dark color="dark">

            <Nav className="nav justify-content-center">

                <NavItem>
                    <NavLink className="text-white" href="mailto:segh@fastmail.com" target="_blank">
                        <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="text-white" href="https://github.com/SEGH" target="_blank">
                        <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="text-white" href="https://www.linkedin.com/in/susan-ella-grace-holland/"
                        target="_blank">
                        <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                    </NavLink>
                </NavItem>

            </Nav>

        </Navbar>
    );
}
