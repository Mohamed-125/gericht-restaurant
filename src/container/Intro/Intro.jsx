import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const video = useRef();
  const [played, setPlayed] = useState(true);
  const stopOrPlay = () => {
    console.log(played);

    setPlayed(!played);
    if (played) {
      video.current.pause();
    }
    if (!played) {
      video.current.play();
    }
  };

  return (
    <section className="intro__video-section">
      {!played ? (
        <BsFillPlayFill
          size="3rem"
          className="intro__icon"
          onClick={stopOrPlay}
        />
      ) : (
        <BsPauseFill size="3rem" className="intro__icon" onClick={stopOrPlay} />
      )}
      <video
        loop
        className="intro__video"
        ref={video}
        src={meal}
        type="video/mp4"
        autoPlay
        muted
      />
    </section>
  );
};

export default Intro;
