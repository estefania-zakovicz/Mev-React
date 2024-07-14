import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import location_icon from "../../assets/location-icon.png";
import icons_1 from "../../assets/whatsapp.png";
import icons_2 from "../../assets/instagram.png";
import icons_3 from "../../assets/facebook.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b7781644-5a5e-463c-87ca-2a5aadc60f0b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Enviado correctamente!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact header">
      <div className="contact-col">
        <h3>
          Contactate con Nosotros <img src={msg_icon} alt="" />
        </h3>
        <p>
          Para solicitar tu prueba gratuita del Sistema Mev, escribinos por el
          medio que desees. Nos comunicaremos a la brevedad!
        </p>
        <ul>
          <li>
            <img src={phone_icon} alt="" />
            +54 9 154390081
          </li>
          <li>
            <img src={mail_icon} alt="" />
            siacomsoft@gmail.com
          </li>
          <li>
            <img src={location_icon} alt="" /> Posadas - Misiones - Argentina
          </li>
        </ul>
        <div className="social-media">
          <img src={icons_1} alt="" />
          <img src={icons_2} alt="" />
          <img src={icons_3} alt="" />
        </div>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Ingrese su nombre"
            required
          />
          <label>Número de contacto</label>
          <input
            type="tel"
            name="phone"
            placeholder="Ingrese su número de teléfono"
            required
          />
          <label>Escriba aquí su mensaje</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Ingrese aquí su mensaje"
            required
          ></textarea>
          <button type="submit" className="btn">
            Enviar
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
