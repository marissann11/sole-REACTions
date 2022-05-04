import React, { Component } from 'react';

const AdminShoe = () => {
  const myGallery = window.cloudinary.galleryWidget({
    container: '#adminShoe',
    cloudName: 'gw-bootcamp',
    mediaAssets: [{ tag: 'test1' }],
  });

  return (
    <div>
      <div>View the shoes you have uploaded in the gallery below</div>
      <div style={{ width: '50%' }} id="adminShoe"></div>
      <div {...myGallery.render()}></div>
    </div>
  );
};

export default AdminShoe;
