const Router = require('express').Router;
const router = Router();
const authService = require('../services/auth.service');
const httpResponse = require('../common/http-response');

router.post('/login', async (req, res) => {
  try {
    const data = await authService.signIn(req.body);
    httpResponse.success(res, data);
  } catch (error) {
    httpResponse.error(res, error);
  }
});

module.exports = router;
