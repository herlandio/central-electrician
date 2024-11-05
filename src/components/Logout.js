import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { handleLogout } from '../services/api/routes/logout';

const Logout = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const confirmLogout = () => {
        dispatch(handleLogout());
        handleCloseModal();
    };

    return (
        <>
            <Button variant="danger" onClick={handleShowModal}>
                Sair
            </Button>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar saída</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza de que deseja sair?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={confirmLogout}>
                        Sair
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Logout;
