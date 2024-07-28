import React from "react";
import "./Title.css";
import { Fade } from "react-awesome-reveal";

const Title = ({ title }) => {
  return (
    <Fade direction="bottom slow">
      <div className="title text-5xl text-blue-900 dark:text-white">
        <h2>{title}</h2>
      </div>
    </Fade>
  );
};

export default Title;
