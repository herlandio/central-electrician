import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BarChartComponent from './dashboard/BarChartComponent';
import LineChartComponent from './dashboard/LineChartComponent';
import PieChartComponent from './dashboard/PieChartComponent';
import RecentAppointmentsTable from './dashboard/RecentAppointmentsTable';
import DateRangeSelector from './dashboard/DateRangeSelector';

const calculateDateRange = (range) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let startDate = new Date(today);
    let endDate = new Date(today);

    switch (range) {
        case 'Últimos 7 dias':
            startDate.setDate(today.getDate() - 7);
            break;
        case 'Últimos 30 dias':
            startDate.setDate(today.getDate() - 30);
            break;
        case 'Este mês':
            startDate = new Date(today.getFullYear(), today.getMonth(), 1);
            endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            break;
        case 'Último semestre':
            startDate.setMonth(today.getMonth() - 6);
            startDate.setDate(1);
            break;
        default:
            break;
    }

    return { startDate, endDate };
};

const Dashboard = () => {
    const dataBarChart = [
        { service: 'Instalação Residencial', count: 120 },
        { service: 'Manutenção Industrial', count: 80 },
        { service: 'Instalação Comercial', count: 55 },
        { service: 'Assistência Técnica', count: 40 },
        { service: 'Consultoria Elétrica', count: 30 },
    ];

    const dataLineChart = [
        { month: 'Jan', count: 50 },
        { month: 'Feb', count: 80 },
        { month: 'Mar', count: 120 },
        { month: 'Apr', count: 90 },
        { month: 'May', count: 150 },
        { month: 'Jun', count: 130 },
        { month: 'Jul', count: 170 },
    ];

    const dataPieChart = [
        { name: 'Instalação Residencial', value: 120 },
        { name: 'Manutenção Industrial', value: 80 },
        { name: 'Instalação Comercial', value: 55 },
        { name: 'Assistência Técnica', value: 40 },
        { name: 'Consultoria Elétrica', value: 30 },
    ];

    const allAppointments = [
        { id: 1, service: 'Instalação Residencial', date: '2024-11-02', status: 'Completado', technician: 'Carlos', duration: '2h', estimatedCompletion: '2024-11-01' },
        { id: 2, service: 'Manutenção de Rede Elétrica', date: '2024-10-31', status: 'Pendente', technician: 'Mariana', duration: '3h', estimatedCompletion: '2024-11-02' },
        { id: 3, service: 'Manutenção de Ar Condicionado', date: '2024-10-30', status: 'Cancelado', technician: 'Rodrigo', duration: '2h', estimatedCompletion: '2024-10-30' },
    ];

    const [selectedDateRange, setSelectedDateRange] = useState('Últimos 7 dias');
    const [filteredAppointments, setFilteredAppointments] = useState(allAppointments);

    const handleDateRangeChange = (range) => {
        setSelectedDateRange(range);
        const { startDate, endDate } = calculateDateRange(range);

        const filtered = allAppointments.filter((appointment) => {
            const appointmentDate = new Date(appointment.date);
            appointmentDate.setHours(0, 0, 0, 0);

            return appointmentDate >= startDate && (!endDate || appointmentDate <= endDate);
        });

        setFilteredAppointments(filtered);
    };

    useEffect(() => {
        const { startDate, endDate } = calculateDateRange(selectedDateRange);
        const filtered = allAppointments.filter((appointment) => {
            const appointmentDate = new Date(appointment.date);
            appointmentDate.setHours(0, 0, 0, 0);

            return appointmentDate >= startDate && (!endDate || appointmentDate <= endDate);
        });

        setFilteredAppointments(filtered);
    }, [selectedDateRange]);

    return (
        <Container>
            <Row className="mb-4">
                <DateRangeSelector selectedDateRange={selectedDateRange} onSelect={handleDateRangeChange} />
            </Row>
            <Row className="mb-4">
                <Col md={6}>
                    <Card className="dashboard-card">
                        <Card.Header>Gráfico de Barras</Card.Header>
                        <Card.Body>
                            <BarChartComponent data={dataBarChart} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="dashboard-card">
                        <Card.Header>Gráfico de Linha</Card.Header>
                        <Card.Body>
                            <LineChartComponent data={dataLineChart} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={12}>
                    <Card className="dashboard-card">
                        <Card.Header>Gráfico de Pizza</Card.Header>
                        <Card.Body>
                            <PieChartComponent data={dataPieChart} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <Card className="dashboard-card">
                        <Card.Header>Atendimentos Recentes</Card.Header>
                        <Card.Body>
                            <RecentAppointmentsTable appointments={filteredAppointments} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
