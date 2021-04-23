import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import resume from "../assets/Resume.pdf";

export default function Header() {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const [scrollTop, setScrollTop] = useState(document.body.scrollTop || document.documentElement.scrollTop);

    useEffect(() => {
        const handleScroll = () => setScrollTop(document.body.scrollTop || document.documentElement.scrollTop);

        document.addEventListener("scroll", handleScroll);

        return () => document.removeEventListener("scroll", handleScroll);
    }, [])

    console.log(scrollTop)

    return (
        <div>
            <Navbar id="headerNav" expand="lg" dark className={scrollTop > 100 ? "bg-solid" : "bg-trans"} fixed="top">

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
                            <a href={resume} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    )
}
