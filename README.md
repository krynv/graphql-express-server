# A **very** basic GraphQL server with Express

[![CircleCI](https://circleci.com/gh/krynv/graphql-express-server/tree/master.svg?style=svg)](https://circleci.com/gh/krynv/graphql-express-server/tree/master)

A very basic example of how to create a GraphQL server with Express.

This project uses the `esm` package to utilise the latest ES6 syntax. 

You can test the application by sending a `hello` GraphQL query, like below:

```graphql
{
    hello
}
```

You should expect a response of:

```graphql
{
  "data": {
    "hello": "Hello world!"
  }
}
```

## What is GraphQL?

![GraphQL Diagram](graphql-vs-rest-api.jpg)

"GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools." - https://graphql.org/

## Run the application

Install dependencies:

    npm i

Start server: 

    npm start

Access GraphiQL at:
http://localhost:1337/api


### Lazystart:

    git clone git@github.com:krynv/graphql-express-server && npm i && npm start