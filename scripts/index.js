const popupEditElement = document.querySelector('#edit-popup');
const popupEditButtonElement = document.querySelector('.profile__edit-profile');
const popupEditCloseButtonElement = popupEditElement.querySelector('#edit-close');
const popupEditForm = popupEditElement.querySelector('.popup__content');

const nameInputElement = popupEditElement.querySelector('.popup__input_info_name');
const infoInputElement = popupEditElement.querySelector('.popup__input_info_job');

const nameElement = document.querySelector('.profile__title');
const infoElement = document.querySelector('.profile__subtitle');

const popupElement = document.querySelector('#add-popup');
const popupAddButtonElement = document.querySelector('.profile__add-card');
const popupAddCloseButtonElement = popupElement.querySelector('#add-close');
const popupAddForm = popupElement.querySelector('.popup__content');

const titleInputElement = popupElement.querySelector('.popup__input_info_title');
const linkInputElement = popupElement.querySelector('.popup__input_info_link');

const popupImgElement = document.querySelector('#img-popup');

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInputElement.value;
  infoElement.textContent = infoInputElement.value;
  closePopup(popupEditElement);
}

//функция создания карточки
function newCard(name, link) {
  const cardTemplate = document.querySelector('#card').content;
  const cardsGallery = document.querySelector('.gallery__cards');
  const cardElements = cardTemplate.querySelector('.card').cloneNode(true);

  cardElements.querySelector('.card__img').src = link;
  cardElements.querySelector('.card__img').alt = name;
  cardElements.querySelector('.card__txt').textContent = name;

  cardElements.querySelector('.card__img').addEventListener('click', () => {
    const popupImgElement = document.querySelector('#img-popup');
    openPopup(popupImgElement);

    popupImgElement.querySelector('.popup__img').src = link;
    popupImgElement.querySelector('.popup__img').alt = name;
    popupImgElement.querySelector('.popup__subtitle').textContent = name;
  })

  cardElements.querySelector('.card__delite').addEventListener('click', () => {
    cardElements.remove();
  });

  const like = cardElements.querySelector('.card__like');
  like.addEventListener('click', () => {
    like.classList.toggle('card__like_active');
  });

  return cardElements;
}

//функция добавления карточки
function createFormSubmit(evt) {
  evt.preventDefault();

  const cardsGallery = document.querySelector('.gallery__cards');
  cardsGallery.prepend(
    newCard(titleInputElement.value, linkInputElement.value)
  );

  popupAddForm.reset();

  closePopup(popupElement);
}

//открывает попап редактирования
popupEditButtonElement.addEventListener('click', function () {
  openPopup(popupEditElement);
  nameInputElement.value = nameElement.textContent;
  infoInputElement.value = infoElement.textContent;
});

//закрывает попап редактирования
popupEditCloseButtonElement.addEventListener('click', function () {
  closePopup(popupEditElement);
});

//отправляет форму редактирования
popupEditForm.addEventListener('submit', handleFormSubmit);

//открывает попап добавления карточки
popupAddButtonElement.addEventListener('click', function () {
  openPopup(popupElement)
});

//закрывает попап добавления карточки
popupAddCloseButtonElement.addEventListener('click', function () {
  closePopup(popupElement);
});

//отправляет форму добавления карточки
popupAddForm.addEventListener('submit', createFormSubmit);

//закрывает попап с картинкой
popupImgElement.querySelector('#img-close').addEventListener('click', () => {
  closePopup(popupImgElement);
});

//добавляет карточки из массива
initialCards.forEach((item) => {
  const cardsGallery = document.querySelector('.gallery__cards');
  cardsGallery.prepend(newCard(item.name, item.link));
});
