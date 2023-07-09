import { Popup } from "./Popup.js";

export class PopupWithDelete extends Popup {
  constructor(popupSelector, { callbackSubmitForm }) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__content");
    this._callbackSubmitForm = callbackSubmitForm;
  }

  open(cardId, cardEl) {
    super.open();

    this.cardId = cardId;
    this.cardEl = cardEl;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callbackSubmitForm(this.cardId);
      this.cardEl.remove();
    });
  }
}
