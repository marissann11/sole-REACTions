import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_ADMINSALES } from '../utils/queries';
import DoughnutChart from '../components/DoughnutChart';
import LineChart from '../components/LineChart';

const SalesDash = () => {
  const { data } = useQuery(QUERY_ALL_ADMINSALES);

  let adminSales;
  let numOrders;
  let numShoes;
  let sneakies = [];
  let priceData = [];
  let brandData = [];
  let salesToDate;

  if (data) {
    adminSales = data.adminSales;
    numOrders = adminSales.length;
  }
  if (adminSales) {
    adminSales.map((sale) => {
      sale.shoes.map((shoe) => {
        sneakies.push({ shoe });
        priceData.push(shoe.price);
        brandData.push(shoe.brand);
      });
    });
    numShoes = sneakies.length;
    salesToDate = priceData.reduce((a, b) => a + b);
  }

  return (
    <div>
      AdminDash
      <DoughnutChart brandData={brandData} />
      {adminSales ? (
        <>
          <h2>Sales To Date: {salesToDate}</h2>
          <h3>Active Orders: {numOrders}</h3>
          <h3>Shoes sold: {numShoes}</h3>
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
      <LineChart adminSales={adminSales} />
    </div>
  );
};

export default SalesDash;
