import { gql } from "apollo-server-express";

export const typeDefs = gql`
	type Query
	type Mutation

	type loginResponse {
		token: String
	}

	extend type Query {
		login(email: String!, password: String!): loginResponse
	}
	extend type Mutation {
		login(email: String!, password: String!): loginResponse
	}
`;
