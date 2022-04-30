import React, { Component } from "react";

const AdminShoe = () => {
  return (
    <div>
      View the shoes you have uploaded in the gallery below
    </div>
  );
};

var myGallery = window.cloudinary.galleryWidget({
  container: "#adminShoe",
  cloudName: "gw-bootcamp",
  mediaAssets: [{ tag: "test1" }],
});

myGallery.render();

export default AdminShoe;
