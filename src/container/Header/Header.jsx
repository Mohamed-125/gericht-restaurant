import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => {
  return (
    <section className=" hero section__padding">
      <div className="hero__div">
        <div>
          <h5 className="hero__h5">Chase the new Flavour</h5>
          <img className="hero__spoon" src={images.spoon}></img>
          <h2 className="hero__h2">The key to Fine dining</h2>
          <p className="gallery__desc">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellusv
          </p>
          <button className="header__button">Explore Menu</button>
        </div>
      </div>
      <div className="app__wrapper_img">
        <img style={{ width: "78%" }} src={images.welcome}></img>
      </div>
    </section>
  );
};

export default Header;
