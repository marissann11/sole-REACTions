import React from 'react';
import { useQuery } from '@apollo/client';
import LineChart from '../components/LineChart';

import { QUERY_ALL_USERS } from '../utils/queries';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ALL_USERS);

  console.log(loading, data);

  console.log(JSON.stringify(data));

  return (
    <div className="container">
      Hi, I'm the dashboard.
      <LineChart />
    </div>
  );
};

export default Dashboard;
