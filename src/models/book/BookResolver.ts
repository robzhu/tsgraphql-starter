import { Resolver, Query } from "type-graphql";
import { Book } from "./Book";
import { books } from "../../records";

@Resolver()
export class BookResolver {
  @Query(returns => [Book])
  public allBooks() {
    return books;
  }
}
