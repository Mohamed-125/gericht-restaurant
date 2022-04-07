import React from "react";
import { images } from "../../constants";
import "./subHeading.css";
const SubHeading = ({ title, subTitle }) => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          maxWidth: "1300px",
          marginInline: "auto",
          marginBlock: "2rem",
        }}
      >
        <p className="subTitleStyless">{subTitle}</p>
        <img src={images.spoon} />
        <p className="titleStyless">{title}</p>
      </div>
    </>
  );
};

export default SubHeading;
