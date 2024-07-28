import React from "react";
import "./Title.css";
import { Fade } from "react-awesome-reveal";

const Title = ({ title }) => {
  return (
    <Fade direction="bottom">
      <div className="title">
        <h2>{title}</h2>
      </div>
    </Fade>
  );
};

export default Title;
