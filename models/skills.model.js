const mongoose = require("mongoose");

const SkillsSchema = new mongoose.Schema({
  title: {
    type: String,
    required:true
  },
  shortDesc: {
    type: String,
    required:true
  },
  icon: {
    type: String,
    required:true
  }
},{versionKey:false, timestamps: true})

const skills = mongoose.model('skills', SkillsSchema)

module.exports = skills