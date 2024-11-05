import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, FormControl, InputGroup, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin } from '../services/api/routes/login';
import { clearMessages } from '../store';

export const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const authError = useSelector((state) => state.auth.error);
    const authSuccess = useSelector((state) => state.auth.success);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        dispatch(handleLogin(formData)).finally(() => setIsLoading(false));
    };
    
    useEffect(() => {
        if (authSuccess || authError) {
            setFormData({ email: '', password: ''}); 
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
                    <h2 className='pb-4'>Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup controlId="formEmail" className="mb-3">
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text>
                                <FormControl
                                    type="email"
                                    placeholder="Digite seu e-mail"
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
                                    placeholder="Digite sua senha"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>
                        </FormGroup>
                        <Button variant="success" type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Spinner as="span" animation="border" size="sm" aria-hidden="true" /> Carregando...
                                </>
                            ) : (
                                'Entrar'
                            )}
                        </Button>
                        <output aria-live="polite" className="d-block mt-3">
                            {authError && <p className="text-danger">{authError}</p>}
                            {authSuccess && <p className="text-success">{authSuccess}</p>}
                        </output>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
