import React from "react";
import "./Sistem.css";
import sistema_img from "../../assets/sistema.jpg";
import play_icon from "../../assets/play-icon.png";

const Sistem = ({ setPlayState }) => {
  return (
    <div className="sistem header overflow-hidden rounded-lg bg-white text-xl shadow-lg shadow-cyan-500/50">
      <div className="sistem-left">
        <img src={sistema_img} alt="" className="sistema-img"/>
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true)
          }}
        />
      </div>
      <div className="sistem-right">
        <h3>Haz una prueba gratuita</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus officia eos ad laborum dicta ratione, dolores soluta
          est, ipsam harum maiores obcaecati natus laudantium. Vitae, unde. Quas
          dolorem nesciunt hic.
        </p>
      </div>
    </div>
  );
};

export default Sistem;
