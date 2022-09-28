import React from "react";
import style from "./Estilos.module.css";

export default function Card(props) {
  // acá va tu código

  return (
    <div className={style.carddivs}>
      <button className={style.buttoncards} onClick={props.onClose}>
        X
      </button>
      <h2 className={style.prueba2}>{props.name}</h2>
      <h3 className={style.prueba3}>Min</h3>
      <h3 className={style.prueba3}>Max</h3>
      <p></p>
      <h4 className={style.prueba4}>{props.min}°</h4>
      <h4 className={style.prueba4}>{props.max}°</h4>
      <p></p>
      <img
        className={style.prueba5}
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="ImgdeClima"
      />
    </div>
  );
}
