const { deleteImgCloudinary } = require('../../middleware/files.middleware');
const setError = require('../../helpers/handle-error');
const randomCode = require('../../utils/randomCode');
const sendEmail = require('../../utils/sendEmail');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const User = require('../models/user.model');


//! ----------------------------REGISTER CORTO EN CODIGO ------------------------

const register = async (req, res, next) => {
    let catchImg = req.file?.path;
    try {
      let confirmationCode = randomCode();
      const { email, name } = req.body;
  
      // buscamos si ya existe el usuario
      const userExist = await User.findOne(
        { email: req.body.email },
        { name: req.body.name }
      );
      if (!userExist) {
        const newUser = new User({ ...req.body, confirmationCode });
        if (req.file) {
          newUser.image = req.file.path;
        } else {
          newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png';
        }
  
        const userSave = await newUser.save();
  
        if (userSave) {
          sendEmail(email, name, confirmationCode);
          setTimeout(() => {
            if (getTestEmailSend()) {
              return res.status(200).json({
                user: userSave,
                confirmationCode,
              });
            } else {
              return res.status(404).json({
                user: userSave,
                confirmationCode: 'error, resend code',
              });
            }
          }, 1100);
        }
      } else {
        deleteImgCloudinary(catchImg);
        return res.status(409).json('this user already exist');
      }
    } catch (error) {
      deleteImgCloudinary(catchImg);
      return next(error);
    }
  };

