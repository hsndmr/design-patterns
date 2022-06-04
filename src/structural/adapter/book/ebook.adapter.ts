import { Book } from "./book.interface";
import { Ebook } from "./ebook.interface";

export class EBookAdapter implements Book {
  protected eBook: Ebook;

  constructor(eBook: Ebook) {
    this.eBook = eBook;
  }

  open(): boolean {
    return true;
  }

  turnPage(): number {
    return this.eBook.pressNext();
  }

  getPage(): number {
    return this.eBook.getPage().current;
  }
}
