const typeDefs = `
  # Represents a noble house in the Game of Thrones universe
  type House {
    id: ID!
    name: String!
    motto: String
  }

  # Represents a character in the Game of Thrones universe
  type Character {
    id: ID!
    name: String!
    house: House
  }

  # Response type for delete operations
  type DeleteResponse {
    success: Boolean!
    message: String!
  }

  # Query type for fetching data
  type Query {
    # Get a single character by ID
    character(id: ID!): Character
    
    # Get all characters or filter by house
    characters(houseId: ID): [Character!]!
    
    # Get a single house by ID
    house(id: ID!): House
    
    # Get all houses
    houses: [House!]!
  }

  # Mutation type for modifying data
  type Mutation {
    # Create a new character
    createCharacter(name: String!, houseId: ID!): Character!

    # Update an existing character
    updateCharacter(id: ID!, name: String, houseId: ID): Character!

    # Delete a character by ID
    deleteCharacter(id: ID!): DeleteResponse!

    # Create a new house
    createHouse(name: String!, motto: String): House!

    # Update an existing house
    updateHouse(id: ID!, name: String, motto: String): House!

    # Delete a house by ID
    deleteHouse(id: ID!): DeleteResponse!
  }
`;

module.exports = typeDefs; 