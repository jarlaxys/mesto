import {initialCards} from './cards.js';
import {Card} from './card.js';
import {FormValidator, configFormSelector, formSelector} from './validate.js';

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

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

const popups = document.querySelectorAll('.popup')
popups.forEach((popupElement) => {
  popupElement.addEventListener('click', closePopupOverlay)
})

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInputElement.value;
  infoElement.textContent = infoInputElement.value;
  closePopup(popupEditElement);
}

//функция добавления карточки
function createFormSubmit(evt) {
  evt.preventDefault();

  const cardsGallery = document.querySelector('.gallery__cards');

  const card = new Card (titleInputElement.value, linkInputElement.value, '#card');
  const cardElement = card.newCard();
  cardsGallery.prepend(cardElement);

  popupAddForm.reset();

  closePopup(popupElement);
  validationForm();
}

//открывает попап редактирования
popupEditButtonElement.addEventListener('click', function () {
  openPopup(popupEditElement);
  nameInputElement.value = nameElement.textContent;
  infoInputElement.value = infoElement.textContent;
});

//отправляет форму редактирования
popupEditForm.addEventListener('submit', handleFormSubmit);

//открывает попап добавления карточки
popupAddButtonElement.addEventListener('click', function () {
  openPopup(popupElement);
});

//отправляет форму добавления карточки
popupAddForm.addEventListener('submit', createFormSubmit);

//закрывает попапы
document.querySelectorAll('.popup__close').forEach(button => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup));
});

//добавляет карточки из массива
initialCards.forEach((item) => {
  const cardsGallery = document.querySelector('.gallery__cards');

  const card = new Card (item.name, item.link, '#card');
  const cardElement = card.newCard();
  cardsGallery.prepend(cardElement);
});

function validationForm() {
  document.querySelectorAll('.popup__content').forEach((form) => {
    new FormValidator(formSelector, configFormSelector).enableValidation();
  })
}

validationForm();
