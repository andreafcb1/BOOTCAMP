const mongoose = require("mongoose")

const Schema = mongoose.schema

//Esqueleto del modelo Character
// 1) se define el tipo de dato con TYPE
// 2) se requiere el dato para crear el modelo REQUIRED
const CharacterSchema = new Schema(
    {
        name: {type: String, required:true },
        gender: {
            type:String, 
            enum:["hombre", "mujer", "fluido"], 
            required:true,
        },
        age: { type: Number, required: false },
    },
    {
        timestamps:true,
    }
);

//se crea el MODELO que está formado por el esquema de datos
const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;