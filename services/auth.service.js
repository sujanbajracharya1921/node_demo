const error = require('../common/http-response');
const tokenManagement = require('../middlewares/auth-token');
const users = require('../users');

var authService = (() => {
  const signIn = async (userInfo) => {
    console.log(userInfo);
    const userFound = users.find((user) => user.email == userInfo.email);
    if (userFound) {
      const rememberMe = userInfo.rememberMe ? userInfo.rememberMe : false;
      const accessToken = tokenManagement.generateToken(userFound, rememberMe);
      return accessToken;
    }
    throw new Error('User not found');
  };

  return {
    signIn
  };
})();

module.exports = authService;
