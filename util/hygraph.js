import { GraphQLClient } from "graphql-request";

const hygraph = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/cl010ls589gft01ysdj124s2y/master"
);

export default hygraph;
