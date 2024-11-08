import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="service" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#0088FE" />
        </BarChart>
    </ResponsiveContainer>
);

BarChartComponent.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            service: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default BarChartComponent;
