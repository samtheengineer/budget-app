import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const costData = {
    labels: [
        'Rent',
        'Utilities',
        'Groceries',
        'Gas',
        'Student Loan',
        'Car Loan'
    ],
    datasets: [
        {
            backgroundColor: ['rgba(37,95,133)', 'rgba(255,200,87)', 'rgba(233,114,76)', 'rgba(72,29,36)', 'rgba(100,235,100)', 'rgba(197,40,61)'],
            data: [1440, 400, 300, 100, 330, 550]
        }
    ]
}

function DoughnutChart() {
    return (
        <div>
            <Doughnut useRef="chart" data={costData} />
        </div>
    )
}
export default DoughnutChart;
