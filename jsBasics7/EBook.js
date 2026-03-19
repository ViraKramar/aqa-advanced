import Book from './Book.js';

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('EBook.fileFormat must be a non-empty string');
    }
    this._fileFormat = value.trim().toLowerCase();
  }

  printInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}`
    );
  }

  static fromBook(bookInstance, fileFormat) {
    if (!(bookInstance instanceof Book)) {
      throw new Error('EBook.fromBook expects a Book instance as the first argument');
    }
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
  }
}

export default EBook;
