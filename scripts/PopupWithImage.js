import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImgElement = document.querySelector('#img-popup');
    this._popupImg = this._popupImgElement.querySelector('.popup__img');
    this._popupSubtitle = this._popupImgElement.querySelector('.popup__subtitle')
  }

  open(text, link) {
    super.open();
    this._popupImg.src = link;
    this._popupImg.alt = text;
    this._popupSubtitle.textContent = text;
  }
}
