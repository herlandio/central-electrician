import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faTools, faWrench } from '@fortawesome/free-solid-svg-icons';

export const Home = () => (
    <Container className="text-center mt-5">
        <Row>
            <Col className='py-sm-5 py-md-5 py-lg-5'>
                <h1>Bem-vindo à Central do Eletricista!</h1>
                <p>Oferecemos soluções para todas as suas necessidades elétricas.</p>
            </Col>
        </Row>
        <Row id="services" className="mt-4">
            <Col md={4}>
                <Card className="service-card">
                    <Card.Body>
                        <FontAwesomeIcon icon={faLightbulb} size="3x" className="mb-3" />
                        <Card.Title>Soluções de Iluminação</Card.Title>
                        <Card.Text>
                            Encontre as melhores soluções de iluminação para sua casa ou empresa.
                        </Card.Text>
                        <Button variant="primary">Saiba Mais</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="service-card">
                    <Card.Body>
                        <FontAwesomeIcon icon={faTools} size="3x" className="mb-3" />
                        <Card.Title>Serviços de Instalação</Card.Title>
                        <Card.Text>
                            Oferecemos serviços profissionais de instalação para sistemas elétricos.
                        </Card.Text>
                        <Button variant="primary">Saiba Mais</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="service-card">
                    <Card.Body>
                        <FontAwesomeIcon icon={faWrench} size="3x" className="mb-3" />
                        <Card.Title>Manutenção e Reparo</Card.Title>
                        <Card.Text>
                            Oferecemos serviços confiáveis de manutenção e reparo para suas necessidades elétricas.
                        </Card.Text>
                        <Button variant="primary">Saiba Mais</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className="mt-5">
            <Col>
                <h2 className='pb-4'>Dicas Úteis</h2>
                <ul className="tips-list">
                    <li>Verifique regularmente as tomadas e interruptores.</li>
                    <li>Use lâmpadas LED para economizar energia.</li>
                    <li>Não sobrecarregue as tomadas com muitos aparelhos.</li>
                    <li>Desligue os aparelhos que não estão em uso.</li>
                </ul>
            </Col>
        </Row>
    </Container>
);