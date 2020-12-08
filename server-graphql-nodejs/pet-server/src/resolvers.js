const db = require('./db');

const resolvers = {
  Query: {
    user() {
      return db.models.User.findOne();
    },
    pet(_, filter) {
      return db.models.Pet.findOne(filter);
    },
    pets(_, filter) {
      return db.models.Pet.findMany(filter);
    },
  },
};

module.exports = resolvers;
