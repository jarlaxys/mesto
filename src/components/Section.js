export class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._containerSelector = document.querySelector(container);
  }

  renderAllCards(cards) {
    cards.forEach((item) => {
      this.renderItem(this._renderer(item));
    });
  }

  renderItem(card) {
    this._containerSelector.prepend(card);
  }
}
