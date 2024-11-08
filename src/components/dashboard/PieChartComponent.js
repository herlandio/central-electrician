import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

const PieChartComponent = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
                {data.map((entry, index) => (
                    <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    </ResponsiveContainer>
);

PieChartComponent.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default PieChartComponent;
