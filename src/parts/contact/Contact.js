import React from "react";
import "./Contact.scss";
import Button from "../../elements/button/Button";
import ContactImg from "../../assets/images/contact.png";
import propTypes from "prop-types";

export default function Contact(props) {
  const className = ["contact", props.className];
  return (
    <section className={className.join(" ")}>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-sm-8">
          <div className="contact-wrap justify-content-between">
            <div className="contact-content">
              <h3>
                layanan berkualitas tinggi <br /> untuk masyarakat indonesia
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              <Button isLargeColored className="mr-3 mb-3">
                Kontak Kami
              </Button>
              <Button isLargeNoIcon>Konsultasi</Button>
            </div>
            <div className="contact-img">
              <img src={ContactImg} alt="da" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  className: propTypes.string,
};
