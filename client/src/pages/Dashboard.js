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

  console.log(data);

  const newData = [];

  for (let i = 0; i < users.length; i++) {
    const orderData = users[i].orders;
    newData.push(orderData);
  }

  const newerData = [];

  for (let i = 0; i < newData.length; i++) {
    for (var j = 0; j < newData[i].length; j++) {
      newerData.push(newData[i][j]);
    }
  }

  const shoeData = [];

  for (let i = 0; i < newerData.length; i++) {
    let shoeInfo = newerData[i].shoes;
    shoeData.push(shoeInfo);
  }

  const newerShoeData = [];

  for (let i = 0; i < shoeData.length; i++) {
    for (var j = 0; j < shoeData[i].length; j++) {
      newerShoeData.push(shoeData[i][j]);
    }
  }

  newerShoeData.forEach((shoe) => {
    for (let key in shoe) {
      console.log(`${key}: ${shoe[key]}`);
    }
  });

  return (
    <div className="container">
      Hi, I'm the dashboard.
      <LineChart newData={newData} />
    </div>
  );
};
export default Dashboard;
