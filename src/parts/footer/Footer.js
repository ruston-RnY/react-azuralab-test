import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-pdam-footer.png";
import Fb from "../../assets/images/fb.png";
import Ig from "../../assets/images/ig.svg";
import Tw from "../../assets/images/tw.png";
import Yt from "../../assets/images/yt.png";
import Loc from "../../assets/images/ic-location.png";
import Wa from "../../assets/images/ic-wa.png";
import Mail from "../../assets/images/ic-mail.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <img src={Logo} alt="logo pdam" />
            <div className="pdam-visi">
              <p>
                PDAM Purwa Tirta Dharma Menyediakan air bersih yang sehat yang
                mampu memberikan kontribusi PAD pada kabupaten Grobogan
              </p>
            </div>
            <div className="sosmed">
              <Link to="#facebook">
                <img src={Fb} alt="fb" className="fb" />
              </Link>
              <Link to="#twitter">
                <img src={Tw} alt="twitter" />
              </Link>
              <Link to="#instagram">
                <img src={Ig} alt="ig" className="ig" />
              </Link>
              <Link to="#youtube">
                <img src={Yt} alt="yt" />
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="navigation">
              <h5>NAVIGASI</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="active" activeclassname="active" to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link activeclassname="active" to="#tentang">
                    Tentang
                  </Link>
                </li>
                <li>
                  <Link activeclassname="active" to="#blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link activeclassname="active" to="#karir">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link activeclassname="active" to="#galeri">
                    Galeri
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="address">
              <h5>KONTAK</h5>
              <ul className="list-unstyled">
                <li>
                  <div className="addres-wrap">
                    <div>
                      <img src={Loc} alt="location" />
                    </div>
                    <p>
                      Jl. Gajah Mada No.3, Jetis Selatan, Purwodadi, Kec.
                      Purwodadi, Kabupaten Grobogan, Jawa Tengah 58111
                    </p>
                  </div>
                </li>
                <li>
                  <div className="addres-wrap">
                    <div>
                      <img src={Wa} alt="whatsapp" />
                    </div>
                    <p>+62 896 666 666</p>
                  </div>
                </li>
                <li>
                  <div className="addres-wrap">
                    <div>
                      <img src={Mail} alt="mail" />
                    </div>
                    <p>hallo@purwatirtadharma.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
