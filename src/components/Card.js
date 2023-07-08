import { deletePopup } from "../pages";
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

  _likeCard() {
    /*
    event.target.classList.toggle("card__like_active");
*/
    return this._like.some((like) => like._id === this._userId);
  }

  async _removeCard() {
    await api.deleteCard(this._cardId);
    this._cardElement.remove();
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._cardElement
      .querySelector(".card__like")
      .addEventListener("click", () => {
        if (this._likeCard()) {
          api.deleteLike(this._cardId).then((res) => {
            this._cardElement
              .querySelector(".card__like")
              .classList.remove("card__like_active");
            this._like = res.likes;
            this._cardElement.querySelector(
              ".card__likes-counter",
            ).textContent = this._like.length;
          });
        } else {
          api.addLike(this._cardId).then((res) => {
            this._cardElement
              .querySelector(".card__like")
              .classList.add("card__like_active");
            this._like = res.likes;
            this._cardElement.querySelector(
              ".card__likes-counter",
            ).textContent = this._like.length;
          });
        }
      });

    if (this._likeCard()) {
      this._cardElement
        .querySelector(".card__like")
        .classList.add("card__like_active");
    } else {
      this._cardElement
        .querySelector(".card__like")
        .classList.remove("card__like_active");
    }

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
