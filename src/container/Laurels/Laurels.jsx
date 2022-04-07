import { data, images } from "../../constants";
import React from "react";

import "./Laurels.css";

const Laurels = () => (
  <section className=" app__bg laurels__section section__padding  ">
    <div className="laurels__title_subTitle">
      <p className="subTitle">Awards & recognition</p>
      <p className=" title">Our Laurels</p>
    </div>

    <div className="laurels__main_text_img_cotener ">
      <div className="laurels__main_text_div ">
        <div className="laurels__coul_one">
          {data.awards1.map((award, index) => (
            <div key={award.title + index} className="award__div">
              <img
                style={{ marginBlock: "1rem" }}
                width="80px"
                src={award.imgUrl}
              ></img>
              <p
                style={{ fontSize: "23px", marginBottom: "1rem" }}
                className=" title "
              >
                {award.title}
              </p>
              <p className="award__subTitle">{award.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="laurels__coul_two">
          {data.awards2.map((award, index) => (
            <div key={award.title + index} className="award__div">
              <img
                style={{ marginBlock: "1rem" }}
                width="80px"
                src={award.imgUrl}
              ></img>
              <p
                style={{ fontSize: "23px", marginBottom: "1rem" }}
                className=" title "
              >
                {award.title}
              </p>
              <p className="award__subTitle">{award.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="laurels__wrapper_img">
        <img src={images.laurels}></img>
      </div>
    </div>
  </section>
);

export default Laurels;
