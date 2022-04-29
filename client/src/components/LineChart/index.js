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

const LineChart = () => {
  return (
    <>
      <Line
        data={{
          // how do we want to measure this? weekly? monthly? or we can do daily by hour
          // OR we could do ... last x amount of sales so [sale one, sale two, sale three, etc]
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
              // label is the title of whatever
              label: 'Weekly Revenue',
              // the data array will be what we pull from the sales from each checkout session
              data: [20, 30, 5, 3, 5],
              // or an array can be passed through to give each value a different color
              backgroundColor: 'blue',
              // same goes for border color
              borderColor: 'black',
              borderWidth: 1,
            },
          ],
        }}
        // height and width are in pixels
        height={200}
        width={400}
        options={{
          // fits to screen instead of allowing scroll
          maintainAspectRatio: true,
          // scales: {
          //   yAxes: [
          //     {
          //       ticks: {
          //         // value begins at 0 instead of lowest data value given
          //         beginAtZero: true,
          //       },
          //     },
          //   ],
          // },
        }}
      />
    </>
  );
};

export default LineChart;
