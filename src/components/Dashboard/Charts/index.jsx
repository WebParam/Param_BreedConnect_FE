import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )


const BreederCharts = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Total Sales',
            data: [1000, 1500, 2000, 1800, 2500, 3000],
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      };
    
      const options = {
        scales: {
          x: {
            type: 'category', // Use 'category' for the x-axis
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Specify your category labels here
          },
          y: {
            beginAtZero: true, // You can customize the y-axis options here
          },
        },
      };
    
      return (
        <div>
          <Line data={data} options={options} />
        </div>
      );
};

export default BreederCharts;