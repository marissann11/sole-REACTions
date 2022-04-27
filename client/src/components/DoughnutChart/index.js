import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
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
        height={300}
        width={300}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </>
  );
};

export default DoughnutChart;
