import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Bike Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
                {/* -- */}

                {/* <Nav.Link href="#action1">Dashboard</Nav.Link> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Navigation;