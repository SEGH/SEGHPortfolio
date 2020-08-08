import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import resume from "../assets/Resume.pdf";

export default function Header() {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar expand="lg" dark color="dark">

            <NavbarBrand href="/">Susan Holland</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={!collapsed} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                    </NavItem>
                    <NavItem>
                        <a href={resume} target="_blank" class="nav-link">Resume</a>
                    </NavItem>
                    <NavItem>
                        <Link to="contact" class={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                    </NavItem>
                </Nav>
            </Collapse>

        </Navbar>
    )
}
