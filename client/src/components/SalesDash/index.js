import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_ADMINSALES } from '../../utils/queries';
import DoughnutChart from '../DoughnutChart';

const SalesDash = () => {
  const { data } = useQuery(QUERY_ALL_ADMINSALES);

  // refactor necessary at some point but just grabbing all needed data
  // admin auth requirement to access sales turned off for production for the time being
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
    <div className="border col-12 text-center row justify-content-around align-items-center">
      <div className="col-12 p-2">
        <h1 style={{ fontFamily: 'Contrail One, cursive' }}>SalesDash</h1>
      </div>
      <div className="col-5 p-3">
        <DoughnutChart brandData={brandData} />
      </div>
      {adminSales ? (
        <div className="col-5">
          <h2 style={{ fontFamily: 'Comfortaa, cursive' }}>
            <strong>Sales To Date:</strong> ${salesToDate}
          </h2>
          <h3 style={{ fontFamily: 'Comfortaa, cursive' }}>
            <strong>Active Orders:</strong> {numOrders}
          </h3>
          <h3 style={{ fontFamily: 'Comfortaa, cursive' }}>
            <strong>Shoes Sold:</strong> {numShoes}
          </h3>
        </div>
      ) : null}
    </div>
  );
};

export default SalesDash;
