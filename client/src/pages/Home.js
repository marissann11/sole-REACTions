import React from "react";
import Jumbotron from "../components/Jumbotron";
import ShoeList from "../components/ShoeList";

const Home = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <Jumbotron />
      <ShoeList />
    </div>
  );
};

export default Home;
