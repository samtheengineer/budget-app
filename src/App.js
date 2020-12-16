import React from 'react';
import './App.css';
import './bootstrap.min.css'
import { Line, Doughnut } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Katie',
        fill: false,
        lineTension: 0.1,
        borderColor: 'rgba(205, 162, 252, 1)',
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
        borderColor: 'rgba(255, 146, 104, 1)',
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
  const costData = {
    labels: [
      'Rent',
      'Utilities',
      'Groceries',
      'Gas',
    ],
    datasets: [
      {
        backgroundColor:['rgba(105, 183, 255, 1)', 'rgba(105, 255, 63, 1)', 'rgba(255, 146, 104, 1)', 'rgba(255, 52, 63, 1)'],
        data: [1440, 400, 300, 60]
      }
    ]
  }
function App() {
  return (
    <div className="container-fluid">
      <h1 className="text-center">Budget App</h1>
      <div className="row">
        <div id="lineChart">
          <Line useRef="chart" data={data} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center">Necessary Costs</h2>
          <div id="reqcostDoughnut">
            <Doughnut useRef="chart" data={costData} />
          </div>
        </div>
        <div className="col-md-6">
        <h2 className="text-center">Extra Costs</h2>
          <div id="funcostDoughnut">
            <Doughnut useRef="chart" data={costData} />
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
