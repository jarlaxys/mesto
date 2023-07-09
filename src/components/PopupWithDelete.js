import { Popup } from "./Popup.js";

export class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__content");
  }

  open(onDelete) {
    super.open();
    this._onDelete = onDelete;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._onDelete();
    });
  }
}
