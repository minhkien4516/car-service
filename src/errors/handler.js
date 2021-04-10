exports.logErrors = (error, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`Errors from server: ${error.message}`);
  next(error);
};

// eslint-disable-next-line no-unused-vars
exports.clientErrorHandler = (error, req, res, next) => {
  res.status(500).json({ message: error.message });
};
