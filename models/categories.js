const mongoose = require("mongoose");
const Joi = require("joi");

const categorySchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

const validateCategory = (category) => {
  const schema = Joi.object({
    icon: Joi.string().min(3).required(),
    name: Joi.string().min(3).required(),
  });

  return schema.validate(category);
};

exports.Category = Category;
exports.categorySchema = categorySchema;
exports.validate = validateCategory;
