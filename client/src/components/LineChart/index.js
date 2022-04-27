import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  return (
    <>
      <Line
        data={{
          // how do we want to measure this? weekly? monthly? or we can do daily by hour
          // if we want to pass in the date or time purchased to our info that we are pulling from, we could more easily control this
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
              // this is hardcoded just as a placeholder
              data: [120, 300, 1675, 350, 895],
              // or an array can be passed through to give each value a different color
              backgroundColor: 'blue',
              // same goes for border color (this may be all we want for line chart)
              borderColor: 'black',
              borderWidth: 1,
            },
          ],
        }}
        // height and width are in pixels
        height={300}
        width={500}
        options={{
          // fits to screen instead of allowing scroll
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  // value begins at 0 instead of lowest data value given
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

export default LineChart;
