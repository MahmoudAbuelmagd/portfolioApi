const express = require('express')
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const asyncWrapper = require('./middlewares/asyncWrapper')
const adminAuth = require('./middlewares/adminAuth')
const app = express()
app.use(cors())
app.use(express.json())



mongoose.connect(process.env.MONGO_URL).then( _=> console.log('mongoDB conected successfully'))

const projectsRouter = require('./routes/projects.route')
app.use('/api/projects',adminAuth ,projectsRouter)

const skillsRouter = require('./routes/skills.route')
app.use('/api/skills',adminAuth ,skillsRouter)

const educationRouter = require('./routes/education.route')

app.use('/api/education', adminAuth,educationRouter)

const messagesRouter = require('./routes/messages.route')
app.use('/api/messages', messagesRouter)

const adminRouter = require('./routes/admin.route')
app.use('/api/admin/login', adminRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server listened at ${process.env.PORT}`);
})
