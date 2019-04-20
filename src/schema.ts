import { buildSchema } from "type-graphql";
import { BookResolver } from "./models/book/bookResolver";
import { AuthorResolver } from "./models/author/AuthorResolver";

export async function buildAppSchema() {
  return await buildSchema({
    // Add more resolvers here
    resolvers: [BookResolver, AuthorResolver]
  });
}
