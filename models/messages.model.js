const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required: true,
    lowercase:true
  },
  message: {
    type: String,
    required:true
  }
},{versionKey:false, timestamps: true})

const messages = mongoose.model('Message', messagesSchema)

module.exports = messages