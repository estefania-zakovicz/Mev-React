import React from "react";
import "./Benefits.css";
import bene_1 from "../../assets/bene_1.png";
import bene_2 from "../../assets/bene_2.png";
import bene_3 from "../../assets/bene_3.png";

const Benefits = () => {
  return (
    <div className="benefits_1 header">
      <div className="bene fondo">
        <img src={bene_1} alt="" />
        <div className="texto">
          <h3>Cómodo - Todo en un sólo paso</h3>
          <p>
            El cliente, en la comodidad y seguridad de su celular, puede
            ver el menú, elegir lo que quiera consumir y sus cantidades, y
            pagar. Su pedido llegará a su mesa sin más intervención. Como MEV
            integra los métodos de pago de Mercado Pago y MODO, puede optar con
            la seguridad de pagar con su propia cuenta vinculada; también puede
            optar por pagar en efectivo o tarjeta con la asistencia convencional
            de un mozo.
          </p>
        </div>
      </div>

      <div className="bene">
        <div className="texto">
          <h3>Fácil - Metodología sencilla</h3>
          <p>
            Un sistema sencillo de usar, con todas las características
            necesarias para una buena administración de tu Negocio gastronómico,
            Bar o Restaurante. Gracias al sistema inteligente de MEV, el
            esfuerzo y pasos a realizar se simplifica de una manera que hace que
            usarlo, se vuelva práctico y rápido para cualquier persona que
            gestione el sistema; ya sea la persona encargada del Local o los
            empleados. Todas las cargas, modificaciones del producto o gestiones
            generales se realizan con simpleza en un solo clic, tomando efecto
            de manera inmediata, a fin de garantizar su rápido aprendizaje y
            uso. MEV está hecho para todos.
          </p>
        </div>
        <img src={bene_2} alt="" />
      </div>
    
 
      <div className="bene">
        <img src={bene_3} alt="" />
        <div className="texto">
        <h3>Rápido - Menor tiempo, mayor satisfacción</h3>
        <p>
          “El tiempo es oro” y nada mejor que evitar la espera. MEV está hecho
          para que sea rápido: Cada vez que los clientes entran en un local, se
          sientan a la mesa, el sistema: evitará que tengan que esperar a ser
          atendidos; evitará que se realicen los pedidos al mozo; evitará que,
          al terminar de consumir lo pedido, deba pedir la cuenta, pagar y
          esperar el comprobante. MEV evitará que todo ese tiempo se reste al
          cliente y al negocio. Los clientes podrán hacer sus pedidos en menor
          tiempo y el negocio brindará un mejor servicio y mayor ganancia,  al
          contar con un aumento en el flujo de clientes.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
