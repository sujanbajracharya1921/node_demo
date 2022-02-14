const Router = require('express').Router;
const router = Router();
const authController = require('./controllers/auth-controller');
const userController = require('./controllers/user-controller');

router.get('/', (req, res) => {
  res.json({ API: 'Welcome to the Node Server' });
});
router.use('/auth', authController);
router.use('/users', userController);

module.exports = router;
