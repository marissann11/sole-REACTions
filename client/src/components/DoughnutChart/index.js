import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './style.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ brandData }) => {
  let nike = [];
  let adidas = [];
  let jordan = [];
  let newbalance = [];

  for (let i = 0; i < brandData.length; i++) {
    if (brandData[i] === 'Nike') {
      nike.push(brandData[i]);
    }
    if (brandData[i] === 'Adidas') {
      adidas.push(brandData[i]);
    }
    if (brandData[i] === 'Jordan') {
      jordan.push(brandData[i]);
    } else {
      newbalance.push(brandData[i]);
    }
  }
  const data = {
    labels: ['Nike', 'Adidas', 'Jordan', 'New Balance'],
    datasets: [
      {
        label: '# of Votes',
        data: [nike.length, adidas.length, jordan.length, newbalance.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="donut">
      {' '}
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
