const db = require('../models/data');

const resolvers = {
  Query: {
    // Get a single character by ID
    character: (parent, { id }) => {
      const character = db.getCharacterById(id);
      if (!character) {
        throw new Error(`Character with ID ${id} not found`);
      }
      return character;
    },

    // Get all characters with optional house filtering
    characters: (parent, { houseId }) => {
      let characters = db.getAllCharacters();
      
      if (houseId) {
        characters = characters.filter(char => char.houseId === houseId);
      }
      
      return characters;
    },

    // Get a single house by ID
    house: (parent, { id }) => {
      const house = db.getHouseById(id);
      if (!house) {
        throw new Error(`House with ID ${id} not found`);
      }
      return house;
    },

    // Get all houses
    houses: () => {
      return db.getAllHouses();
    }
  },

  Mutation: {
    // Create a new character
    createCharacter: (parent, args) => {
      const { name, houseId } = args;
      
      // Validate that the house exists
      const house = db.getHouseById(houseId);
      if (!house) {
        throw new Error(`House with ID ${houseId} not found`);
      }

      // Validate required fields
      if (!name || name.trim().length === 0) {
        throw new Error('Character name is required');
      }

      const characterData = {
        name: name.trim(),
        houseId
      };

      const newCharacter = db.createCharacter(characterData);
      return newCharacter;
    },

    // Update an existing character
    updateCharacter: (parent, args) => {
      const { id, name, houseId } = args;
      
      const existingCharacter = db.getCharacterById(id);
      if (!existingCharacter) {
        throw new Error(`Character with ID ${id} not found`);
      }

      // If houseId is being updated, validate that the house exists
      if (houseId && houseId !== existingCharacter.houseId) {
        const house = db.getHouseById(houseId);
        if (!house) {
          throw new Error(`House with ID ${houseId} not found`);
        }
      }

      // Prepare updates object (only include defined values)
      const updates = {};
      if (name !== undefined) updates.name = name.trim();
      if (houseId !== undefined) updates.houseId = houseId;

      const updatedCharacter = db.updateCharacter(id, updates);
      return updatedCharacter;
    },

    // Delete a character
    deleteCharacter: (parent, { id }) => {
      const character = db.getCharacterById(id);
      if (!character) {
        return {
          success: false,
          message: `Character with ID ${id} not found`
        };
      }

      const deletedCharacter = db.deleteCharacter(id);
      return {
        success: true,
        message: `Character "${deletedCharacter.name}" has been deleted successfully`
      };
    },

    // Create a new house
    createHouse: (parent, args) => {
      const { name, motto } = args;
      
      // Validate required fields
      if (!name || name.trim().length === 0) {
        throw new Error('House name is required');
      }

      const houseData = {
        name: name.trim(),
        motto: motto?.trim() || ""
      };

      const newHouse = db.createHouse(houseData);
      return newHouse;
    },

    // Update an existing house
    updateHouse: (parent, args) => {
      const { id, name, motto } = args;
      
      const existingHouse = db.getHouseById(id);
      if (!existingHouse) {
        throw new Error(`House with ID ${id} not found`);
      }

      // Prepare updates object (only include defined values)
      const updates = {};
      if (name !== undefined) updates.name = name.trim();
      if (motto !== undefined) updates.motto = motto?.trim() || "";

      const updatedHouse = db.updateHouse(id, updates);
      return updatedHouse;
    },

    // Delete a house
    deleteHouse: (parent, { id }) => {
      const house = db.getHouseById(id);
      if (!house) {
        return {
          success: false,
          message: `House with ID ${id} not found`
        };
      }

      // Check if any characters belong to this house
      const charactersInHouse = db.getCharactersByHouseId(id);
      if (charactersInHouse.length > 0) {
        return {
          success: false,
          message: `Cannot delete house "${house.name}": ${charactersInHouse.length} character(s) still belong to this house`
        };
      }

      const deletedHouse = db.deleteHouse(id);
      return {
        success: true,
        message: `House "${deletedHouse.name}" has been deleted successfully`
      };
    }
  },

  // Field resolvers for nested data
  Character: {
    house: (parent) => {
      return db.getHouseById(parent.houseId);
    }
  }
};

module.exports = resolvers; 