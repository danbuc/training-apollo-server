const { ApolloServer, gql } = require('apollo-server');

const manga = [
    { title: 'One Piece', currentAvailable: '87', currentRead: '84', completedByAuthor: false },
    { title: 'Deathnote', currentAvailable: '13', currentRead: '13', completedByAuthor: true }
];

const typeDefs = gql `
    type Query {
        dummy: String
    }
    type Manga {
        title: String
        currentAvailable: String
        currentRead: String
        completedByAuthor: Boolean
    }
`;

const server = new ApolloServer({
    typeDefs: typeDefs
});

server.listen().then(({ url }) => {
    console.log(`Server listening on ${url}`);
});