import React from 'react';
import './App.css';
import './bootstrap.min.css'
import DoughnutCharts from './components/DoughnutCharts';
import LineChart from './components/LineChart'
import Header from './components/Header';
function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <h1 className="text-center">Budget App</h1>
        <LineChart labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']} />
        <DoughnutCharts />
      </div>
    </div>
    
  );
}

export default App;
