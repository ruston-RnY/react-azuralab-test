import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";
import Logo from "../../assets/images/logo-pdam.svg";
import Button from "../../elements/button/Button";
import IcSearch from "../../assets/images/ic-search.svg";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [bgColor, setBgColor] = useState(false);
  const changeBgColor = () => {
    if (window.scrollY >= 90) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };
  window.addEventListener("scroll", changeBgColor);

  return (
    <nav
      className={
        click || bgColor
          ? "navbar navbar-expand-lg navbar-dark navbar-custom bgScroll"
          : "navbar navbar-expand-lg navbar-dark navbar-custom"
      }
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo pdam" />
        </Link>
        <button className="navbar-toggler" onClick={handleClick}>
          {click ? <FaTimes size={21} /> : <FaBars size={20} />}
        </button>
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="navbar-link"
                activeclassname="active"
                to={"/"}
                onClick={closeMenu}
              >
                Beranda
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                className="navbar-link"
                activeclassname="active"
                to="#tentang"
                onClick={closeMenu}
              >
                Tentang
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="navbar-link"
                activeclassname="active"
                to="#galeri"
                onClick={closeMenu}
              >
                Galeri
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="navbar-link"
                activeclassname="active"
                to="#blog"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className="actions">
            <div className="search rounded-lg">
              <span>Cari</span>
              <img src={IcSearch} alt="" />
            </div>
            <Button isRounded className="btn-white">
              Customer Service
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
