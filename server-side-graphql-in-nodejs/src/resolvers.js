const {models} = require('./db');

module.exports = {
  Query: {
    user() {
      return models.User.findOne();
    }, 
    allPets() {
      return models.Pet.findMany() || [];
    }
  },
}
