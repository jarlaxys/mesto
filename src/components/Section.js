export class Section {
  constructor({items, renderer}, container) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(container);
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
