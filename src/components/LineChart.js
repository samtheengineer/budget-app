import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Katie',
            fill: false,
            lineTension: 0.1,
            borderColor: 'rgba(129,137,110)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            // borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(205, 162, 252, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Sam',
            fill: false,
            lineTension: 0.1,
            borderColor: 'rgba	(102,122,116)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            // borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 146, 104, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [100, 40, 30, 81, 45, 55, 72]
        }
    ]
};
function LineChart() {
    return (
        <div id="lineChart">
            <Line useRef="chart" data={data} />
        </div>
    )
}

export default LineChart;