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
                                <Nav.Link href="#about" className="navbarLink active">About</Nav.Link>
                            </NavLink>

                            <NavLink to="/blog" style={{textDecoration: "none"}}>
                                <Nav.Link href="#blog" className="navbarLink active">Blog</Nav.Link>
                            </NavLink>
{/* 
                            <NavLink to="/resume" style={{textDecoration: "none"}}>
                                <Nav.Link href="#resume" className="navbarLink active">Resume</Nav.Link>
                            </NavLink> */}
                            
                            <NavLink to="/contact" style={{textDecoration: "none"}}>
                                <Nav.Link href="#contact" className="navbarLink active">Contact</Nav.Link>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarMain