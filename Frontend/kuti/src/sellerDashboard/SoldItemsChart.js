import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {Row, Col} from 'react-bootstrap'

ChartJS.register(ArcElement, Tooltip, Legend);

const SoldItemsChart = () => {

    const data = {
        labels: ['Lahengas', 'Sarees', 'Jwelleries', 'Others'],
        datasets: [
          {
            label: '# of items sold',
            data: [12, 15, 8, 5],
            backgroundColor: [
              '#DF362D',
              '#FF4500',
              '#B7AC44',
              '#FF8300'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
            <Pie
                data={data} 
                height={450}
                width={400}
                options =  {{
                    responsive: true,
                    maintainAspectRatio:false,
                    plugins: {
                      legend: {
                        position: 'left',
                    labels: {
                        usePointStyle: true
                    }}}
                  }
                }
            />
    )
}

// 

export default SoldItemsChart;