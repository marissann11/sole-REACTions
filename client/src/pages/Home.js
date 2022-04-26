import React from "react";
import Jumbotron from "../components/Jumbotron";
import ShoeList from "../components/ShoeList";

const Home = () => {
  return (
    <div className="container">
      Hi, I'm the homepage.
      <Jumbotron />
      <ShoeList />
    </div>
  );
};

export default Home;
