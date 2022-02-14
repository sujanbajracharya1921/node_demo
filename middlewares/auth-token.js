const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const secret = process.env.SECRET;

const tokenManagement = {
  async verifyToken(req, res, next) {
    if (!req.header('authorization')) return res.status(403).send('Token Required');
    let token = req.headers['authorization'];
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(403).send('The token supplied to the request is invalid.Please try with valid token.');
      }
      req.user = decoded;
      next();
    });
  },

  generateToken(user, rememberMe) {
    let expiresIn = 86400; //expires in 24 hours
    if (rememberMe) expiresIn = 2592000; //expires in 30 days
    let token = jwt.sign(
      {
        name: user.name,
        email: user.email
      },
      secret,
      {
        expiresIn: 4500
      }
    );
    let refreshToken = jwt.sign(
      {
        name: user.name,
        email: user.email
      },
      secret,
      {
        expiresIn: 86400
      }
    );
    return { auth: true, token: token, refreshToken, user: user, lastLoginDate: new Date() };
  }
};

module.exports = tokenManagement;
