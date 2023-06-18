import { initialCards } from '../scripts/cards.js';
import { Card } from '../scripts/card.js';
import { FormValidator } from '../scripts/formValidator.js';
import { configFormSelector, popupEditElement, popupEditButtonElement, popupEditForm, nameInputElement, infoInputElement, nameElement, infoElement, popupElement, popupAddButtonElement, popupAddForm, titleInputElement, linkInputElement } from '../scripts/constants.js';


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

function editFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInputElement.value;
  infoElement.textContent = infoInputElement.value;
  closePopup(popupEditElement);
}

//функция добавления карточки
function createFormSubmit(evt) {
  evt.preventDefault();

  const cardsGallery = document.querySelector('.gallery__cards');

  const card = new Card(titleInputElement.value, linkInputElement.value, '#card');
  const cardElement = card.newCard();
  cardsGallery.prepend(cardElement);

  popupAddForm.reset();

  closePopup(popupElement);
  addCardFormValidation.disabledButton();
}

function openPopupEdit() {
  openPopup(popupEditElement);
  nameInputElement.value = nameElement.textContent;
  infoInputElement.value = infoElement.textContent;
}

//открывает попап редактирования
popupEditButtonElement.addEventListener('click', openPopupEdit);

//отправляет форму редактирования
popupEditForm.addEventListener('submit', editFormSubmit);

//открывает попап добавления карточки
popupAddButtonElement.addEventListener('click', function () {
  openPopup(popupElement);
  addCardFormValidation.resetValidation();
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

  const card = new Card(item.name, item.link, '#card');
  const cardElement = card.newCard();
  cardsGallery.prepend(cardElement);
});

const addCardFormValidation = new FormValidator(popupAddForm, configFormSelector);
const editCardFormValidation = new FormValidator(popupEditForm, configFormSelector);

addCardFormValidation.enableValidation();
editCardFormValidation.enableValidation();
