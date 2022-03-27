import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {user,logOut} = useAuth();
    return (
        <>
              <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
                    <Container>
                    <Navbar.Brand href="#home">Bike Shop</Navbar.Brand>
                   
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/bikes">Bikes</Nav.Link>
                        {
                            user?.email ?
                            
                            <Nav.Link as={Link} onClick={logOut} >Logout</Nav.Link>  
                        :
                         <Nav.Link as={Link} to="/login">Login</Nav.Link>              
                        }
                        </Navbar.Collapse>                                      
                    </Container>
                </Navbar>
        </>
    );
};

export default Navigation;




        //     <Navbar bg="light" expand="lg">
        //     <Container fluid>
        //         <Navbar.Brand href="#">Bike Shop</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="navbarScroll" />
        //         <Navbar.Collapse id="navbarScroll">
        //         <Nav
        //             className="me-auto my-2 my-lg-0"
        //             style={{ maxHeight: '100px' }}
        //             navbarScroll
        //         >   
        //             <Link to='/home' style={{textdecoration:"none"}} >
        //                     <Nav.Link  href="#action1">Home</Nav.Link>
        //             </Link>
        //             <NavLink to='/bikes'>
        //                 <Nav.Link href="#action2">Bikes</Nav.Link>
        //             </NavLink>
        //             <Nav.Link href="#action2">Link</Nav.Link>
        //         </Nav>
        //         {/* -- */}

        //         {/* <Nav.Link href="#action1">Dashboard</Nav.Link> */}
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>