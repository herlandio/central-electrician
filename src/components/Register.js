import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { handleRegister } from '../services/api/routes/register';

export const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const dispatch = useDispatch();
    const authError = useSelector((state) => state.auth.error);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleRegister(formData));
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
                                    type="password"
                                    placeholder="Senha"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>
                        </FormGroup>
                        <Button variant="primary" type="submit">Cadastrar</Button>
                        {authError && <p className="text-danger mt-3">{authError}</p>}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
