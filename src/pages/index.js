import { initialCards } from '../utils/cards.js';
import { configFormSelector, profileEditButton, popupEditForm, nameInputElement, infoInputElement, AddCardButton, popupAddCardForm } from '../utils/constants.js';
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {Section} from "../components/Section.js";
import {UserInfo} from "../components/UserInfo.js";
import  './index.css';
import {Api, api} from "../components/Api.js";
import {data} from "autoprefixer";
import {Popup} from "../components/Popup";
import {PopupWithDelete} from "../components/PopupWithDelete";

const popupAddCard = new PopupWithForm('#add-popup', {
  callbackSubmitForm: (values) => {
      const addAllCards = new Section({
          items: null,
          renderer: getCard
      }, '.gallery__cards');
      api.postNewCard(values)
          .then((res) => {
              addAllCards.addItem((getCard(res)));
          })
          .catch((err) => console.log(err))
    popupAddCard.close();
  }
});
AddCardButton.addEventListener('click', function () {
  popupAddCard.open();
  addCardFormValidation.resetValidation();
  addCardFormValidation.disabledButton()
});
popupAddCard.setEventListeners();


const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar')


api.getUserInfo()
    .then((res) => {
        userInfo.setUserInfo({
            name: res.name,
            info: res.about,
            avatar: res.avatar})
    })


const popupEditProfile = new PopupWithForm('#edit-popup', {
  callbackSubmitForm: (values) => {
      api.patchUserInfo(values)
          .then((res) => {
              userInfo.setUserInfo({
                  name: res.name,
                  info: res.about,
                  avatar: res.avatar})
          })
          .catch((err) => console.log(`ебучая ошибка: ${err}`))
      popupEditProfile.close();
    }
  });

profileEditButton.addEventListener('click', function () {
  popupEditProfile.open();
  const {name, job} = userInfo.getUserInfo();
  nameInputElement.value = name;
  infoInputElement.value = job;
  editCardFormValidation.resetValidation();
});
popupEditProfile.setEventListeners();

const popupImage = new PopupWithImage('#img-popup');
popupImage.setEventListeners();

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

export const deletePopup = new PopupWithDelete('#delete-card')

function getCard(res) {
  const card = new Card(res.name, res.link, res.likes.length, '#card', handleCardClick);
  return card.newCard();
}

api.getCards()
    .then((res) => {
      const addAllCards = new Section({
        items: res,
        renderer: getCard
      }, '.gallery__cards');

      addAllCards.renderAllCards(res);
    })


const addCardFormValidation = new FormValidator(popupAddCardForm, configFormSelector);
const editCardFormValidation = new FormValidator(popupEditForm, configFormSelector);

addCardFormValidation.enableValidation();
editCardFormValidation.enableValidation();
