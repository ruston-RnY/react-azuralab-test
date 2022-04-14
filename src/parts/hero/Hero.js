import Button from "../../elements/button/Button";
import React from "react";
import "./Hero.scss";
import Phone from "../../assets/images/phone.svg";
import Ig from "../../assets/images/ig.svg";
import Fb from "../../assets/images/fb.png";
import Tw from "../../assets/images/tw.png";
import Yt from "../../assets/images/yt.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero-bg">
      <div className="hero-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4" data-aos="zoom-in">
              <h1 className="hero-title">
                Menjadi Perusahaan <br /> Air Minum Modern
              </h1>
              <p className="hero-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <Button isLarge>
                <img src={Phone} alt="phone" className="ic-phone" /> Hubungi
                Kami
              </Button>
            </div>
            <div className="col-md-6">
              <div className="social" data-aos="zoom-in">
                <h6>Social Media</h6>
                <div className="icon-sosmed">
                  <Link to="#facebook">
                    <img src={Fb} alt="fb" className="fb" />
                  </Link>
                  <Link to="#instagram">
                    <img src={Ig} alt="ig" />
                  </Link>
                  <Link to="#twitter">
                    <img src={Tw} alt="twitter" />
                  </Link>
                  <Link to="#youtube">
                    <img src={Yt} alt="yt" className="yt" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
