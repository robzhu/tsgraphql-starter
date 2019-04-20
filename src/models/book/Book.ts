import { Field, ObjectType, Int, ID } from "type-graphql";
import { Author } from "../author/Author";
import { authors } from "../../records";

@ObjectType()
export class Book {
  @Field(type => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  isbn: string;

  @Field(type => Int)
  edition: number;

  authorId: number;

  @Field(type => Author, { name: "author" })
  public async getAuthor() {
    return authors.filter(a => a.id === this.authorId)[0];
  }
}
