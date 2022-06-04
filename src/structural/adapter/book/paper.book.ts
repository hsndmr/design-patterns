import { Book } from "./book.interface";

export class PaperBook implements Book {
  private page = 1;

  turnPage(): number {
    this.page++;
    return this.page;
  }

  open(): boolean {
    return true;
  }

  getPage(): number {
    return this.page;
  }
}
