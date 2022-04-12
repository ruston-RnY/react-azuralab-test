import React from "react";
import "./Cards.scss";
import propTypes from "prop-types";
import Button from "../button/Button";

function Cards(props) {
  const className = ["card", props.className];

  if (props.isProduct) {
    return (
      <section className="card-section">
        <div className="d-flex">
          <Button isBadge={props.data.category} className="mx-auto mb-3">
            {props.data.category}
          </Button>
        </div>
        <div className={className.join(" ")}>
          <img src={props.data.image} className="card-img-top" alt="..." />
          <div className="card-body px-0 pb-0">
            <h5 className="card-title">{props.data.title}</h5>
            <Button isBordered>Lebih Lanjut</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="card">
      {/* <img src={tes} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div> */}
      tes
    </div>
  );
}

Cards.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  isProduct: propTypes.bool,
  isText: propTypes.bool,
};

export default Cards;
