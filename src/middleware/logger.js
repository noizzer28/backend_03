const logger = (request, response, next) => {
  console.log(request.host);
  console.log(1);
  next();
};

module.exports = logger;
