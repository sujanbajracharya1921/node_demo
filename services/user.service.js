const users = require('../users');

class authService {
  async getUsers(query) {
    if (query.name || query.email) {
      const name = query.name ? query.name.toLowerCase() : null;
      const email = query.email ? query.email.toLowerCase() : null;
      return users.filter((user) => user.name.toLowerCase().includes(name) || user.email.toLowerCase().includes(email));
    }
    return users;
  }

  async getOne(params, query) {
    let user;
    if (query) {
      user = users.find((user) => user[query.paramType] == params);
      if (!user) throw new Error('User not found');
      return user;
    }
    user = users.find((user) => user.id == params);
    if (!user) throw new Error('User not found');
    return user;
  }

  async create(userInfo) {
    const userExist = users.find((user) => user.email == userInfo.email);
    if (userExist) throw new Error('User with same email already exist');
    userInfo.id = users.length + 1;
    let newUsers = [...users, userInfo];
    return newUsers;
  }

  async update(param, userInfo) {
    const user = users.find((user) => user.id == param);
    if (!user) throw new Error('User not found');
    return { id: param, ...userInfo };
  }

  async delete(param) {
    const user = users.find((user) => user.id == param);
    if (!user) throw new Error('User not found');
    return { delete: true, id: param };
  }
}

module.exports = new authService();
