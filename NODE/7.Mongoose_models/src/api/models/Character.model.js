const mongoose = require("mongoose")

const Schema = mongoose.Schema

//Esqueleto del modelo Character
// 1) se define el tipo de dato con TYPE
// 2) se requiere el dato para crear el modelo REQUIRED
const CharacterSchema = new Schema(
    {
        name: {type: String, required:false, unique: true},
        gender: {
            type:String, 
            enum:["hombre", "mujer", "fluido"], 
            required:false,
        },
        image: { type: String },
    },
    {
        timestamps:true,
    }
);

//se crea el MODELO que está formado por el esquema de datos
const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;