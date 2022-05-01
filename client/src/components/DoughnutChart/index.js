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
  console.log(brandData);

  return (
    <>
      <Doughnut
        data={{
          // doughnut chart we can use for allowing the admin to track what brands are selling more than others
          labels: ['Adidas', 'Jordan', 'New Balance', 'Nike'],
          datasets: [
            {
              label: 'Brands',
              // this is where we would pass through quantity of each brand that has been sold
              // we can do this over a longer period of time (all- time)
              data: [12, 15, 34, 21],
              // different bg color for each corresponding data value
              backgroundColor: ['red', 'blue', 'yellow', 'purple'],
            },
          ],
        }}
        height={100}
        width={100}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </>
  );
};

export default DoughnutChart;
