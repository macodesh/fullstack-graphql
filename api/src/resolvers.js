/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your schema
 */

module.exports = {
  Query: {
    pets(_, { input }, ctx) {
      return ctx.models.Pet.findMany(input);
    },
    pet(_, { input }, ctx) {
      return ctx.models.Pet.findOne(input);
    }
  },
  Mutation: {
    newPet(_, { input }, ctx) {
      return ctx.models.Pet.create(input);
    }
  },
  Pet: {
    tutor(pet, __, ctx) {
      return ctx.models.User.findById(pet.tutor);
    },
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300';
    }
  },
  User: {
    pets(user, __, ctx) {
      return ctx.models.Pet.findMany({ tutor: user.id });
    }
  },
  Animal: {
    __resolveType(obj) {
      if (obj.tutor) return 'Pet';
    }
  }
};
