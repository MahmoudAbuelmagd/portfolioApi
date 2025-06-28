const express = require('express');
const router = express.Router();
const loginMyAdmin = require('../controllers/admin.controller');
const asyncWrapper = require('../middlewares/asyncWrapper');

router.post('/', loginMyAdmin)

module.exports = router