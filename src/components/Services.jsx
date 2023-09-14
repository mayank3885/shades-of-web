import React from "react";
import Slider from "react-slick";
import data from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Services() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="our-services">
      <h2>OUR SERVICES</h2>
      <div className="w-full max-w-screen-lg mx-auto">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div>
                <img src={item.image} alt="location" />
                <span className="location-name">{item.title}</span>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Services;
