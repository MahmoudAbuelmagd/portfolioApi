const projectsModel = require("../models/projects.model")
const AppError = require("../utilities/appError")

const getProjects = async (req, res, next) => {
  const projects= await projectsModel.find({isDeleted: false})
  res.status(200).json({status: 'success', data:projects})
}

const addProject = async (req, res, next) => {
  const image = req.file.path;
  if(!image) next(new AppError('failed to add project without image', 400 , 'fail'))
    const newProject = await projectsModel.create({...req.body, image : image})
    return res.status(201).json({status: "project created successfully", project: newProject})

}

const editProject = async (req, res) => {
    const { projectId } = req.params;
    const updateData = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      repo: req.body.repo,
      liveDemo: req.body.liveDemo,
    };

    if (req.file) {
      updateData.image = req.file.path; // or req.file.filename depending on your cloudinary setup
    }

    const updated = await projectsModel.findByIdAndUpdate(projectId, updateData, { new: true });

    if (!updated) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project updated', data: updated });
 
};
const softDeleteProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    const deleted = await projectsModel.findByIdAndUpdate(
      projectId,
      { isDeleted: true },
      { new: true }
    );

    if (!deleted) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted', data: deleted });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error });
  }
};

module.exports = {
  getProjects,
  addProject,
  editProject,
  softDeleteProject
} 