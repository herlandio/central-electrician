import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const About = () => (
    <Container className="mt-5">
        <Row>
            <Col className='bg-white p-5 rounded'>
                <h2 className='pb-4'>Sobre Nós</h2>
                <p>
                    Na Central do Eletricista, somos uma equipe dedicada de profissionais qualificados com anos de experiência
                    na indústria elétrica. Nossa missão é fornecer soluções de qualidade e garantir a satisfação do cliente.
                </p>
                <p>
                    Estamos comprometidos com a segurança e a eficiência em todos os nossos serviços.
                </p>
            </Col>
        </Row>
    </Container>
);