const messagesModel = require("../models/messages.model")


const getMessages = async (req, res, next) => {
  const messages = await messagesModel.find()
  res.status(200).json({ status: 'success', data: messages })
}

const addMessage = async (req, res, next) => {
    const {title, email, message} = req.body
    const newMessage = await messagesModel.create({ title, email, message })
    const messages = await messagesModel.find()
    return res.status(201).json({ status: 'message added successfully', message: newMessage , messages:messages})
  
}

module.exports = {
  getMessages,
  addMessage
}