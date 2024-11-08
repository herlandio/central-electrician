import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const DateRangeSelector = ({ selectedDateRange, onSelect }) => (
    <DropdownButton
        id="date-range-dropdown"
        title={selectedDateRange}
        onSelect={onSelect}
    >
        <Dropdown.Item eventKey="Últimos 7 dias">Últimos 7 dias</Dropdown.Item>
        <Dropdown.Item eventKey="Últimos 30 dias">Últimos 30 dias</Dropdown.Item>
        <Dropdown.Item eventKey="Este mês">Este mês</Dropdown.Item>
        <Dropdown.Item eventKey="Último semestre">Último semestre</Dropdown.Item>
    </DropdownButton>
);

DateRangeSelector.propTypes = {
    selectedDateRange: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default DateRangeSelector;
