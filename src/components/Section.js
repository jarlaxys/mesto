export class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(container);
  }

  renderAllCards() {
    this._items.forEach((item) => {
      this.renderItem(this._renderer(item));
    });
  }

  renderItem(card) {
    this._containerSelector.prepend(card);
  }

  setItems(items) {
    this._items = items;
  }
}
