const {models} = require('./db');

module.exports = {
  Query: {
    user(_, {input = {}}) {
      return models.User.findOne(input);
    },
    allUsers(_, {input = {}}) {
      return models.User.findMany(input) || [];
    },
    pet(_, {input = {}}) {
      return models.Pet.findOne(input);
    },
    allPets(_, {input = {}}) {
      return models.Pet.findMany(input) || [];
    }
  },
  Mutation: {
    newUser(_, {input}) {
      return models.User.create(input);
    }
  }
}
