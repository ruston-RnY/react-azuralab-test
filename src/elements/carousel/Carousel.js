import React from "react";
import "./Carousel.scss";
import propTypes from "prop-types";

const Carousel = (props) => {
  const className = [props.className];
  return <div>Carousel</div>;
};

Carousel.propTypes = {
  className: propTypes.string,
};

export default Carousel;
