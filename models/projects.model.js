const mongoose = require('mongoose')


const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Project description is required"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "Project image URL is required"],
  },
  status: {
    type: String,
    enum: ['deployed', 'in progress', 'planning'],
    default: 'deployed'
  },
  liveDemo: String,
  repo: String,
  isDeleted: {
    type:Boolean, 
    default:false
  }},{
    versionKey: false,
    timestamps: true
  })


const projectsModel = mongoose.model('projects', projectsSchema)

module.exports = projectsModel