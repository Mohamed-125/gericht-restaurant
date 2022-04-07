import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <>
    <section className="app__bg section__padding">
      <div className="aboutus__contener">
        <div className="aboutus__img-contener">
          <img className="aboutus__g-img" src={images.G}></img>
          <img className="aboutus__knife-img" src={images.knife} />
        </div>
        <div className="aboutus__text-wraper">
          <div className="aboutus__aboutus-text">
            <div className="aboutus__aboutus-wraper">
              <h5 className="about__h5">About Us</h5>
              <img
                style={{ transform: "rotate(-180deg)" }}
                src={images.spoon}
              ></img>
              <p className="about__desc">
                Sit tellus lobortis sed senectus vivamus molestie. Condimentum
                volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
                aliquam amet tellus{" "}
              </p>{" "}
              <button>Know More</button>
            </div>
            <div className="aboutus__our-history-wraper">
              <h5 className="about__h5">Our History</h5>
              <img src={images.spoon}></img>
              <p className="about__desc">
                Sit tellus lobortis sed senectus vivamus molestie. Condimentum
                volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
                aliquam amet tellus{" "}
              </p>
              <button>Know More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutUs;
