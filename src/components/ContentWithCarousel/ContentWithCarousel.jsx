import React, { Component } from "react";
import { Carousel } from "antd";
import "./index.css";

const ContentWithCarousel = ({ carouselArr }) => {
  return (
    <Carousel effect="fade">
      {carouselArr.map((img, index) => (
        <img key={index} src={img} />
      ))}
    </Carousel>
  );
};

export default ContentWithCarousel;
