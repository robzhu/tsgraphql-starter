export const books = [
  {
    id: 1,
    title: "Harry Potter and The Philosopher's Stone",
    edition: 1,
    authorId: 1,
    isbn: "9780747532743"
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    edition: 1,
    authorId: 1,
    isbn: "9780329975869"
  }
];

export const authors = [
  {
    id: 1,
    penName: "JK Rowling",
    realName: "Joanne Rowling",
    nationality: "British",
    bookIds: [1, 2]
  }
];
