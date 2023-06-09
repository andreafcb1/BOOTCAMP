//crear servidor web
const { configCloudinary } = require("./src/middleware/files.middleware");
const { connect } = require("./src/utils/db");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();


//contectar con la DB
connect();
const app = express();
configCloudinary();
const PORT = process.env.PORT

// configurar las CORS (límites de acceso a nuestra API)

const cors = require('cors');
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

// limitaciones en la recepcion y envio de datos en 5mb
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

//ROUTES



// Si no se mete ninguna routa
app.use("*", (req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    return next(error);
  });
  
  // ERROR 500 del server
  app.use((error, req, res) => {
    return res
      .status(error.status || 500)
      .json(error.message || "Unexpected error");
  });

// Escuchar la DB en el PORT
app.disable("x-powered-by");
app.listen(PORT, () => {
    console.log(`Listening on PORT http://localhost:${PORT}`);
});