import { initialCards } from './scripts/cards.js';
import { configFormSelector, popupEditButtonElement, popupEditForm, nameInputElement, infoInputElement, popupAddButtonElement, popupAddForm } from './scripts/constants.js';
import { FormValidator } from "./scripts/formValidator.js";
import { Card } from "./scripts/card.js";
import {PopupWithImage} from "./scripts/PopupWithImage.js";
import {PopupWithForm} from "./scripts/PopupWithForm.js";
import {Section} from "./scripts/section.js";
import {UserInfo} from "./scripts/userInfo.js";
import  './pages/index.css';

const popupAddCard = new PopupWithForm('#add-popup', {
  callbackSubmitForm: (values) => {
    addAllCards.addItem((getCard({
      name: values.title,
      link: values.link
    })));
    popupAddCard.close();
  }
});
popupAddButtonElement.addEventListener('click', function () {
  popupAddCard.open();
  addCardFormValidation.resetValidation();
  addCardFormValidation.disabledButton()
});
popupAddCard.setEventListeners();


const userInfo = new UserInfo('.profile__title', '.profile__subtitle')

const popupEditProfile = new PopupWithForm('#edit-popup', {
  callbackSubmitForm: (values) => {
      userInfo.setUserInfo({
        name: values.name,
        info: values.job });
      popupEditProfile.close();
    }
  });
popupEditButtonElement.addEventListener('click', function () {
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

function getCard(item) {
  const card = new Card(item.name, item.link, '#card', handleCardClick);
  return card.newCard();
}

const addAllCards = new Section({
  items: initialCards,
  renderer: getCard
  }, '.gallery__cards');
addAllCards.renderAllCards();

const addCardFormValidation = new FormValidator(popupAddForm, configFormSelector);
const editCardFormValidation = new FormValidator(popupEditForm, configFormSelector);

addCardFormValidation.enableValidation();
editCardFormValidation.enableValidation();
