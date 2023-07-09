export class Card {
  constructor(userInfo, oneCard, templateElement, methods) {
    this._name = oneCard.name;
    this._link = oneCard.link;
    this._like = oneCard.likes;
    this._userId = userInfo.getUserInfo().id;
    this._authorId = oneCard.owner._id;
    this._cardId = oneCard._id;
    this._templateElement = templateElement;
    this._handleCardClick = methods.handleCardClick;
    this._openPopupDelete = methods.openPopupDelete;
    this._addLike = methods.addLikeCard;
    this._removeLike = methods.removeLikeCard;
  }

  _likeCard() {
    return this._like.some((like) => like._id === this._userId);
  }

  addLike(likes) {
    this._cardLikeButton.classList.add("card__like_active");
    this._like = likes;
    this._likeCounter.textContent = this._like.length;
  }

  removeLike(likes) {
    this._cardLikeButton.classList.remove("card__like_active");
    this._like = likes;
    this._likeCounter.textContent = this._like.length;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._cardLikeButton.addEventListener("click", () => {
      if (this._likeCard()) {
        this._removeLike(this._cardId);
      } else {
        this._addLike(this._cardId);
      }
    });

    if (this._userId === this._authorId) {
      this._deleteIcon.addEventListener("click", () => {
        this._openPopupDelete(this._cardId, this._cardElement);
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
    this._cardLikeButton = this._cardElement.querySelector(".card__like");
    this._likeCounter = this._cardElement.querySelector(".card__likes-counter");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardElement.querySelector(".card__txt").textContent = this._name;
    this._likeCounter.textContent = this._like.length;

    if (this._likeCard()) {
      this._cardLikeButton.classList.add("card__like_active");
    } else {
      this._cardLikeButton.classList.remove("card__like_active");
    }

    this._setEventListeners();

    return this._cardElement;
  }
}
