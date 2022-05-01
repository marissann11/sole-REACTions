import React from "react";
import ShoeList from "../components/ShoeList";

const Shoes = () => {
  return (
    <div className="container-fluid">
      <div
        className="m-5 p-5 text-center"
        style={{
          fontFamily: "Contrail One, cursive",
          fontSize: "6vh",
          backgroundColor: "lightgrey",
        }}
      >
        All Shoes
      </div>
      <ShoeList />
    </div>
  );
};

export default Shoes;
