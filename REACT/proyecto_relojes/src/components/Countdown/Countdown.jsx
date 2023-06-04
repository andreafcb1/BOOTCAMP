import "./Countdown.css"

import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [time, setTime] = useState(""); //useState define el tiempo dentro de const time
  useEffect(() => { //useEffect recoge el valor del tiempo dentro de countDownDate
    let countDownDate = new Date("June 30, 2023 13:21:00").getTime();
    let x = setInterval(() => { //intervalo que va a hacer la resta entre la fecha meta y la actual
      let now = new Date().getTime();
      let distance = countDownDate - now; //devuelve el tiempo que falta cada segundo para la cuenta atrás

      //desglose de tiempo en diferentes variables
      //Math.floor redondea un número dado hacia el número entero anterior y se multiplica por 1000 para que sean segundos y no milisegundos
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime("COUNTDOWN FINISHED"); //mensaje que saldrá cuando la cuenta atrás finalice
      }
    }, 1000);
  }, []);
  return (
    <div className="countdown">
      <h2>{time}</h2>
    </div>
  );
};

export default Countdown;