const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL Schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root Resolver
const root = {
    message: () => 'Hello World!'
};

// Create an Express server with a GraphQL endpoint
const app = express();

app.use('/graphql', express_graphql({ 
    schema: schema, 
    rootValue: root,
    graphiql: true,
}));

app.listen(1337, () => {
    console.log('Server running on port: 1337');
});