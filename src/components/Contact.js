import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => (
    <Container className="mt-5">
        <Row>
            <Col className='bg-white p-5 rounded'>
                <h2 className='pb-4'>Entre em Contato</h2>
                <Form>
                    <FormGroup controlId="formBasicEmail" className="mb-3">
                        <FormControl type="email" placeholder="Seu e-mail" />
                    </FormGroup>
                    <FormGroup controlId="formBasicMessage" className="mb-3">
                        <FormControl as="textarea" rows={3} placeholder="Sua mensagem" />
                    </FormGroup>
                    <Button variant="success" type="submit">Enviar</Button>
                </Form>
                <div className="contact-info mt-4">
                    <p><FontAwesomeIcon icon={faEnvelope} /> contato@centraldoeletricista.com</p>
                    <p><FontAwesomeIcon icon={faPhone} /> (11) 1234-5678</p>
                </div>
            </Col>
        </Row>
    </Container>
);