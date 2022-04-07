// contener  new value
import React from "react";
import { useState, useEffect } from "react";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";
const Gallery = () => {
  console.log(window.innerWidth);
  const [counter, setCounter] = useState(0);
  const [operation, setOperation] = useState("");

  const imgs = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];
  useEffect(() => {
    if (window.innerWidth <= 500 && window.innerWidth > 360) {
      document.querySelector(".slider").style.transform = `translate(${
        -350 * counter
      }px)`;
    } else {
      document.querySelector(".slider").style.transform = `translate(${
        -305 * counter
      }px)`;
    }
  }, [counter]);
  const nextOrPrev = (e) => {
    switch (e.target.id) {
      case "prev":
        setOperation("prev");

        if (counter === 0) {
          setCounter(imgs.length - 1);
        } else {
          setCounter((pre) => pre - 1);
        }
        break;

      case "next":
        setOperation("next");
        if (counter === imgs.length - 1) {
          setCounter(0);
        } else {
          setCounter((pre) => pre + 1);
        }
        break;

      default:
        break;
    }
  };

  return (
    <>
      <section className="gallery__section section__padding">
        <div className="gallery__main_div_wraper">
          {/* GALLERY TEXT START  */}
          <div className="gallery__main_text_div">
            <p className="subTitle">Instagram</p>
            <img src={images.spoon} />
            <p className="title">Photo Gallery</p>
            <p className="gallery__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              mattis ipsum turpis elit elit scelerisque egestas mu.
            </p>
            <button className="custom__button">View More</button>
          </div>
          {/* GALLERY TEXT END   */}

          {/* IMAGE SLIDER START  */}

          <div className="gallery__main_slider_contener">
            <div className="gallery__icons_div">
              <BsArrowLeftShort
                id="prev"
                onClick={nextOrPrev}
                className="gallery__icon"
              />
              <BsArrowRightShort
                id="next"
                onClick={nextOrPrev}
                className="gallery__icon"
              />
            </div>
            <div className="slider">
              {imgs.map((img, index) => {
                return (
                  <div className="gallery__imgs_div">
                    <img className="gallery__img" key={index} src={img} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* IMAGE SLIDER END   */}
        </div>
      </section>
    </>
  );
};

export default Gallery;
