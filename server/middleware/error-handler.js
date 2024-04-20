const errorHandler = (err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.systemMessage || 'JSHUB_UNKNOWN_ERR';
  
  res.status(errorStatus).json({
    errorStatus, errorMessage
  })
}

module.exports = errorHandler;