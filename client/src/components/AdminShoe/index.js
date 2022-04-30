import React, { Component } from "react";

var myGallery = window.cloudinary.galleryWidget({
  container: "#adminShoe",
  cloudName: "gw-bootcamp",
  mediaAssets: [{ tag: "test1" }],
//   imageBreakpoint: 200,
});

const AdminShoe = () => {
  return (
    <div>
      View the shoes you have uploaded in the gallery below
    </div>
  );
};

myGallery.render();

export default AdminShoe;
