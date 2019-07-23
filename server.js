import express from 'express';
import graphqlHTTP from 'express-graphql';
import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import cors from 'cors';

const QueryRoot = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: GraphQLString,
            resolve: () => "Hello world!"
        }
    })
});

const schema = new GraphQLSchema({ query: QueryRoot });

const app = express();

app.use(cors()); // enable cors

app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(1337, () => {
    console.log('Server running on port: 1337');
});