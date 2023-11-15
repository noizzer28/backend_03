const logger = (request, response, next) => {
  console.log(request.host);
  next();
};

module.exports = logger;
