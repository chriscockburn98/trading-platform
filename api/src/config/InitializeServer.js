import { ApolloServer } from "apollo-server-express";

import { typeDefs } from "../typeDefs.js";
import resolvers from "../resolvers.js";

const server = new ApolloServer({
	typeDefs,
	resolvers,
	// introspection: false,
	// debug: true,
	playground: true,
});


export default server;