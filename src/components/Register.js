import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Cadastro:', formData);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6} className='bg-white p-5 rounded'>
                    <h2 className='pb-4'>Cadastro</h2>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup controlId="formName" className="mb-3">
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroup.Text>
                                <FormControl
                                    type="text"
                                    placeholder="Nome"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="formEmail" className="mb-3">
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text>
                                <FormControl
                                    type="email"
                                    placeholder="E-mail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="formPassword" className="mb-3">
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroup.Text>
                                <FormControl
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Senha"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </Button>
                            </InputGroup>
                        </FormGroup>
                        <Button variant="primary" type="submit">Cadastrar</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
