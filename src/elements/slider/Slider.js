import React from "react";
import "./Slider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import propTypes from "prop-types";
import second from "../../assets/images/logo-pdam-colored.png";

const Slider = (props) => {
  const className = ["slider", props.className];
  return (
    <div className={className.join(" ")}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        showArrows={false}
      >
        <div className="carousel-img">
          <img src={second} alt="e" />
        </div>
        <div className="carousel-img">
          <img src={second} alt="e" />
        </div>
      </Carousel>
    </div>
  );
};

Slider.propTypes = {
  className: propTypes.string,
};

export default Slider;
