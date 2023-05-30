const { upload } = require("../../middleware/files.middleware");
const { create, getAll, getById, getByName, updateCharacter } = require("../controllers/Character.controllers");
const CharacterRoutes = require("express").Router();

CharacterRoutes.post("/", upload.single("image"), create);
CharacterRoutes.get("/", getAll);
CharacterRoutes.get("/:id", getById);
CharacterRoutes.get("/name/:name", getByName); // se mete otro name como paso intermedio porque si no coge el id de arriba
CharacterRoutes.patch("/:id", upload.single("image"), updateCharacter); // se modifica el objeto por el id

module.exports = CharacterRoutes;

