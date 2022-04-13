import React from "react";
import "./Home.scss";
import Cards from "../../elements/cards/Cards";
import Hero from "../../parts/hero/Hero";
import WhyUs from "../../parts/why-us/WhyUs";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import Tick from "../../assets/images/tick.svg";
import Profile from "../../assets/images/profile.png";

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

  return (
    <div className="home-page">
      <Hero></Hero>
      <WhyUs></WhyUs>
      <section className="news pt-3 mt-5">
        <div className="text-center px-4">
          <h4>Ikuti Pengumuman Terbaru Kami</h4>
          <p>Jangan sampai ketinggalan pengumuman hingga berita terbaru kami</p>
        </div>
        <div className="container">
          <div className="row">
            {news.map((item, i) => (
              <div className="col-md-4 p-4" key={i}>
                <Cards
                  data={item}
                  isProduct
                  className="px-4 pt-4 pb-3 card-product"
                ></Cards>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="profile pt-3 mt-5">
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
          </div>
        </div>
      </section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel
        minima nihil explicabo quas quisquam dignissimos cupiditate distinctio
        adipisci debitis at, inventore placeat blanditiis enim voluptatem nisi
        numquam consequatur. Omnis ad odit sequi, provident exercitationem
        beatae ratione totam unde obcaecati, amet magni repellendus aspernatur
        aut. Architecto voluptatibus harum fuga possimus magni cumque ratione
        animi debitis quasi iste corrupti esse eligendi doloremque vitae dolorem
        sit dignissimos labore nesciunt inventore, consectetur minima ad totam?
        Ipsum officia ex ab quos possimus, quaerat optio? Eius, saepe, quibusdam
        ducimus adipisci quae obcaecati fugiat doloremque natus laboriosam
        aliquid reprehenderit dicta? Similique ex incidunt aperiam id dolore.
      </p>
    </div>
  );
}
