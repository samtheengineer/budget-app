import React from 'react';
import './App.css';
import './bootstrap.min.css'
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart'

function App() {
  return (
    <div className="container-fluid">
      <h1 className="text-center">Budget App</h1>
      <div className="row">
        <LineChart />
      </div>
      <div className="row">
      <div className="col-md-4">
          <h2 className="text-center">All Costs</h2>
          <DoughnutChart />
        </div>
        <div className="col-md-4">
          <h2 className="text-center">Necessary Costs</h2>
          <DoughnutChart />
        </div>
        <div className="col-md-4">
          <h2 className="text-center">Extra Costs</h2>
          <DoughnutChart />
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
