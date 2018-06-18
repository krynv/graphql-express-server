const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

// GraphQL Schema
const schema = buildSchema(`
    type Query {
        allCourses: [Course]
        course(id: Int!): Course
    }
    
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

var coursesData = [
    {
        id: 1,
        title: 'Angular - The Complete Guide',
        author: 'Maximilian Schwarzmüller',
        description: 'Master Angular (Angular 2+, incl. Angular 5) and build awesome, reactive web apps with the successor of Angular.js',
        topic: 'Angular',
        url: 'http://codingthesmartway.com/courses/angular2-complete-guide/'
    },
    {
        id: 2,
        title: 'GraphQL with React: The Complete Developers Guide',
        author: 'Stephen Grider',
        description: 'Learn and master GraphQL by building real web apps with React and Node',
        topic: 'React',
        url: 'https://codingthesmartway.com/courses/graphql-react'
    },
    {
        id: 3,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 4,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 5,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    }
];

//TODO: Move this to separate file
var getCourse = ({ id }) => {
    return coursesData.filter(course => {
        return course.id === id;
    })[0];
};

var getAllCourses = () => {
    return coursesData;
}

var updateCourseTopic = ({ id, topic }) => {
    coursesData.map(course => {
        if (course.id === id) {
            course.topic = topic;

            return course;
        }
    });

    return coursesData.filter(course => course.id === id)[0];
};

// Resolvers
const resolvers = {
    Query: {
        allCourses: getAllCourses,
        course: getCourse,
    },
};

// Create an Express server with a GraphQL endpoint
const app = express();

app.use(cors()); // enable cors

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: resolvers.Query,
    graphiql: true,
}));

app.listen(1337, () => {
    console.log('Server running on port: 1337');
});