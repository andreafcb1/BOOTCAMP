import "./DigitalClock.css"

import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [clockState, setClockState] = useState(); //useState setea la hora a través de la función
    //clockState: valor inicial de la variable y setClockState: función que modifica la variable

    useEffect(() => { //useEffect recoge la hora local en una función y la ejecuta al cargar la página y al pasar los segundos
      setInterval(() => {
        const date = new Date(); 
        setClockState(date.toLocaleTimeString()); //método para recoger la hora local
      }, 1000);
    }, []);
  return (
    <div className="digital-clock">
      <h2>{clockState}</h2>
    </div>
  )
}

export default DigitalClock