const educationModel = require('../models/education.model');
const EducationModel = require('../models/education.model');

const getAllEducations = async (req, res) => {
  try {
    const educationList = await EducationModel.find().sort({ year: -1 });
    res.status(200).json({ status: 'success', data: educationList });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch education records', error: err.message });
  }
}

const createEducation = async (req, res) => {
  try {
    const newEdu = await EducationModel.create(req.body);
    const educations = await EducationModel.find()
    res.status(201).json({ status: 'eduction created successfully', education: newEdu, data: educations });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create education record', error: err.message });
  }
};

const updateEducation = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await EducationModel.findByIdAndUpdate(id, req.body, { new: true });
    const educations = await EducationModel.find()
    if (!updated) return res.status(404).json({ message: 'Education not found' });
    res.status(200).json({ status: 'success', data: educations });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update education', error: err.message });
  }
};

const deleteEducation = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await EducationModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Education not found' });
    res.status(200).json({ status: 'success', message: 'Education deleted', deleted });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete education', error: err.message });
  }
};

module.exports = {
  createEducation,
  getAllEducations,
  updateEducation,
  deleteEducation
};
