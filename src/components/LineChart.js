import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function LineChart(props) {
    const [chartData, setChartData] = useState(() => {
        const data = {
            labels: [],
            datasets: [
                {
                    label: 'Income',
                    fill: false,
                    lineTension: 0.1,
                    borderColor: 'rgba(193, 204, 153)',
                    borderCapStyle: 'butt',
                    pointBorderColor: 'rgba(205, 162, 252, 1)',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [6000, 6200, 6000, 5800, 6100, 6000, 5800]
                },
                {
                    label: 'Expenses',
                    fill: false,
                    lineTension: 0.1,
                    borderColor: 'rgba(216, 17, 89)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    // borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(216, 17, 89)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [3482, 3599, 3500, 2790, 3000, 4850, 3000]
                }
            ]
        }
        data.labels = props.labels;
        console.log('LineChart data loaded')
        return data;
    })
    return (
        <div id="lineChart">
            <Line useRef="chart" data={chartData} />
        </div>
    )
}

export default LineChart;