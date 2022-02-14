const httpResponse = require('../common/http-response');

const validate = (schema) => {
  return (req, res, next) => {
    try {
      const { error, value } = schema.validate(req.body);
      if (error) {
        const { details } = error;
        const message = details.map((i) => i.message).join(',');
        throw new Error(message);
      }
      req.body = value;
      next();
    } catch (error) {
      httpResponse.error(res, error);
    }
  };
};

module.exports = validate;
