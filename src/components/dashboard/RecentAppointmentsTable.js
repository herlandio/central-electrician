import React from 'react';
import PropTypes from 'prop-types';
import { Table, Badge } from 'react-bootstrap';

const RecentAppointmentsTable = ({ appointments }) => (
    <Table striped bordered hover responsive>
        <thead>
            <tr>
                <th>Serviço</th>
                <th>Data</th>
                <th>Status</th>
                <th>Técnico</th>
                <th>Duração</th>
                <th>Conclusão Estimada</th>
            </tr>
        </thead>
        <tbody>
            {appointments.map(appointment => (
                <tr key={appointment.id}>
                    <td>{appointment.service}</td>
                    <td>{appointment.date}</td>
                    <td><Badge variant={appointment.status === 'Completado' ? 'success' : 'warning'}>{appointment.status}</Badge></td>
                    <td>{appointment.technician}</td>
                    <td>{appointment.duration}</td>
                    <td>{appointment.estimatedCompletion}</td>
                </tr>
            ))}
        </tbody>
    </Table>
);

RecentAppointmentsTable.propTypes = {
    appointments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            service: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            technician: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired,
            estimatedCompletion: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default RecentAppointmentsTable;
