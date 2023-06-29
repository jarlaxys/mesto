export const popupEditProfile = document.querySelector('#edit-popup');
export const profileEditButton = document.querySelector('.profile__edit-profile');
export const popupEditForm = popupEditProfile.querySelector('.popup__content');

export const nameInputElement = popupEditProfile.querySelector('.popup__input_info_name');
export const infoInputElement = popupEditProfile.querySelector('.popup__input_info_job');

export const popupAddCard = document.querySelector('#add-popup');
export const AddCardButton = document.querySelector('.profile__add-card');
export const popupAddCardForm = popupAddCard.querySelector('.popup__content');

export const configFormSelector = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__input_state_invalid',
}