import React from 'react';
import { useQuery } from '@apollo/client';
import LineChart from '../components/LineChart';

import { QUERY_ALL_USERS } from '../utils/queries';

const Dashboard = () => {
  const { data } = useQuery(QUERY_ALL_USERS);
  let users = [];

  if (data) {
    users = data.users;
  }

  const newData = [];

  for (let i = 0; i < users.length; i++) {
    const orderData = users[i].orders;
    newData.push(orderData);
  }
  console.log(newData);

  return (
    <div className="container">
      Hi, I'm the dashboard.
      <LineChart newData={newData} />
    </div>
  );
};
export default Dashboard;
