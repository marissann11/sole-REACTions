import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_ADMINSALES } from '../utils/queries';

const AdminDash = () => {
  const { data } = useQuery(QUERY_ALL_ADMINSALES);

  let sales;

  if (data) {
    sales = data.shoes;
  }

  return (
    <div>
      AdminDash
      {sales ? (
        <>
          {sales.map((shoe) => (
            <div key={shoe._id}>
              <div>{shoe.name}</div>
              <div>{shoe.price}</div>
              <div>{shoe.brand}</div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default AdminDash;
