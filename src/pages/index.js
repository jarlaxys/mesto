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
  callbackSubmitForm: async (values) => {
    await api
      .postNewCard(values)
      .then((res) => {
        addAllCards.renderItem(getCard(res));
        popupAddCard.close();
      })
      .catch((err) => console.log(`Ошибка сохранения: ${err}`))
      .finally(() => {
        popupAddCard._saveButton.textContent = popupAddCard._buttonText;
      });
  },
});
AddCardButton.addEventListener("click", function () {
  popupAddCard.open();
  addCardFormValidation.resetValidation();
  addCardFormValidation.disabledButton();
});
popupAddCard.setEventListeners();

const popupEditAvatar = new PopupWithForm("#edit-avatar", {
  callbackSubmitForm: async (values) => {
    await api
      .setAvatar(values)
      .then((res) => {
        userInfo.setAvatar({
          avatar: res.avatar,
        });
        popupEditAvatar.close();
      })
      .catch((err) => console.log(`Ошибка сохранения: ${err}`))
      .finally(() => {
        popupEditAvatar._saveButton.textContent = popupEditAvatar._buttonText;
      });
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
  callbackSubmitForm: async (values) => {
    await api
      .patchUserInfo(values)
      .then((res) => {
        userInfo.setUserInfo({
          name: res.name,
          info: res.about,
          avatar: res.avatar,
          id: res._id,
        });
        popupEditProfile.close();
      })
      .catch((err) => console.log(`Ошибка сохранения: ${err}`))
      .finally(() => {
        popupEditProfile._saveButton.textContent = popupEditProfile._buttonText;
      });
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

export const deletePopup = new PopupWithDelete("#delete-card", {
  callbackSubmitForm: async (cardId) => {
    api
      .deleteCard(cardId)
      .then(() => {
        deletePopup.close();
      })
      .catch((err) => console.log(`Ошибка удаления карточки: ${err}`));
  },
});
deletePopup.setEventListeners();

const getCard = (oneCard) => {
  const card = new Card(userInfo, oneCard, "#card", {
    handleCardClick: (name, link) => {
      popupImage.open(name, link);
    },
    openPopupDelete: (cardId, cardEl) => {
      deletePopup.open(cardId, cardEl);
    },
  });
  return card.newCard();
};

const addAllCards = new Section(
  {
    renderer: getCard,
  },
  ".gallery__cards",
);

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userRes, cardsRes]) => {
    userInfo.setUserInfo({
      name: userRes.name,
      info: userRes.about,
      avatar: userRes.avatar,
      id: userRes._id,
    });
    addAllCards.renderAllCards(cardsRes.reverse());
  })
  .catch((err) => console.log(`Ошибка загрузки данных: ${err}`));

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
