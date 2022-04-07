import React from "react";
import { images } from "../../constants";
const FindUs = () => (
  <section>
    <section className=" hero section__padding">
      <div className="hero__div">
        <div>
          <h5 className="hero__h5">Contact </h5>
          <img className="hero__spoon" src={images.spoon}></img>
          <h2 className="hero__h2">Find Us</h2>
          <p className="gallery__desc">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellusv
          </p>
          <div style={{ marginTop: "1rem" }}>
            <p style={{ fontSize: "23px" }} className="title">
              Opening Hours
            </p>
            <p className="gallery__desc">Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="gallery__desc">Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
          <button className="custom__button"> Visit Us</button>
        </div>
      </div>
      <div className="app__wrapper_img">
        <img style={{ width: "100%" }} src={images.findus}></img>
      </div>
    </section>
  </section>
);

export default FindUs;
