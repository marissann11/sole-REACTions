import React, { Component } from "react";
import { useQuery } from '@apollo/client';

import AdminShoe from "../components/AdminShoe";
// import LineChart from '../components/LineChart';
// import { QUERY_ORDERS } from '../utils/queries';

// useEffect(() => {
//   fetchSales = async () => {
//     const { res } = await fetch(queryOrders);
//   };
//   fetchSales();
// }, []);

// reducer function const getSales = () => {...reducer}
// total sales sent to chart.js

// const Dashboard = () => {
//   const { loading, data } = useQuery(QUERY_ORDERS);

//   console.log(loading, data);

class Dashboard extends Component {
  uploadWidget() {
   window.cloudinary.openUploadWidget(
      { cloud_name: "gw-bootcamp", upload_preset: "upload_shoes" },
      function (error, result) {
        console.log(result);
      }
    );
  }
  
  render() {
    return (
      <div>
        <div className="container">
          Hi, I'm the dashboard.
          <div className="upload">
            <button
              onClick={this.uploadWidget.bind(this)}
              className="upload-button"
            >
              Click here to Upload Shoe Image
            </button>
          </div>
          <AdminShoe />
          {/* <LineChart /> */}
        </div>
      </div>
    );
  }
};

export default Dashboard;
