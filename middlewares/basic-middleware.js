const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const dateTime = new Date().getFullYear();
  console.log(method, url, dateTime);
  next();
};

module.exports = logger;
