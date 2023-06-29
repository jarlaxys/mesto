import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.popup__img');
    this._popupSubtitle = this._popup.querySelector('.popup__subtitle')
  }

  open(text, link) {
    super.open();
    this._popupImg.src = link;
    this._popupImg.alt = text;
    this._popupSubtitle.textContent = text;
  }
}
