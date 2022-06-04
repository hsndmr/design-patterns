import { Ebook, Page } from "./ebook.interface";

export class Kindle implements Ebook {
  private page = 1;
  private totalPages = 10;

  unlock(): boolean {
    return true;
  }

  pressNext(): number {
    this.page++;
    return this.page;
  }

  getPage(): Page {
    return {
      total: this.totalPages,
      current: this.page,
    };
  }
}
