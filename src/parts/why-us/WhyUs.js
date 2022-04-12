import React from "react";
import "./WhyUs.scss";
import IcPro from "../../assets/images/ic-profesional.png";
import Ic24 from "../../assets/images/ic-24.png";
import IcSupport from "../../assets/images/ic-support.svg";

export default function WhyUs() {
  return (
    <section className="section-whyUs">
      <div className="row">
        <div className="col-md-4 p-0">
          <div className="whyUs-text">
            <h4>Kenapa Memilih Kami?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
          </div>
        </div>
        <div className="col-md-8 p-0">
          <div className="card-support">
            <div className="row m-0 h-100">
              <div className="col-md-4 p-0">
                <div className="card-1 h-100">
                  <div className="card-content">
                    <img src={IcPro} alt="profesional" />
                    <p>Profesional</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-0">
                <div className="card-2 h-100">
                  <div className="card-content">
                    <img src={Ic24} alt="24h" className="ic-24" />
                    <p>24H Non-Stop</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-0">
                <div className="card-3 h-100">
                  <div className="card-content">
                    <img src={IcSupport} alt="support" />
                    <p>Full Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
