import React from 'react';
import SalesDash from '../components/SalesDash';
import AdminManualList from '../components/AdminManualList';
import AdminQuickSelect from '../components/AdminQuickSelect';
import Dashboard from './Dashboard';

const Admin = () => {
  return (
    <div>
      <SalesDash />
      <AdminManualList /> <Dashboard />
      <AdminQuickSelect />
    </div>
  );
};

export default Admin;
