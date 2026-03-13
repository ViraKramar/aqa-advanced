class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Getters
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get year() {
    return this._year;
  }

  // Setters with validation
  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Book.title must be a non-empty string");
    }
    this._title = value.trim();
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Book.author must be a non-empty string");
    }
    this._author = value.trim();
  }

  set year(value) {
    if (typeof value !== "number" || !Number.isInteger(value)) {
      throw new Error("Book.year must be an integer number");
    }
    const currentYear = new Date().getFullYear();
    if (value < 0 || value > currentYear) {
      throw new Error(`Book.year must be between 0 and ${currentYear}`);
    }
    this._year = value;
  }

  printInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
  }

  static findOldest(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error("Book.findOldest expects a non-empty array of books");
    }
    return books.reduce((oldest, b) => (b.year < oldest.year ? b : oldest), books[0]);
  }
}

export default Book;
