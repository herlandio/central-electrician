import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin } from '../services/api/routes/login';

export const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const authError = useSelector((state) => state.auth.error);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(formData));
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6} className='bg-white p-5 rounded'>
                    <h2 className='pb-4'>Login</h2>
                    <Form onSubmit={handleSubmit}>
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
                                    type="password"
                                    placeholder="Senha"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>
                        </FormGroup>
                        <Button variant="success" type="submit">Entrar</Button>
                        {authError && <p className="text-danger mt-3">{authError}</p>}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
