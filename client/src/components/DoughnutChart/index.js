import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DoughnutChart = ({ brandData }) => {
  const brands = [];
  const repeats = [];
  for (let i = 0; i < brandData.length; i++) {
    if (brands.includes(brandData[i])) {
      repeats.push(brandData[i]);
    } else {
      brands.push(brandData[i]);
    }
  }
  return (
    <>
      <Doughnut
        data={{
          labels: [brands[0], brands[1], brands[2], brands[3]],
          datasets: [
            {
              label: 'Your Top Brands',
              data: [4, 2, 7, 10],
              backgroundColor: ['blue', 'orange', 'green', 'yellow'],
            },
          ],
        }}
        height={50}
        width={50}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </>
  );
};

export default DoughnutChart;
