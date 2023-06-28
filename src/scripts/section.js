export class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderAllCards() {
    this._items.forEach((item) => {
      this.addItem(this._renderer(item));
    })
  }

  addItem(card) {
    this._containerSelector.prepend(card);
  }
}
