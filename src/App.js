import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Central do Eletricista</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Início</Nav.Link>
                            <Nav.Link as={Link} to="/about">Sobre Nós</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main className='main'>
                <TransitionGroup>
                    <CSSTransition timeout={300} classNames="fade">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </main>
        </Router>
    );
}

export default App;
