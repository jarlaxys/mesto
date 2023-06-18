const popupEditElement = document.querySelector('#edit-popup');
const popupEditButtonElement = document.querySelector('.profile__edit-profile');
const popupEditForm = popupEditElement.querySelector('.popup__content');

const nameInputElement = popupEditElement.querySelector('.popup__input_info_name');
const infoInputElement = popupEditElement.querySelector('.popup__input_info_job');

const nameElement = document.querySelector('.profile__title');
const infoElement = document.querySelector('.profile__subtitle');

const popupElement = document.querySelector('#add-popup');
const popupAddButtonElement = document.querySelector('.profile__add-card');
const popupAddForm = popupElement.querySelector('.popup__content');

const titleInputElement = popupElement.querySelector('.popup__input_info_title');
const linkInputElement = popupElement.querySelector('.popup__input_info_link');

const configFormSelector = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__input_state_invalid',
}

export { configFormSelector, popupEditElement, popupEditButtonElement, popupEditForm, nameInputElement, infoInputElement, nameElement, infoElement, popupElement, popupAddButtonElement, popupAddForm, titleInputElement, linkInputElement }
