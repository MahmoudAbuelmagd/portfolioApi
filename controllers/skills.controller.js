const skillsModel = require("../models/skills.model")

const getSkills = async (req, res, next) => {
  const skills = await skillsModel.find()
  res.status(200).json({ status: 'success', data: skills })
}

const addSkill = async (req, res, next) => {
  try {
    const newSkill = await skillsModel.create(req.body)
    return res.status(201).json({ status: 'Skill added successfully', skill: newSkill })
  } catch (error) {
    return res.status(404).json({ status: 'error', message: error.message })
  }
}

const editSkill = async (req, res, next) => {
  try {
    const skillId = req.params.skillId
    const editedSkill = await skillsModel.findByIdAndUpdate(skillId, { $set: { ...req.body } }, { new: true })
    if (!editedSkill) return res.status(400).json({ status: 'fail', message: 'Skill not exist!' })
    const skillsData = await skillsModel.find()
    return res.status(200).json({status: 'skill edited successfully', skill : editedSkill, data:skillsData})
  } catch (error) {
    return res.status(404).json({ status: "project can't be edited", message: error.message })
  }
}

const deleteSkill = async (req, res, next) => { 
  const skillId = req.params.skillId
  const deletedSkill = await skillsModel.findByIdAndDelete(skillId)
    if (!deletedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
  }
  res.status(200).json({ message: 'Skill deleted successfully', skill: deletedSkill });

}


module.exports = {
  getSkills,
  addSkill,
  editSkill,
  deleteSkill
}