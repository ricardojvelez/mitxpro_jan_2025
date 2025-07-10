const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const app = express();
const port = process.env.PORT || 4000;

// Create executable GraphQL schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Middleware
app.use(express.json());

// Enable CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// GraphiQL HTML interface
const graphiqlHTML = `
<!DOCTYPE html>
<html>
<head>
  <title>GraphiQL - Game of Thrones API</title>
  <style>
    body { 
      height: 100vh; 
      margin: 0; 
      font-family: Arial, sans-serif; 
      overflow: hidden;
    }
    #graphiql { 
      height: calc(100vh - 80px); 
    }
    .banner { 
      background: #1f2937; 
      color: white; 
      padding: 20px; 
      text-align: center; 
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .banner h2 { 
      margin: 0; 
      font-size: 18px; 
    }
  </style>
  <link href="https://unpkg.com/graphiql@3.0.6/graphiql.min.css" rel="stylesheet" />
</head>
<body>
  <div class="banner">
    <h2>🐉 Game of Thrones GraphQL API - Ready to test your mutations!</h2>
  </div>
  <div id="graphiql">Loading GraphiQL...</div>
  
  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/graphiql@3.0.6/graphiql.min.js"
  ></script>
  
  <script>
    const root = ReactDOM.createRoot(document.getElementById('graphiql'));
    
    const fetcher = GraphiQL.createFetcher({
      url: '/graphql',
    });

    const defaultQuery = \`# Welcome to GraphiQL for Game of Thrones API!
# Try this mutation to create a new house:

mutation CreateHouse {
  createHouse(
    name: "House Martell"
    motto: "Unbowed, Unbent, Unbroken"
  ) {
    id
    name
    motto
  }
}

# Or query existing data:
# query GetAllData {
#   characters {
#     id
#     name
#     house {
#       name
#       motto
#     }
#   }
#   houses {
#     id
#     name
#     motto
#   }
# }\`;

    root.render(
      React.createElement(GraphiQL, {
        fetcher,
        defaultQuery,
      })
    );
  </script>
</body>
</html>
`;

// Welcome route with API documentation
app.get('/', (req, res) => {
  res.json({
    message: '🐉 Welcome to the Game of Thrones GraphQL API!',
    version: '1.0.0',
    endpoints: {
      graphql: `http://localhost:${port}/graphql`,
      graphiql: `http://localhost:${port}/graphql (visit in browser)`
    },
    documentation: {
      sampleQueries: {
        getAllCharacters: `
          query {
            characters {
              id
              name
              house {
                name
                motto
              }
            }
          }
        `,
        getCharactersByHouse: `
          query {
            characters(houseId: "1") {
              name
              house {
                name
              }
            }
          }
        `,
        createCharacter: `
          mutation {
            createCharacter(
              name: "Bran Stark"
              houseId: "1"
            ) {
              id
              name
              house {
                name
                motto
              }
            }
          }
        `
      }
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// GraphiQL interface on separate route
app.get('/graphiql', (req, res) => {
  res.send(graphiqlHTML);
});

// GraphQL endpoint for both GET and POST requests
app.all('/graphql', createHandler({
  schema,
  formatError: (error) => {
    console.error('GraphQL Error:', error);
    return {
      message: error.message,
      // Only expose error details in development
      ...(process.env.NODE_ENV === 'development' && {
        locations: error.locations,
        path: error.path,
        stack: error.stack
      })
    };
  }
}));

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The route ${req.originalUrl} does not exist`,
    availableRoutes: [
      'GET /',
      'GET /health', 
      'GET|POST /graphql'
    ]
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Server Error:', error);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// Start the server
app.listen(port, () => {
  console.log('🚀 Game of Thrones GraphQL API Server Started!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📱 Server running on port: ${port}`);
  console.log(`🌐 GraphQL endpoint: http://localhost:${port}/graphql`);
  console.log(`🎮 GraphiQL interface: http://localhost:${port}/graphiql`);
  console.log(`❤️  Health check: http://localhost:${port}/health`);
  console.log(`📚 API docs: http://localhost:${port}/`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🏰 Winter is coming... but your API is ready! ❄️');
}); 