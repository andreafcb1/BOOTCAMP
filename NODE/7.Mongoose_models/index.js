//crear servidor web
const { connect } = require("./src/utils/db");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//contectar con la DB
connect();
const app = express();
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Listening on PORT http://localhost:${PORT}`);
});