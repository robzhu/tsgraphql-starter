import { Field, ObjectType, Int, ID } from "type-graphql";
import { Book } from "../book/Book";
import { books } from "../../records";

@ObjectType()
export class Author {
  @Field(type => ID)
  id: number;

  @Field()
  penName: string;

  @Field()
  realName: string;

  @Field()
  nationality: string;

  bookIds: number[];

  @Field(type => [Book])
  public books() {
    return books.filter(b => b.authorId === this.id);
  }

  constructor(args: Partial<Author>) {
    Object.assign(this, args);
  }
}
