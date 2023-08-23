import { GraphQLScalarType } from "graphql";

export const GraphQLBigInt = new GraphQLScalarType({
  name: "BigInt",
  description: "GraphQL representation of BigInt",

  parseValue(value: string) {
    return Number(value); // value from the client input variables
  },

  serialize(value: BigInt | number) {
    return value ? value.toString(10) : null; // value sent to the client
  },
});

export default GraphQLBigInt;
