import { GraphQLClient } from "graphql-request";

const hygraph = new GraphQLClient(process.env.GRAPHCMS_URL);

export default hygraph;
