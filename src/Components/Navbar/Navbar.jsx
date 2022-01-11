import {Navbar, Nav, NavDropdown, Container, Form, FormControl, Button} from "react-bootstrap"
import { NavLink} from "react-router-dom";

const NavbarMain = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <NavLink to="/homepage" style={{textDecoration: "none"}}>
                    <Navbar.Brand>Nathan Lapak</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    <NavLink to="/education" style={{textDecoration: "none"}}>
                        <Nav.Link href="#Education">Education</Nav.Link>
                    </NavLink>
                    
                    <NavLink to="/contact" style={{textDecoration: "none"}}>
                        <Nav.Link href="#Contact me">Contact</Nav.Link>
                    </NavLink>
                    <NavDropdown title="Projects" id="collasible-nav-dropdown">
                        
                        <NavLink to="/projects" style={{textDecoration: "none"}}>
                            <NavDropdown.Item href="projects">Projects</NavDropdown.Item>  
                        </NavLink>

                        <NavDropdown.Divider />

                        <NavLink to="/projects/game-dev" style={{textDecoration: "none"}}>
                            <NavDropdown.Item href="game-dev">Game Dev</NavDropdown.Item>
                        </NavLink>

                        <NavLink to="/projects/IOS-web" style={{textDecoration: "none"}}>
                            <NavDropdown.Item href="IOS-web">IOS and web</NavDropdown.Item>
                        </NavLink>
                        
                        <NavLink to="/projects/AI-ML" style={{textDecoration: "none"}}>
                            <NavDropdown.Item href="/projects/AI-ML">A.I and ML</NavDropdown.Item>
                        </NavLink> 
                        
                        <NavDropdown.Divider />

                        <NavLink to="/projects/Miscellaneous" style={{textDecoration: "none"}}>
                            <NavDropdown.Item href="#action/3.4">Miscellaneous</NavDropdown.Item>
                        </NavLink>
                    
                    </NavDropdown>
\
                    </Nav>
                    <Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Find specific page"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarMain