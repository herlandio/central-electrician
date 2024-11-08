import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Profile() {
    const user = useSelector((state) => state.auth.user);

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-4">
                                <h3>Perfil de {user?.name}</h3>
                            </Card.Title>
                            <Card.Text>
                                <strong>Email:</strong> {user?.email}
                            </Card.Text>
                            <Card.Text>
                                <strong>Nome:</strong> {user?.name}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
