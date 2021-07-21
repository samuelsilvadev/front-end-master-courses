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
    },
    allShoes () {
      return [
        {
          brand: 'N21',
          size: 12
        },
        {
          brand: 'ADIDAS',
          color: 'RED'
        }
      ]
    }
  },
  Mutation: {
    newUser(_, {input}) {
      return models.User.create(input);
    },
    newPet(_ , {input}) {
      return models.Pet.create(input);
    },
    updatePet(_, {input}) {
      return models.Pet.update(input);
    },
    deletePet(_, {id}) {
      return models.Pet.delete(id);
    }
  },
  User: {
    shoe(user) {
      return {
        brand: 'N21',
        size: 12,
      }
    }
  },
  Shoe: {
    __resolveType(shoe) {
      if (shoe.color) {
        return 'Sneaker';
      }

      return 'Boots';
    }
  },
  Footwear: {
    __resolveType(shoe) {
      if (shoe.color) {
        return 'Sneaker';
      }

      return 'Boots';
    }
  }
}
