import { openPopup } from './index.js';

export class Card {
  constructor(name, link, templateElement) {
    this._name = name;
    this._link = link;
    this._templateElement = templateElement;
  }

  _openPopupCard() {
    const popupImgElement = document.querySelector('#img-popup');
    const popupImg = popupImgElement.querySelector('.popup__img');
    openPopup(popupImgElement);

    popupImg.src = this._link;
    popupImg.alt = this._name;
    popupImgElement.querySelector('.popup__subtitle').textContent = this._name;
  }

  _likeCard(event) {
    event.target.classList.toggle('card__like_active');
  }

  _removeCard() {
    this._cardElement.remove();
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._openPopupCard();
    });
    this._cardElement.querySelector('.card__delete').addEventListener('click', () => {
      this._removeCard();
    });
    this._cardElement.querySelector('.card__like').addEventListener('click', (event) => {
      this._likeCard(event);
    });
  }

  newCard() {
    this._cardElement = document
      .querySelector(this._templateElement)
      .content
      .querySelector('.card')
      .cloneNode(true)

    this._cardImage = this._cardElement.querySelector('.card__img');

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardElement.querySelector('.card__txt').textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
