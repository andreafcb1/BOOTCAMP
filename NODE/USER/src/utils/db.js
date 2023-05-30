// requerimos dotenv para no compartir públicamente la URL
const dotenv = require("dotenv");
dotenv.config();

//requerimos la librería mongoose para controlar MongoDB
const mongoose = require("mongoose");

//requerimos MONGO_URI del .env
const MONGO_URI = process.env.MONGO_URI

//hacemos la función ASÍNCRONA (porque estamos gestionando con internet), se exporta y se importa en index para conectar con Mongo + hacemos try/catch para gestionar los errores
const connect = async () => {
    try {
        const db = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true, //parsear la URL de Mongo
            useUnifiedTopology: true, //convertir los caracteres especiales
        });
        //Destructuring para traer el HOST y el NAME de la DB
        const { name, host}= db.connection;
        console.log(`Conectada la DB 👍🏻 en el host: ${host} con el nombre: ${name}`);
    } catch (error) {
        console.log("No se ha conectado la DB 👎🏻");
    }
};

module.exports = {connect};