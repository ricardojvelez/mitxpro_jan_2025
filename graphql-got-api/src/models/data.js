// In-memory database for Houses and Characters
// In a real application, this would be replaced with a proper database like PostgreSQL, MongoDB, etc.

let houses = [
  { 
    id: "1", 
    name: "House Stark", 
    motto: "Winter is Coming"
  },
  { 
    id: "2", 
    name: "House Targaryen", 
    motto: "Fire and Blood"
  },
  { 
    id: "3", 
    name: "House Lannister", 
    motto: "Hear Me Roar"
  },
  { 
    id: "4", 
    name: "House Baratheon", 
    motto: "Ours is the Fury"
  }
];

let characters = [
  {
    id: "1", 
    name: "Jon Snow", 
    houseId: "1"
  },
  {
    id: "2", 
    name: "Daenerys Targaryen", 
    houseId: "2"
  },
  {
    id: "3", 
    name: "Arya Stark", 
    houseId: "1"
  },
  {
    id: "4", 
    name: "Sansa Stark", 
    houseId: "1"
  },
  {
    id: "5", 
    name: "Cersei Lannister", 
    houseId: "3"
  },
  {
    id: "6", 
    name: "Jaime Lannister", 
    houseId: "3"
  },
  {
    id: "7", 
    name: "Tyrion Lannister", 
    houseId: "3"
  }
];

// Helper functions for database operations
function generateId(array) {
  if (array.length === 0) return "1";
  return String(Math.max(...array.map(item => parseInt(item.id))) + 1);
}

function findById(array, id) {
  return array.find(item => item.id === id);
}

function findByHouseId(characterArray, houseId) {
  return characterArray.filter(char => char.houseId === houseId);
}

function deleteById(array, id) {
  const index = array.findIndex(item => item.id === id);
  if (index !== -1) {
    return array.splice(index, 1)[0];
  }
  return null;
}

// Database simulation functions
const db = {
  // House operations
  getAllHouses: () => houses,
  getHouseById: (id) => findById(houses, id),
  createHouse: (houseData) => {
    const newHouse = {
      id: generateId(houses),
      ...houseData
    };
    houses.push(newHouse);
    return newHouse;
  },
  updateHouse: (id, updates) => {
    const house = findById(houses, id);
    if (house) {
      Object.assign(house, updates);
      return house;
    }
    return null;
  },
  deleteHouse: (id) => deleteById(houses, id),

  // Character operations
  getAllCharacters: () => characters,
  getCharacterById: (id) => findById(characters, id),
  getCharactersByHouseId: (houseId) => findByHouseId(characters, houseId),
  createCharacter: (characterData) => {
    const newCharacter = {
      id: generateId(characters),
      ...characterData
    };
    characters.push(newCharacter);
    return newCharacter;
  },
  updateCharacter: (id, updates) => {
    const character = findById(characters, id);
    if (character) {
      Object.assign(character, updates);
      return character;
    }
    return null;
  },
  deleteCharacter: (id) => deleteById(characters, id),

  // Utility functions
  getCharacterCount: () => characters.length,
  getHouseCount: () => houses.length
};

module.exports = db; 