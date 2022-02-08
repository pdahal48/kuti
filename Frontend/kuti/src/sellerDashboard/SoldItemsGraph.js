import React from 'react';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);  

  
const SoldItemsGraph = () => {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
        },

        title: {
            display: false,
            text: 'Number of items sold over time',
          },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
          {
            label: 'Number of items sold over time',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
    };
    
    return (
        <Line
            options={options} 
            data={data} 
        />
    )
}

export default SoldItemsGraph;