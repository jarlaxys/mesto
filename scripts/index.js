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
const popupEditElement = document.querySelector('#edit-popup');
const popupEditButtonElement = document.querySelector('.profile__edit-profile');
const popupEditCloseButtonElement = popupEditElement.querySelector('#edit-close');
const popupForm = popupEditElement.querySelector('.popup__content');
const nameInputElement = popupEditElement.querySelector('.popup__input_info_name');
const infoInputElement = popupEditElement.querySelector('.popup__input_info_job');
const nameElement = document.querySelector('.profile__title');
const infoElement = document.querySelector('.profile__subtitle');
const popupAddElement = document.querySelector('#add-popup');
const popupAddButtonElement = document.querySelector('.profile__add-card');
const popupAddCloseButtonElement = popupAddElement.querySelector('#add-close');
const popupAddForm = popupAddElement.querySelector('.popup__content');
const titleInputElement = popupAddElement.querySelector('.popup__input_info_title');
const linkInputElement = popupAddElement.querySelector('.popup__input_info_link');

function openPopupEdit() {
  popupEditElement.classList.add('popup_opened');
  nameInputElement.value = nameElement.textContent;
  infoInputElement.value = infoElement.textContent;
}

function openPopupAdd() {
  popupAddElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInputElement.value;
  infoElement.textContent = infoInputElement.value;
  closePopup();
}

initialCards.forEach(item => {
  const cardTemplate = document.querySelector('#card').content;
  const cardsGallery = document.querySelector('.gallery__cards');
  const cardElements = cardTemplate.querySelector('.card').cloneNode(true);

  cardElements.querySelector('.card__img').src = item.link;
  cardElements.querySelector('.card__img').alt = item.name;
  cardElements.querySelector('.card__txt').textContent = item.name;

  cardElements.querySelector('.card__img').addEventListener('click', () => {
    const imgTemplate = document.querySelector('#popup-img').content;
    const page = document.querySelector('.page');
    const imgElement = imgTemplate.querySelector('.popup-img').cloneNode(true);

    imgElement.querySelector('.popup-img__item').src = item.link;
    imgElement.querySelector('.popup-img__close').addEventListener('click', () => {
      imgElement.remove();
    });
    imgElement.querySelector('.popup-img__title').textContent = item.name;

    page.prepend(imgElement);
  })

  cardElements.querySelector('.card__delite').addEventListener('click', () => {
    cardElements.remove();
  });

  const like = cardElements.querySelector('.card__like');

  like.addEventListener('click', () => {
    like.classList.toggle('card__like_active');
  });

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

  cardElements.querySelector('.card__img').addEventListener('click', () => {
    const imgTemplate = document.querySelector('#popup-img').content;
    const page = document.querySelector('.page');
    const imgElement = imgTemplate.querySelector('.popup-img').cloneNode(true);

    imgElement.querySelector('.popup-img__item').src = linkInputElement.value;
    imgElement.querySelector('.popup-img__close').addEventListener('click', () => {
      imgElement.remove();
    });
    imgElement.querySelector('.popup-img__title').textContent = titleInputElement.value;

    page.prepend(imgElement);
  })

  cardElements.querySelector('.card__delite').addEventListener('click', () => {
    cardElements.remove();
  })

  const like = cardElements.querySelector('.card__like');

  like.addEventListener('click', () => {
    like.classList.toggle('card__like_active');
  });

  cardsGallery.prepend(cardElements);

  linkInputElement.value = '';
  titleInputElement.value = '';
  closePopup(popupAddElement);
}

popupEditButtonElement.addEventListener('click', openPopupEdit);        //открывает попап редактирования
popupEditCloseButtonElement.addEventListener('click', function() {      //закрывает попап редактирования
  closePopup(popupEditElement);
});
popupForm.addEventListener('submit', handleFormSubmit);                 //отправляет форму редактирования

popupAddButtonElement.addEventListener('click', openPopupAdd);          //открывает попап добавления картинки
popupAddCloseButtonElement.addEventListener('click', function() {       //закрывает попап добавления картинки
  closePopup(popupAddElement);
});
popupAddForm.addEventListener('submit', createFormSubmit);              //отправляет форму добавления картинки
