const loggerRequestURL = (req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  next();
};

module.exports = loggerRequestURL;
