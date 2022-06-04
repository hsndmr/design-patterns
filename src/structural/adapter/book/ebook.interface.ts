export interface Page {
  total: number;
  current: number;
}

export interface Ebook {
  unlock(): boolean;
  pressNext(): number;
  getPage(): Page;
}
