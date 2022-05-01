import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_ADMINSALES } from '../utils/queries';

const AdminDash = () => {
  const { loading, data } = useQuery(QUERY_ALL_ADMINSALES);

  let adminSales;

  if (data) {
    adminSales = data.adminSales;
  }

  return (
    <div>
      AdminDash
      {adminSales ? (
        <>
          {adminSales.map((sale) =>
            sale.shoes.map((shoe) => (
              <div key={shoe._id}>
                <div>{shoe.name}</div>
                <div>{shoe.brand}</div>
                <div>{shoe.price}</div>
              </div>
            ))
          )}
        </>
      ) : null}
    </div>
  );
};

export default AdminDash;
