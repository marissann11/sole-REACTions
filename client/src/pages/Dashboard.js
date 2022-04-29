import React from 'react';
import { useQuery } from '@apollo/client';
import LineChart from '../components/LineChart';

import { QUERY_ORDERS } from '../utils/queries';

// useEffect(() => {
//   fetchSales = async () => {
//     const { res } = await fetch(queryOrders);
//   };
//   fetchSales();
// }, []);

// reducer function const getSales = () => {...reducer}
// total sales sent to chart.js

// useEffect(() => {
//   const { loading, data } = useQuery(QUERY_ORDERS);
//   console.log(loading, data);
// }, []);

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ORDERS);

  console.log(loading, data);

  return (
    <div className="container">
      Hi, I'm the dashboard.
      <LineChart />
    </div>
  );
};

export default Dashboard;
