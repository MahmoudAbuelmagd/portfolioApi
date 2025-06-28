module.exports = (asyncFn) => {
  return async (req, res, next) => {
    Promise.resolve(asyncFn(req, res, next)).catch((error)=>next(error))
  }
}