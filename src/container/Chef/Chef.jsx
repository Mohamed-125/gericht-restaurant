import React from "react";
import { images } from "../../constants";
import "../AboutUs/AboutUs.css";
import "./Chef.css";
const Chef = () => {
  return (
    <>
      <section className=" section__padding chef__main_section ">
        <div
          style={{
            zIndex: "10",
          }}
          className="chef__contener"
        >
          <div
            // className="app__wrapper_img-reverse"
            style={{
              // width: "60%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img className="chef__img" src={images.chef}></img>
          </div>
          <div className="chef__title" style={{ maxWidth: "500px" }}>
            <p className="titleStyles">What we believe in</p>
            <p className="subTitleStyles">Chef’s Word</p>
            <div className="chef__text">
              <div className="chef__first_line">
                <img className="chef__quote" src={images.quote}></img>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit .
              </div>
              <div className="chef__remaning_lines">
                auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
                sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
                molestie lectus eu. Congue iaculis integer curabitur semper sit
                nunc.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chef;
