import "./Navbar.css"

import {Navbar, Nav, Container} from "react-bootstrap"
import { NavLink} from "react-router-dom";

const NavbarMain = () => {
    return (
        <div>

            {/* General navbar components */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>

                {/* Full name and Brand */}
                <NavLink to="/homepage" style={{textDecoration: "none"}}>
                    <Navbar.Brand className="navbarHeader">Nathan Lapak</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                {/* Sub-sections of websites */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    
                    <NavLink to="/about" style={{textDecoration: "none"}}>
                        <Nav.Link href="#about" className="navbarLink">About</Nav.Link>
                    </NavLink>

                    <NavLink to="/blog" style={{textDecoration: "none"}}>
                        <Nav.Link href="/blog" className="navbarLink">Blog</Nav.Link>
                    </NavLink>
                    
                    <NavLink to="/contact" style={{textDecoration: "none"}}>
                        <Nav.Link href="#Contact" className="navbarLink">Contact</Nav.Link>
                    </NavLink>

                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarMain