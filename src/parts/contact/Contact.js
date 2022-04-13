import React from 'react'
import './Contact.scss'
import Button from '../../elements/button/Button'
import ContactImg from '../../assets/images/contact.png';
import propTypes from "prop-types";

export default function Contact(props) {
  const className = ["contact",props.className]
  return (
    <section className={className.join(" ")}>
      <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="contact-wrap d-flex justify-content-between">
              <div className="contact-content">
                <h3>layanan berkualitas tinggi <br /> untuk masyarakat indonesia</h3>
                <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <Button isLargeColored className="mr-3">
                  Kontak Kami
                </Button>
                <Button isLargeNoIcon>
                  Konsultasi
                </Button>
              </div>
              <div className="contact-img">
                <img src={ContactImg} alt="da" />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

Contact.propTypes = {
  className: propTypes.string
}
