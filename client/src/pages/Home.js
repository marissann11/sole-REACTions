import React from "react";
import Jumbotron from "../components/Jumbotron";
import FeaturedPrev from "../components/Previews/featured";
import AllPrev from "../components/Previews/allShoes";
import NikePrev from "../components/Previews/nike";
import JordanPrev from "../components/Previews/jordan";

const Home = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <Jumbotron />
      <FeaturedPrev />
      <AllPrev />
      <NikePrev />
      <JordanPrev />
    </div>
  );
};

export default Home;
