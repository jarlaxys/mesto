import {
  AddCardButton,
  configFormSelector,
  infoInputElement,
  nameInputElement,
  popupAddCardForm,
  popupEditForm,
  profileEditButton,
  editAvatarButton,
  popupEditAvatarForm,
} from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import "./index.css";
import { api } from "../components/Api.js";
import { PopupWithDelete } from "../components/PopupWithDelete";

const popupAddCard = new PopupWithForm("#add-popup", {
  callbackSubmitForm: (values) => {
    api
      .postNewCard(values)
      .then((res) => {
        addAllCards.renderItem(getCard(res));
      })
      .catch((err) => console.log(err))
      .finally(() => popupAddCard.close());
  },
});
AddCardButton.addEventListener("click", function () {
  popupAddCard.open();
  addCardFormValidation.resetValidation();
  addCardFormValidation.disabledButton();
});
popupAddCard.setEventListeners();

const popupEditAvatar = new PopupWithForm("#edit-avatar", {
  callbackSubmitForm: (values) => {
    api.setAvatar(values).then((res) => {
      console.log(res);
      userInfo.setAvatar({
        avatar: res.avatar,
      });
    });
    popupEditAvatar.close();
  },
});
editAvatarButton.addEventListener("click", function () {
  popupEditAvatar.open();
  editAvatarFormValidation.resetValidation();
});
popupEditAvatar.setEventListeners();

const userInfo = new UserInfo(
  ".profile__title",
  ".profile__subtitle",
  ".profile__avatar",
);

const popupEditProfile = new PopupWithForm("#edit-popup", {
  callbackSubmitForm: (values) => {
    api
      .patchUserInfo(values)
      .then((res) => {
        userInfo.setUserInfo({
          name: res.name,
          info: res.about,
          avatar: res.avatar,
          id: res._id,
        });
      })
      .catch((err) => console.log(`ебучая ошибка: ${err}`));
    popupEditProfile.close();
  },
});

profileEditButton.addEventListener("click", function () {
  popupEditProfile.open();
  const { name, job } = userInfo.getUserInfo();
  nameInputElement.value = name;
  infoInputElement.value = job;
  editCardFormValidation.resetValidation();
});
popupEditProfile.setEventListeners();

const popupImage = new PopupWithImage("#img-popup");
popupImage.setEventListeners();

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

export const deletePopup = new PopupWithDelete("#delete-card");
deletePopup.setEventListeners();

const getCard = (oneCard) => {
  const card = new Card(userInfo._id, oneCard, "#card", handleCardClick);
  return card.newCard();
};

const addAllCards = new Section(
  {
    items: [],
    renderer: getCard,
  },
  ".gallery__cards",
);

api
  .getUserInfo()
  .then((userRes) => {
    userInfo.setUserInfo({
      name: userRes.name,
      info: userRes.about,
      avatar: userRes.avatar,
      id: userRes._id,
    });
  })
  .catch((err) => {
    console.log(`Ошибка загрузки данных пользователя: ${err}`);
  });

api.getCards().then((cardsRes) => {
  console.log(cardsRes);
  addAllCards.setItems(cardsRes.reverse());
  addAllCards.renderAllCards();
});

const addCardFormValidation = new FormValidator(
  popupAddCardForm,
  configFormSelector,
);
const editCardFormValidation = new FormValidator(
  popupEditForm,
  configFormSelector,
);
const editAvatarFormValidation = new FormValidator(
  popupEditAvatarForm,
  configFormSelector,
);

addCardFormValidation.enableValidation();
editCardFormValidation.enableValidation();
editAvatarFormValidation.enableValidation();
