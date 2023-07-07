import { deletePopup } from "../pages/index.js";
import { api } from "./Api.js";

export class Card {
  constructor(userId, oneCard, templateElement, handleCardClick) {
    this._name = oneCard.name;
    this._link = oneCard.link;
    this._like = oneCard.likes;
    this._userId = userId;
    this._authorId = oneCard.owner._id;
    this._cardId = oneCard._id;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
  }

  _likeCard(event) {
    event.target.classList.toggle("card__like_active");
  }

  _removeCard() {
    return api
      .deleteCard(this._cardId)
      .then(() => {
        this._cardElement.remove();
      })
      .catch((err) => Promise.reject(err));
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._cardElement
      .querySelector(".card__like")
      .addEventListener("click", (event) => {
        this._likeCard(event);
      });

    if (this._userId === this._authorId) {
      this._cardElement
        .querySelector(".card__delete")
        .addEventListener("click", () => {
          deletePopup.open(() => this._removeCard());
        });
    } else {
      this._deleteIcon.remove();
    }
  }

  newCard() {
    this._cardElement = document
      .querySelector(this._templateElement)
      .content.querySelector(".card")
      .cloneNode(true);

    this._cardImage = this._cardElement.querySelector(".card__img");
    this._deleteIcon = this._cardElement.querySelector(".card__delete");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardElement.querySelector(".card__txt").textContent = this._name;
    this._cardElement.querySelector(".card__likes-counter").textContent =
      this._like.length;

    this._setEventListeners();

    return this._cardElement;
  }
}
