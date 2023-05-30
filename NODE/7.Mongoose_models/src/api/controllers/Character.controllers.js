const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Character = require("../models/Character.model");

//! -------------------------------POST ---------------------------------

const create = async (req, res, next) => {
    try {
        await Character.syncIndexes(); // propiedad para actualizar los INDEXES de la DB automáticamente
        const newCharacter = new Character(req.body); //crear nuevo modelo con datos de la request body
        newCharacter.image = req.file.path;
        const saveCharacter = await newCharacter.save();  // se guarda el nuevo modelo en la DB
        // Evaluación de que se haga bien
        if(saveCharacter){
            return res.status(200).json(saveCharacter);
        } else {
            return res.status(404).json("No se ha podido subir el Character");
        }
    } catch (error) {
        deleteImgCloudinary(req.file.path); //para no duplicar fotos en cloudinary (al ser name unique, no duplica)
        return next(error);
    }
};

//! ------------------------------GETALL --------------------------------

const getAll = async (req, res, next) => {
    try {
      const allCharacter = await Character.find();
      if (allCharacter) {
        return res.status(200).json(allCharacter);
      } else {
        return res.status(404).json("Not found all character");
      }
    } catch (error) {
      return next(error);
    }
  };

  //! ------------------------------GETBYID -------------------------------

const getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const characterById = await Character.findById(id);
      if (characterById) {
        return res.status(200).json(characterById);
      } else {
        return res.status(404).json("Not found Character by ID");
      }
    } catch (error) {
      return next(error);
    }
  };

  //! ----------------------------- GET BY NAME ---------------------------

const getByName = async (req, res, next) => {
    try {
      const { name } = req.params;
      const characterByName = await Character.find({ name }); //sería name:name pero como coinciden clave y valor, sólo se pone una vez
      if (characterByName) {
        return res.status(200).json(characterByName);
      } else {
        return res.status(404).json("Not found Character by name");
      }
    } catch (error) {
      return next(error);
    }
  };

//! ----------------------------- UPDATE ---------------------------

const updateCharacter = async (req, res, next) => {
    try {
        const { id } = req.params;
        const characterById = await Character.findById(id); //buscar si existe ese character en la DB
        const oldImg = characterById.image; // se guarda la url de la imagen antigua
        //? SI YA EXISTE EL CHARACTER --> UPDATE
        if (characterById) {
            const patchCharacter = new Character(req.body);
            //! IMPORTANTE --> METER EL ID ANTIGUO PARA QUE NO CAMBIE
            patchCharacter._id = id; // _id es porque viene así en DB, y id es porque viene del destructuring
            if (req.file) {
                patchCharacter.image = req.file.path // aquí se modifica la imagen
            } else {
                patchCharacter.image = oldImg; // si no actualizo imagen, me quedo con la antigua
              }

      const saveCharacter = await Character.findByIdAndUpdate(id, patchCharacter);  // HACEMOS LA QUERY DE MONGOOSE DE ENCONTRAR POR ID Y ACTUALIZAR

//? EVALUAMOS DE NUEVO PARA VER SI SE HA REALIZADO CORRECTAMENTE
if (saveCharacter) {
    deleteImgCloudinary(oldImg); // si se ha actualizado --> borro la foto antigua de cloudinary --> respuesta 200
    return res.status(200).json(await Character.findById(id));
} else {
    return res.status(404).json("Dont save character");
}

        } else {
            return res.status(404).json("Not Found character by id");
        }
    } catch (error) {
        if (req.file) {
            deleteImgCloudinary(req.file.path);
          }
      
        return next(error);
    }
};

module.exports = { create, getAll, getById, getByName, updateCharacter };