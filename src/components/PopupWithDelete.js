import { Popup } from "./Popup.js";

export class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__content");
  }

  open(remove) {
    super.open();

    this._removeCardId = remove;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._removeCardId()
        .then(() => this.close())
        .catch((err) => console.log(`Ошибка удаления карточки: ${err}`));
    });
  }
}
