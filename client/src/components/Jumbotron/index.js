import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";

const Jumbotron = () => {
  return (
    <Carousel fade variant="dark" className="carousel" controls={false}>
      <Carousel.Item
        interval={9000}
        className="carouselItem carouselItem1"
      ></Carousel.Item>
      <Carousel.Item interval={9000} className="carouselItem carouselItem2">
        <Carousel.Caption>
          <Button
            as={Link}
            to="/subscription"
            inverted
            color="grey"
            size="medium"
            className="subBtn"
          >
            <span className="heroBtn">Find Out How!</span>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000} className="carouselItem carouselItem3">
        <Carousel.Caption>
          <Button
            as={Link}
            to="/featured"
            inverted
            size="medium"
            className="featBtn"
          >
            <span className="heroBtn">Shop Featured Shoes</span>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Jumbotron;
