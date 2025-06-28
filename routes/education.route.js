const express = require('express');
const router = express.Router();
const eduCtrl = require('../controllers/education.controller');

router.post('/', eduCtrl.createEducation); 
router.get('/', eduCtrl.getAllEducations)
router.patch('/:id', eduCtrl.updateEducation)
router.delete('/:id', eduCtrl.deleteEducation);

module.exports = router;