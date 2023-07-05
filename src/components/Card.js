import {deletePopup} from '../pages/index.js';

export class Card {
  constructor(name, link, like, templateElement, handleCardClick) {
    this._name = name;
    this._link = link;
    this._like = like;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
  }

  _likeCard(event) {
    event.target.classList.toggle('card__like_active');
  }

  _removeCard() {
    this._cardElement.remove();
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    this._cardElement.querySelector('.card__delete').addEventListener('click', () => {
      deletePopup.open();
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
    this._cardElement.querySelector('.card__likes-counter').textContent = this._like;

    this._setEventListeners();

    return this._cardElement;
  }
}
