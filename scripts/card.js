import {openPopup} from './index.js';

export class Card {
  constructor(name, link, templateElement) {
    this._name = name;
    this._link = link;
    this._templateElement = templateElement;
  }

  _openPopupCard() {
    const popupImgElement = document.querySelector('#img-popup');
    openPopup(popupImgElement);

    popupImgElement.querySelector('.popup__img').src = this._link;
    popupImgElement.querySelector('.popup__img').alt = this._name;
    popupImgElement.querySelector('.popup__subtitle').textContent = this._name;
  }

  _likeCard(event) {
    event.target.classList.toggle('card__like_active');
  }

  _removeCard(event) {
    event.target.closest('.card').remove();
  }

  _setEventListeners(cardElements) {
    cardElements.querySelector('.card__img').addEventListener('click', () => {
      this._openPopupCard();
    });
    cardElements.querySelector('.card__delite').addEventListener('click', (event) => {
      this._removeCard(event);
    });
    cardElements.querySelector('.card__like').addEventListener('click', (event) => {
      this._likeCard(event);
    });
  }

  newCard() {
    const cardElements = document
      .querySelector(this._templateElement)
      .content
      .querySelector('.card')
      .cloneNode(true)

    cardElements.querySelector('.card__img').src = this._link;
    cardElements.querySelector('.card__img').alt = this._name;
    cardElements.querySelector('.card__txt').textContent = this._name;

    this._setEventListeners(cardElements);

    return cardElements;
  }
}
