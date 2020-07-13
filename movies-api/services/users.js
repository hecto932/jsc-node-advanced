const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt');

class UsersServices {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoLib();
  }

  async getUsers({ email }) {
    const [user] = await this.mongoDB.getAll(this.collection, { email });
    return user;
  }

  async createUser({ user }) {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUserId = await this.mongoDB.create(this.collection, {
      name,
      email,
      password: hashedPassword,
    });
    return createdUserId;
  }

  async getOrCreateUser({ user }) {
    const queryUser = await this.getUsers({ email: user.email });

    if (queryUser) {
      return queryUser;
    }

    await this.createUser({ user });
    return await this.getUsers({ email: user.email });
  }
}

module.exports = UsersServices;
