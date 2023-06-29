import { initialCards } from '../utils/cards.js';
import { configFormSelector, profileEditButton, popupEditForm, nameInputElement, infoInputElement, AddCardButton, popupAddCardForm } from '../utils/constants.js';
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {Section} from "../components/Section.js";
import {UserInfo} from "../components/UserInfo.js";
import  './index.css';

const popupAddCard = new PopupWithForm('#add-popup', {
  callbackSubmitForm: (values) => {
    addAllCards.addItem((getCard({
      name: values.title,
      link: values.link
    })));
    popupAddCard.close();
  }
});
AddCardButton.addEventListener('click', function () {
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

function getCard(item) {
  const card = new Card(item.name, item.link, '#card', handleCardClick);
  return card.newCard();
}

const addAllCards = new Section({
  items: initialCards,
  renderer: getCard
  }, '.gallery__cards');
addAllCards.renderAllCards();

const addCardFormValidation = new FormValidator(popupAddCardForm, configFormSelector);
const editCardFormValidation = new FormValidator(popupEditForm, configFormSelector);

addCardFormValidation.enableValidation();
editCardFormValidation.enableValidation();
