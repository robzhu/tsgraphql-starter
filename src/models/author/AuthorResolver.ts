import { Resolver, Query } from "type-graphql";
import { Author } from "./Author";
import { authors } from "../../records";

@Resolver()
export class AuthorResolver {
  @Query(returns => [Author])
  public allAuthors() {
    return authors;
  }
}
