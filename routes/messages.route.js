const express = require('express')
const router = express.Router()
const messagesModel = require('../models/messages.model')
const { getMessages, addMessage } = require('../controllers/messages.controller')

router.get('/',getMessages)
router.post('/',addMessage)


module.exports = router