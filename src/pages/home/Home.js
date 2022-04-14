import React, { useEffect } from "react";
import "./Home.scss";
import Cards from "../../elements/cards/Cards";
import Hero from "../../parts/hero/Hero";
import WhyUs from "../../parts/why-us/WhyUs";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import Tick from "../../assets/images/tick.svg";
import Profile from "../../assets/images/profile.png";
import Slider from "../../elements/slider/Slider";
import Button from "../../elements/button/Button";
import Contact from "../../parts/contact/Contact";
import Footer from "../../parts/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const news = [
    {
      title: "Pemberhentian Air Mengalir Sementara Pada Daerah ...",
      image: card1,
      category: "Pengumuman",
    },
    {
      title: "PDAM Purwa Tirta Dharma memberikan bantuan ...",
      image: card2,
      category: "Berita Terbaru",
    },
    {
      title: "Tarif per-Bulan Naik Menjadi 10% Dari Tarif Normal ...",
      image: card3,
      category: "Pengumuman",
    },
  ];

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="home-page">
      <Hero></Hero>
      <WhyUs></WhyUs>

      <section className="news pt-4 mt-5">
        <div className="text-center px-4" data-aos="fade-up">
          <h4>Ikuti Pengumuman Terbaru Kami</h4>
          <p>Jangan sampai ketinggalan pengumuman hingga berita terbaru kami</p>
        </div>
        <div className="container">
          <div className="row">
            {news.map((item, i) => (
              <div className="col-md-4 p-4" key={i}>
                <Cards
                  data={item}
                  delayInMs={i * 100}
                  isProduct
                  className="px-4 pt-4 pb-3 card-product"
                ></Cards>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="slider pt-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="slider-bg">
                <Slider className="slider-home"></Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="profile pt-4 mt-5" data-aos="zoom-in">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="profile-title mb-4">
              <img src={Tick} alt="tick" />
              <h3>
                Mari Kenali Kami <br /> dan Perjalanan Kami{" "}
              </h3>
            </div>
            <div className="row justify-content-around">
              <div className="col-md-5">
                <Cards isText className="p-4 card-text h-100">
                  <p className="m-0">
                    “ Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore “.
                  </p>
                </Cards>
              </div>
              <div className="col-md-5">
                <div className="profile-img">
                  <img src={Profile} alt="" />
                </div>
                <div className="profile-detail">
                  <h6>Ir.H.Ady Setiawan.SH</h6>
                  <p>President of PDAM Purwa Tirta Dharma</p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 d-flex">
                <Button isBordered isLong className="m-auto mt-5">
                  Lebih Lengkap
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact className="pt-5"></Contact>
      <Footer></Footer>
    </div>
  );
}
