const popupElement = document.querySelector('.popup');
const popupEditButtonElement = document.querySelector('.button__edit-profile');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupSaveButtonElement = popupElement.querySelector('.popup__save');
let nameInputElement = popupElement.querySelector('.popup__name');
let infoInputElement = popupElement.querySelector('.popup__info');
let nameElement = document.querySelector('.profile__title');
let infoElement = document.querySelector('.profile__subtitle');

function togglePopupVisibility () {
  popupElement.classList.toggle('popup_open');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInputElement.value;
  infoElement.textContent = infoInputElement.value;
  togglePopupVisibility ();
}

nameInputElement.defaultValue = nameElement.textContent;
infoInputElement.defaultValue = infoElement.textContent;

popupEditButtonElement.addEventListener('click', togglePopupVisibility);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);
popupSaveButtonElement.addEventListener('click', handleFormSubmit);
