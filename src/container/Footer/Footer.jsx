import React from "react";
import { images } from "../../constants";
import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => (
  <section className="  app__bg footer__section  ">
    <div className="footer__contener">
      <div className="footer__contactus">
        <p className="footer__title"> Contact Us </p>
        <p className="footer__text">
          9 W 53rd St, New York, NY 10019, USA <br />
          +1 212-344-1230 +1 212-555-1230
        </p>
      </div>
      <div className="footer__gericht">
        <p style={{ fontSize: "60px" }} className="title">
          Gerícht
        </p>
        <p className="footer__text">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img style={{ marginTop: "0.7rem" }} src={images.spoon} />
        <div className="footer__icons_div">
          <FiFacebook className="footer__icon" />
          <FiTwitter className="footer__icon" />
          <FiInstagram className="footer__icon" />
        </div>
      </div>
      <div className="footer__workinghours">
        <p className="footer__title"> Working Hours </p>
        <p className="footer__text">
          Monday-Friday: 08:00 am -12:00 am <br></br>
          Saturday-Sunday: 07:00am -11:00 pm
        </p>
      </div>
      <div className=" footer__text footer__copy-right">
        2021 Gerícht. All Rights reserved.
      </div>
    </div>
  </section>
);

export default Footer;
