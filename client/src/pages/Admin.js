import React from 'react';
// import SalesDash from '../components/SalesDash';
import AdminManualList from '../components/AdminManualList';
import AdminQuickSelect from '../components/AdminQuickSelect';

const Admin = () => {
  return (
    <div>
      <AdminManualList /> <AdminQuickSelect />
    </div>
  );
};

export default Admin;
