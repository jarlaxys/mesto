const popupElement = document.querySelector('.popup');
const popupEditButtonElement = document.querySelector('.profile__edit-profile');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
let nameInputElement = popupElement.querySelector('.popup__input_info_name');
let infoInputElement = popupElement.querySelector('.popup__input_info_job');
let nameElement = document.querySelector('.profile__title');
let infoElement = document.querySelector('.profile__subtitle');

function openPopup() {
  popupElement.classList.add('popup_open');
  nameInputElement.value = nameElement.textContent;
  infoInputElement.value = infoElement.textContent;
}

function closePopup() {
  popupElement.classList.remove('popup_open');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInputElement.value;
  infoElement.textContent = infoInputElement.value;
  closePopup();
}

popupEditButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('submit', handleFormSubmit);
