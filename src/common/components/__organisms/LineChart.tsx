import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [2, 3, -4, 5, 6, -7, 8], 
      borderColor: '#30AD11',
      backgroundColor: '#30AD11',
    },
  ],
};

const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
      legend: {
        display: false, 
      },
    },
    scales: {
      x: {
        display: false, 
      },
      y: {
        display: false, 
      },
    },
    maintainAspectRatio: false,
  };
  
  function LineChart() {
    return <Line options={options} data={data} />;
  }
  
  export default LineChart;
  