import React from "react";
import propTypes from "prop-types";
import "./Button.scss";

export default function Button(props) {
  const className = ["btn-cs", props.className];

  if (props.isLarge) className.push("btn-action-lg");
  if (props.isLargeNoIcon) className.push("btn-lg-noIcon");
  if (props.isLargeColored) className.push("btn-lg-colored");
  if (props.isLong) className.push("btn-long");
  if (props.isBorderedSm) className.push("btn-bordered-sm");
  if (props.isRounded) className.push("rounded-lg");
  if (props.isBordered) className.push("isBordered");
  if (props.isBadge === "Pengumuman") className.push("isBadgeRed");
  if (props.isBadge === "Berita Terbaru") className.push("isBadgeGold");

  return (
    <button className={className.join(" ")} style={props.style}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: propTypes.string,
  isBordered: propTypes.bool,
  isRounded: propTypes.bool,
  isLarge: propTypes.bool,
  isLargeNoIcon: propTypes.bool,
  isLargeColored: propTypes.bool,
  isBorderedSm: propTypes.bool,
  isLong: propTypes.bool,
  isBadge: propTypes.string,
};
