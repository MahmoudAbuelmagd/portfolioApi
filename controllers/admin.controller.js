const JWT = require('jsonwebtoken')

const loginMyAdmin = async (req, res, next) => {
  const { email, password } = req.body
  console.log(req.body);
  
  if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {
    const token = JWT.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' })
    return res.status(201).json({
      status: 'Admin logged in successfully',
      token
    })
  } else {
      res.status(401).json({ message: 'Unauthorized role' });
  }
}

module.exports = loginMyAdmin