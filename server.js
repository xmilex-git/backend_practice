import {ApolloServer, gql} from "apollo-server";

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => "bebe",
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(() => console.log("Server is running http://localhost:4000/"));