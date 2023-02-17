import { GraphQLClient } from "graphql-request";

const endpoint = process.env.HYGRAPH_ENDPOINT || "";
const graphqlClient = new GraphQLClient(endpoint);

export default graphqlClient;
