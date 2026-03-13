import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book("Eat, Pray, Love", "Elizabeth Gilbert", 2006);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);

const ebook1 = new EBook("Dune", "Frank Herbert", 1965, "epub");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

book1.title = "Eat Pray Love";
ebook1.fileFormat = "PDF";
console.log("Updated book1 title:", book1.title);
console.log("Updated ebook1 format:", ebook1.fileFormat);

const allBooks = [book1, book2, ebook1];
const oldest = Book.findOldest(allBooks);
console.log("Oldest book:");
oldest.printInfo();

const ebookFromBook = EBook.fromBook(book2, "mobi");
console.log("EBook created from Book:");
ebookFromBook.printInfo();
