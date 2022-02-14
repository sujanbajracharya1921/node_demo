const Router = require('express').Router;
const router = Router();
const httpResponse = require('../common/http-response');
const authToken = require('../middlewares/auth-token').verifyToken;
const userService = require('../services/user.service');
const validate = require('../middlewares/validation-middleware');
const userValidation = require('../validation/user-validation');

router.get('/', authToken, async (req, res) => {
  try {
    const users = await userService.getUsers(req.query);
    httpResponse.success(res, users);
  } catch (error) {
    httpResponse.error(res, error);
  }
});

router.get('/:id', authToken, async (req, res) => {
  try {
    const user = await userService.getOne(req.params.id, req.query);
    httpResponse.success(res, user);
  } catch (error) {
    httpResponse.error(res, error);
  }
});

router.post('/', authToken, validate(userValidation), async (req, res) => {
  try {
    const user = await userService.create(req.body);
    httpResponse.success(res, user);
  } catch (error) {
    httpResponse.error(res, error);
  }
});

router.put('/:id', authToken, validate(userValidation), async (req, res) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    httpResponse.success(res, user);
  } catch (error) {
    httpResponse.error(res, error);
  }
});

router.delete('/:id', authToken, async (req, res) => {
  try {
    const user = await userService.delete(req.params.id);
    httpResponse.success(res, user);
  } catch (error) {
    httpResponse.error(res, error);
  }
});

module.exports = router;
