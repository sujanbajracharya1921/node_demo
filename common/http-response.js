const HttpStatus = require('http-status-codes');

const HttpResponseHelper = {
  error(response, error) {
    response.status(error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR).send({ message: error.message || null, ...error });
  },
  unAuthorized(response, error) {
    response.status(error.statusCode || HttpStatus.UNAUTHORIZED).send({ message: error.message || error });
  },
  success(response, data) {
    return response.send({ success: true, data });
  },
  clientError(response, error, statusCode) {
    return response.send({ error, statusCode });
  }
};

module.exports = HttpResponseHelper;
