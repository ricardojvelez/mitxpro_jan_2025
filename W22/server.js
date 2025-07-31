const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// In-memory database for demo (replace with Firebase in production)
let users = [
  { 
    id: '1', 
    username: 'asd', 
    email: 'asd@gmail.com', 
    createdAt: new Date().toISOString() 
  }
];

// GraphQL Schema
const typeDefs = `
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
  }

  type Response {
    success: Boolean!
    message: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!): User!
    deleteUser(id: ID!): Response!
  }
`;

// GraphQL Resolvers
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { id }) => {
      const user = users.find(u => u.id === id);
      if (!user) {
        throw new Error(`User with ID ${id} not found`);
      }
      return user;
    }
  },

  Mutation: {
    createUser: (parent, { username, email }) => {
      // Validation
      if (!username || username.trim().length === 0) {
        throw new Error('Username is required');
      }
      if (!email || email.trim().length === 0) {
        throw new Error('Email is required');
      }
      if (!email.includes('@')) {
        throw new Error('Please provide a valid email address');
      }

      // Create new user
      const newUser = {
        id: String(users.length + 1),
        username: username.trim(),
        email: email.trim().toLowerCase(),
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      console.log('✅ User created:', newUser);
      return newUser;
    },

    deleteUser: (parent, { id }) => {
      const index = users.findIndex(u => u.id === id);
      if (index === -1) {
        return {
          success: false,
          message: `User with ID ${id} not found`
        };
      }

      const deletedUser = users.splice(index, 1)[0];
      console.log('🗑️ User deleted:', deletedUser);
      return {
        success: true,
        message: `User "${deletedUser.username}" deleted successfully`
      };
    }
  }
};

// Create executable schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'firebaseDemo.html'));
});

// GraphQL endpoint
app.all('/graphql', createHandler({
  schema,
  formatError: (error) => {
    console.error('GraphQL Error:', error);
    return {
      message: error.message,
    };
  }
}));

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    users: users.length,
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(port, () => {
  console.log('🚀 Firebase Demo Server Started!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📱 Server running on port: ${port}`);
  console.log(`🌐 Demo page: http://localhost:${port}`);
  console.log(`📊 GraphQL endpoint: http://localhost:${port}/graphql`);
  console.log(`❤️  Health check: http://localhost:${port}/health`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📝 Ready to demo! Open the URL above in your browser');
}); 