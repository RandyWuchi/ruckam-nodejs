const mongoose = require("mongoose");
const Joi = require("joi");
const { listingSchema } = require("./listings");

const messageSchema = new mongoose.Schema({
  listing: {
    type: listingSchema,
  },
  message: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Messages", messageSchema);

const validateMessage = (message) => {
  const schema = Joi.object({
    listingId: Joi.string(),
    message: Joi.string().required(),
  });

  return schema.validate(message);
};

exports.messageSchema = messageSchema;
exports.validate = validateMessage;
exports.Message = Message;
