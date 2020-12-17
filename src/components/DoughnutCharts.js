import React from 'react';
import AllCostsChart from './AllCostsChart';
import NecessaryCostsChart from './NecessaryCostsChart';
import ExtraCostsChart from './ExtraCostsChart';

function DoughnutCharts() {
    return (
        <div className="row">
            <AllCostsChart labels={[
                'Necessary Cost',
                'Extra Cost'
            ]} data={[2000, 600]} />
            <NecessaryCostsChart labels={[
                'Rent',
                'Utilities',
                'Groceries',
                'Gas',
                'Student Loan',
                'Car Loan'
            ]} data={[1500, 400, 300, 100, 300, 500]} />

            <ExtraCostsChart labels={[
                'Restaurants',
                'Entertainment',
                'Travel',
                'Other'
            ]} data={[200, 50, 60, 200]} />
        </div>
    )
}
export default DoughnutCharts;
