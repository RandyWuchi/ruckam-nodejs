const mongoose = require("mongoose");
const Joi = require("joi");
const { categorySchema } = require("./categories");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  price: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 6,
  },
  category: {
    type: categorySchema,
    required: true,
  },
  description: {
    type: String,
  },
  images: {
    type: Array,
    required: true,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

const validateListing = (listing) => {
  const schema = Joi.object({
    title: Joi.string().min(1).required(),
    price: Joi.number().min(1).max(10000).required(),
    categoryId: Joi.string().required(),
    description: Joi.string(),
    images: Joi.array().min(1),
  });

  return schema.validate(listing);
};

exports.Listing = Listing;
exports.validate = validateListing;
exports.listingSchema = listingSchema;
