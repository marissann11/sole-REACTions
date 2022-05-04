import React from 'react';
import SalesDash from '../components/SalesDash';
import AdminManualList from '../components/AdminManualList';
import AdminQuickSelect from '../components/AdminQuickSelect';
import Dashboard from './Dashboard';

const Admin = () => {
  return (
    <div className="container-fluid">
      <div
        className="m-5 p-5 text-center"
        style={{
          fontFamily: 'Contrail One, cursive',
          fontSize: '6vh',
          backgroundColor: 'lightgrey',
        }}
      >
        Administrator Dashboard
      </div>
      <div className="row justify-content-around">
        <SalesDash />
        <div className="col-4 ms-5 mt-5">
          <AdminManualList />
        </div>
        <div className="col-7 mt-5">
          <Dashboard />
        </div>
        <div className="col-12 mt-5">
          <AdminQuickSelect />
        </div>
      </div>
    </div>
  );
};

export default Admin;
