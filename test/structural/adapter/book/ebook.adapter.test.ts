import { PaperBook } from "../../../../src/structural/adapter/book/paper.book";
import { Kindle } from "../../../../src/structural/adapter/book/kindle";
import { EBookAdapter } from "../../../../src/structural/adapter/book/ebook.adapter";

test("it can turn page on book", () => {
  const book = new PaperBook();
  book.open();
  book.turnPage();
  expect(book.getPage()).toBe(2);
});

test("it can turn page on kindle", () => {
  const kindle = new Kindle();
  const book = new EBookAdapter(kindle);
  book.open();
  book.turnPage();
  expect(book.getPage()).toBe(2);
});
