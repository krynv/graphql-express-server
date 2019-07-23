const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const cors = require('cors');

const QueryRoot = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: graphql.GraphQLString,
            resolve: () => "Hello world!"
        }
    })
});

const schema = new graphql.GraphQLSchema({ query: QueryRoot });

const app = express();

app.use(cors()); // enable cors

app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(1337, () => {
    console.log('Server running on port: 1337');
});