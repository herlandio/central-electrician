import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, FormControl, InputGroup, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { handleRegister } from '../services/api/routes/register';
import { clearMessages } from '../store';

export const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password_confirmation: '' });
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const authError = useSelector((state) => state.auth.error);
    const authSuccess = useSelector((state) => state.auth.success);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.password_confirmation) {
            alert("As senhas não são iguais.");
            return;
        }
        setIsLoading(true);
        dispatch(handleRegister(formData).finally(() => setIsLoading(false)));
    };

    useEffect(() => {
        if (authSuccess || authError) {
            setFormData({ name: '', email: '', password: '', password_confirmation: '' }); 
            const timer = setTimeout(() => {
                dispatch(clearMessages());
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [authSuccess, authError, dispatch]);
    
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
                        <FormGroup controlId="formPasswordConfirmation" className="mb-3">
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroup.Text>
                                <FormControl
                                    type="password"
                                    placeholder="Confirme a Senha"
                                    name="password_confirmation"
                                    value={formData.password_confirmation}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>
                        </FormGroup>
                        <Button variant="primary" type="submit" className='mb-3'>
                            {isLoading ? (
                                    <>
                                        <Spinner as="span" animation="border" size="sm" aria-hidden="true" /> Cadastrando...
                                    </>
                                ) : (
                                    'Cadastrar'
                                )
                            }
                        </Button>
                        <output aria-live="polite" className="d-block mt-3">    
                            {authSuccess && <p className="text-success">{authSuccess}</p>}
                            {authError && <p className="text-danger mt-3">{authError}</p>}
                        </output>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
