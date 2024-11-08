import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Register } from './components/Register';
import { Login } from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <FontAwesomeIcon icon={faHome} className="me-2" />
                        Central do Eletricista
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {!isAuthenticated && (
                                <>
                                    <Nav.Link as={Link} to="/">
                                        <FontAwesomeIcon icon={faHome} className="me-1" />
                                        Início
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/about">
                                        <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
                                        Sobre Nós
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/contact">
                                        <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                                        Contato
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>

                        <Nav className="ms-auto">
                            {!isAuthenticated && (
                                <>
                                    <Nav.Link as={Link} to="/register">
                                        <FontAwesomeIcon icon={faUserPlus} className="me-1" />
                                        Cadastro
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/login">
                                        <FontAwesomeIcon icon={faSignInAlt} className="me-1" />
                                        Login
                                    </Nav.Link>
                                </>
                            )}

                            {isAuthenticated && (
                                <NavDropdown
                                    title={
                                        <span>
                                            <strong>{user?.name}</strong>
                                        </span>
                                    }
                                    id="user-dropdown"
                                >
                                    <NavDropdown.Item as={Link} to="/dashboard">
                                        <FontAwesomeIcon icon={faHome} className="me-2" />
                                        Dashboard
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/profile">
                                        <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                                        Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Logout />
                                    </NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main className="main">
                <TransitionGroup>
                    <CSSTransition timeout={300} classNames="fade">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                            <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </main>
        </Router>
    );
}

export default App;
