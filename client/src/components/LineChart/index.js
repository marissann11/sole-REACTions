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

const LineChart = ({ adminSales }) => {
  console.log(adminSales);
  return (
    <>
      <Line
        data={{
          labels: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          datasets: [
            {
              label: 'Latest Sales',
              data: [20, 30, 5, 3, 5],
              backgroundColor: 'blue',
              borderColor: 'black',
              borderWidth: 1,
            },
          ],
        }}
        height={200}
        width={300}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </>
  );
};

export default LineChart;
