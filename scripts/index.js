//редактирование информации в профиле
const popupEditElement = document.querySelector('#edit-popup');
const popupEditButtonElement = document.querySelector('.profile__edit-profile');
const popupEditCloseButtonElement = popupEditElement.querySelector('#edit-close');
const popupForm = popupEditElement.querySelector('.popup__content');
const nameInputElement = popupEditElement.querySelector('.popup__input_info_name');
const infoInputElement = popupEditElement.querySelector('.popup__input_info_job');
const nameElement = document.querySelector('.profile__title');
const infoElement = document.querySelector('.profile__subtitle');

function openPopupEdit() {
  popupEditElement.classList.add('popup_opened');
  nameInputElement.value = nameElement.textContent;
  infoInputElement.value = infoElement.textContent;
}

function closePopupEdit() {
  popupEditElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInputElement.value;
  infoElement.textContent = infoInputElement.value;
  closePopupEdit();
}

popupEditButtonElement.addEventListener('click', openPopupEdit);
popupEditCloseButtonElement.addEventListener('click', closePopupEdit);
popupForm.addEventListener('submit', handleFormSubmit);

//добавление карточек
const popupAddElement = document.querySelector('#add-popup');
const popupAddButtonElement = document.querySelector('.profile__add-card');
const popupAddCloseButtonElement = popupAddElement.querySelector('#add-close');
const popupAddForm = popupAddElement.querySelector('.popup__content');
const titleInputElement = popupAddElement.querySelector('.popup__input_info_title');
const linkInputElement = popupAddElement.querySelector('.popup__input_info_link');

function openPopupAdd() {
  popupAddElement.classList.add('popup_opened');
}

function closePopupAdd() {
  popupAddElement.classList.remove('popup_opened');
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(item => {
  const cardTemplate = document.querySelector('#card').content;
  const cardsGallery = document.querySelector('.gallery__cards');
  const cardElements = cardTemplate.querySelector('.card').cloneNode(true);

  cardElements.querySelector('.card__img').src = item.link;
  cardElements.querySelector('.card__img').alt = item.name;
  cardElements.querySelector('.card__txt').textContent = item.name;

  cardsGallery.prepend(cardElements);
})

function createFormSubmit(evt) {
  evt.preventDefault();
  const cardTemplate = document.querySelector('#card').content;
  const cardsGallery = document.querySelector('.gallery__cards');
  const cardElements = cardTemplate.querySelector('.card').cloneNode(true);

  cardElements.querySelector('.card__img').src = linkInputElement.value;
  cardElements.querySelector('.card__img').alt = titleInputElement.value;
  cardElements.querySelector('.card__txt').textContent = titleInputElement.value;

  cardsGallery.prepend(cardElements);
  linkInputElement.value = '';
  titleInputElement.value = '';
  closePopupAdd();
}

popupAddButtonElement.addEventListener('click', openPopupAdd);
popupAddCloseButtonElement.addEventListener('click', closePopupAdd);
popupAddForm.addEventListener('submit', createFormSubmit);
