const express = require('express')
const multer = require('multer')
const router = express.Router()
const { storage } = require('../config/cloudinary')

const projectsModel = require('../models/projects.model')
const { getProjects , addProject, editProject, softDeleteProject} = require('../controllers/projects.controller')

const upload = multer({storage})
router.get('/',getProjects)
router.post('/', upload.single('image'), addProject)
router.patch('/:projectId', upload.single('image'), editProject)
router.patch('/delete/:projectId', softDeleteProject);

module.exports = router