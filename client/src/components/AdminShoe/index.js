import React from "react";

var myGallery = window.cloudinary.galleryWidget({
    container: "#adminShoe",
    cloudName: "gw-bootcamp",
    mediaAssets: [{ tag: "test1" }],
    imageBreakpoint: 200,
});

const AdminShoe = () => {
    return <div>View the shoes you have uploaded in the gallery below
    <a href="https://cloudinary.com/documentation/product_gallery"></a>
    <div id="adminShoe"></div>
    </div>
}

myGallery.render();




export default AdminShoe;