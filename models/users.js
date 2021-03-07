const mongoose = require("mongoose");
const Joi = require("joi");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    profilePhoto: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 255,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 1024,
    },
  })
);

const validateUser = (user) => {
  const schema = Joi.object({
    profilePhoto: Joi.string(),
    name: Joi.string().required().min(5).max(50).label("Name"),
    email: Joi.string().min(5).max(255).email().required().label("Email"),
    password: Joi.string().min(6).max(255).required().label("Password"),
  });

  return schema.validate(user);
};

exports.User = User;
exports.validate = validateUser;
