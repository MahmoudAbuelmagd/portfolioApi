const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  institution: { type: String, required: true },
  type: { type: String, enum: ['degree', 'certification', 'course'], required: true },
  year: { type: String, required: true }
});

module.exports = mongoose.model('Education', educationSchema);
