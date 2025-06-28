const express = require('express')
const router = express.Router()
const skills = require('../models/skills.model')
const { getSkills, addSkill, editSkill, deleteSkill } = require('../controllers/skills.controller')

router.route('/').get(getSkills)
  .post(addSkill)
router.route('/:skillId').patch(editSkill)
  .delete(deleteSkill)

module.exports = router