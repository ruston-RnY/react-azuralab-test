import React from "react";
import propTypes from "prop-types";
import "./Button.scss";

export default function Button(props) {
  const className = ["btn-cs", props.className];

  if (props.isLarge) className.push("btn-action-lg");
  if (props.isSmall) className.push("btn-action-sm");
  if (props.isRounded) className.push("rounded-lg");

  return (
    <button className={className.join(" ")} style={props.style}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: propTypes.string,
  isOutline: propTypes.bool,
  isRounded: propTypes.bool,
  isLarge: propTypes.bool,
  isSmall: propTypes.bool,
};
